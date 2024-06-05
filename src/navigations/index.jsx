import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import Home from "../screens/Home";
import Products from "../screens/products";
import Profile from "../screens/profile";
import CartItems from "../screens/carts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Checkout from "../screens/checkout";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function Navigator() {

   const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        async function getAuthToken() {
            const token = await SecureStore.getItemAsync('token')
            if (token) {
                setIsLoggedIn(true)
            }
        }
        getAuthToken()
    }, [])

    if (!isLoggedIn) return <AuthNavigation />
    return <AppNavigation />
}
export function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  

  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="products"
        component={Products}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cartItems"
        component={CartItems}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="App"
        component={AppNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
  );
}
export function AppNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
        name="home"
        component={Home}
      />

      <Tab.Screen
        options={{
          title: "products",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="box" size={24}  color={focused ? "blue" : "gray"} />
          ),
        }}
        name="products"
        component={Products}
      />
     
      <Tab.Screen
        options={{
          title: "cartItems",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={24}
              color={focused ? "blue" : "gray"}
            />
          ),
        }}
        name="cartItems"
        component={CartItems}
      />
      <Tab.Screen
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="user" size={24} color={focused ? "blue" : "gray"} />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
