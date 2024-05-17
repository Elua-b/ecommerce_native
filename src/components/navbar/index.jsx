// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  const navigation=useNavigation()
  return (
    <View className="bg-transparent  p-4 flex-row justify-between items-center rounde-md  top-0 left-0 right-0 z-10">
      
     
      <TouchableOpacity className="p-2" onPress={() =>navigation.goBack() }>
        {/* <Feather name="log-out" size={24} color="blue" /> */}
        <Ionicons name="chevron-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="p-2" onPress={() =>navigation.navigate('cartItems')}>
        <Feather name="shopping-cart" size={24} color="blue" />
      <Text className="absolute right-0   text-[20px]  text-red-700 ">3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
