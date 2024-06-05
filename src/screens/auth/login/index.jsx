import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";

import * as Yup from "yup";
import Input from "../../../components/input";
// import { Feather } from "@expo/vector-icons ";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Button from "../../../components/button";
import { useFormik } from "formik";
import { login } from "../../../services/auth";
import useStorage from "../../../hooks/useStorage";
import { useRouter } from "expo-router";
const Login = ({navigation}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
const [error, setError] = useState("");
const { setToken, setUser } = useAuth();
// const [loading, setLoading] = useState(false);
const { storeData } = useStorage();
const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    getFieldProps,
  } = formik;
 const handleSubmit=async()=>{
  console.log(values);
  setLoading(true);
  setAuthError("");
  const res = await login(values);
  console.log(res?.data.accessToken); 
  setLoading(false);
  if (!res?.data.accessToken)
    return setAuthError(res?.message || "Something went wrong");
  await SecureStore.setItemAsync("token", res?.data.accessToken);
  navigation.navigate("App");
 }
 
 const handleLogin = async () => {
  console.log("data", data);
  if (
    Object.values(data)
      .map((item) => item.trim())
      .includes("")
  ) {
    setError("Please fill all the fields");
    return;
  }
  try {
    setError("");
    setLoading(true);
    const res = await api.post("/auth/login", data);
    // console.log(res);
    console.log("hellooo");
    
    const token = res.data?.token;
    console.log(res.data?.user);
    setToken(token);
    storeData("token", token);
    setUser(res.data?.user);
    router.push("/App")
  } catch (error) {
    console.log("Error here: "+error);
    setError(getResError(error));
  } finally {
    setLoading(false);
  }
};
  return (
    <SafeAreaView className=" h-full ">
      <View className="h-full bg-[#0D59D4] flex flex-row justify-center items-center p-7 ">
        <View className="h-[65%] bg-white p-4 rounded-md flex justify-center items-center w-full  ">
          <View className="w-full">
            <Text className="text-center text-lg p-4 text-[#0D59D4] ">
              Log In Ecommerce
            </Text>
          </View>
          <View className="w-full">
            <View className="w-full">
              <Input
                onBlur={handleBlur("email")}
                Icon={<AntDesign name="mail" size={24} color="silver" />}
                placeholder="Email"
                onChangeText={handleChange("email")}
                value={values.email}
              />
            </View>
            <View className="w-full">
              <Input
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                value={values.password}
                security={true}
                Icon={<Feather name="lock" size={24} color="silver" />}
                placeholder="Password"
              />
            </View>
          </View>

          <View className="w-full py-7">
            <Button mode={"outlined"} onPress={handleSubmit} className="bg-[white] w-full p-[10] mt-4">
              Sign In
            </Button>
          </View>
          <Pressable onPress={()=>navigation.navigate('Register')}>

          <View>
            <Text className="text-gray-600">
              Don't have an account?{" "}
              <Text className="text-[#0D59D4]"> Sign Up</Text>
            </Text>
          </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
