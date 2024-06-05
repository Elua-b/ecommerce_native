// import useStorage from "@/hooks/useStorage";
import useStorage from "../../src/hooks/useStorage";
// import { getTokenData } from "@/utils/funcs";
import { getTokenData } from "../../src/utils/funcs";
import {  SplashScreen, usePathname, useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import React from 'react'
import { api } from "../../src/utils/fetcher";

const AuthContext = createContext({
  user: null,
  setToken: () => {},
  setUser: () => {},
  token: null,
  ready: false,
  getProfile: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);
export const whiteList = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/verify-phone",
];

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const { getData } = useStorage();
  const [token, setToken] = useState(undefined);
  const [ready, setReady] = useState(false);
  const segments = useSegments();
  const pathname = usePathname();
  const isAuthPage = whiteList.includes(pathname);
const router= useRouter()
  const getProfile = async () => {
    console.log("getting profile", isAuthPage);
    if (isAuthPage) return;
    try {
      const id = getTokenData(token)?.id;
      console.log("id", id);
      const res = await api.get(`/user/${id}`);
      console.log('proRes',res.data);
      const data = res.data.data;
      setUser(data);
    } catch (error) {
      console.log('error', error);
    } finally {
      setReady(true);
    }
  };

  useEffect(() => {
    getData("token").then((token) => {
      console.log("token", token);
      setToken(token);
    });
  }, []);

  useEffect(() => {
    if (token === undefined) return;
    if (!token) {
      setReady(true);
      return;
    }
    getProfile();
  }, [token]);

  useEffect(() => {
    if (!ready) return;
    const inAuthGroup = segments[0] === "(auth)";
    const isLanding = segments[0] === "landing";

    // segments length is 0 when on the landing page. ot '/'
    if (segments.length === 0) return;
    if (isLanding) return;

    if (
      // If the token is not signed in and the initial segment is not anything in the auth group.
      !token &&
      !inAuthGroup
    ) {
      console.log("segments", segments);
      // Redirect to the login page. For more info see https://github.com/expo/router/issues/740
      if (Platform.OS === "ios") {
        setTimeout(() => {
          router.replace("/login");
        }, 1);
      } else {
        setImmediate(() => {
          router.replace("/login");
        });
      }
    } else if (token && inAuthGroup) {
      // Redirect away from the login page.
      if (Platform.OS === "ios") {
        setTimeout(() => {
          router.replace("/(home)");
        }, 1);
      } else {
        setImmediate(() => {
          router.replace("/(home)");
        });
      }
    }
  }, [token, segments, ready]);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        token,
        setToken,
        ready,
        getProfile,
      }}
    >
      {ready ? props.children : <SplashScreen />}
    </AuthContext.Provider>
  );
}
