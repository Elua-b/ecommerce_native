// ProfileScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../components/button';
import product1 from "../../../assets/product1.png"
const Profile = () => {
  
  

  return (
    <View className="flex-1 justify-center bg-blue-100 p-4 items-center">
      <Image source={product1} className="w-32 h-32 rounded-full mb-4"/>
      <Text className="text-xl font-bold text-blue-700 mb-2">BE</Text>
      <Text className="text-blue-700">bugingo@gmail.com</Text>
      <View className="w-full items-center px-5  mt-9">
        <Text className="text-base ">Profile Details:</Text>

        <View className="p-4">
          
          <Text className="font-bold text-lg mb-1">Name : Eloi BUGINGO</Text>
          <Text className=" font-bold text-lg mb-1">Email: bugingo@gmail.com</Text>
          <Text className=" font-bold text-lg mb-1">Phone: +250788888888</Text>
          <Text className=" font-bold text-lg mb-1">Address: Kigali, Rwanda</Text>


        </View>
        <View className="mt-14 w-full gap-5">
        <Button mode={"outlined"} className="bg-[white] w-full p-[10] mt-4">
          Edit Profile
        </Button>
        <Button mode={"outlined"} className="bg-[white] w-full p-[10] mt-4">
          View Products
        </Button>
        </View>
      

      </View>
    </View>
  );
};

export default Profile;
