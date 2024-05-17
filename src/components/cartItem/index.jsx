// CartItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CartItem = ({ name, image, cost, quantity, onRemove, onIncrease, onDecrease }) => {
  return (
    <View className="w-full p-4 mb-6 bg-white rounded-lg shadow-md flex-row items-center">
      <Image source={image } className="w-20 h-20 mr-4 rounded-lg" />
      <View className="flex-1">
        <Text className="font-bold text-lg mb-1 text-blue-700">{name}</Text>
        <Text className="text-gray-700 text-base">Cost: ${cost}</Text>
        <Text className="text-gray-700 text-base">Quantity: {quantity}</Text>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={onDecrease} className="p-2">
          <Feather name="minus-circle" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrease} className="p-2">
          <Feather name="plus-circle" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRemove} className="p-2">
          <Feather name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
