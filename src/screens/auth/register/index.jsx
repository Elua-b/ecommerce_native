import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import Input from "../../../components/input";
// import { Feather } from "@expo/vector-icons ";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Button from "../../../components/button";
import { useFormik } from "formik";

const Register = ({navigation}) => {
  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required"),
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

  return (
    <SafeAreaView className=" h-full ">
      <View className="h-full bg-[#0D59D4] flex flex-row justify-center items-center p-7 ">
        <View className="h-[65%] bg-white p-4 rounded-md flex justify-center items-center w-full  ">
          <View className="w-full">
            <Text className="text-center text-lg p-4 text-[#0D59D4] ">
              Register In Ecommerce
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
            <View className="w-full">
              <Input
                onBlur={handleBlur("username")}
                onChangeText={handleChange("username")}
                value={values.username}
                Icon={<AntDesign name="user" size={24} color="silver" />}
                placeholder="Username"
              />
            </View>
          </View>
          <View className="w-full py-7">
            <Button mode={"outlined"} className="bg-[white] w-full p-[10] mt-4">
              Register
            </Button>
          </View>
          <Pressable onPress={()=>navigation.navigate('Login')}>
            <View>
              <Text className="text-gray-600">
                Already have an account?{" "}
                <Text className="text-[#0D59D4] hover:cursor-pointer">
                  {" "}
                  Sign In
                </Text>
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
