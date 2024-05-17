// ProductItem.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Button from '../button';
import product1 from "../../../assets/product1.png"
const ProductItem = ({ name, image, cost }) => {
  return (
   
<>
    <View className="w-full p-4 mb-6 bg-gray-200 rounded-lg items-center flex flex-row">
      <Image source={ image } className="w-48 h-48 mb-2 rounded-lg" />
      <View className="p-4">
        <Text className="text-base text-[#0D59D4]">Product Details:</Text>
      <Text className="font-bold text-lg mb-1">Name :{name}</Text>
      <Text className=" text-base">Cost: ${cost}</Text>
      </View>
  
    </View>
    <View className="p-4">
    <Button mode={"outlined"} className="bg-[white] w-full p-[10] mt-4">
     Add To Cart
    </Button>
    <View className="border-b-2 border-gray-500 mt-4"></View>
    </View>
   
</>
   
  );
};

export default ProductItem;
