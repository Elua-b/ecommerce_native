import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View className="flex-1 bg-blue-700 items-center justify-center">
    <Text className="text-2xl font-bold text-gray-700 mb-6">Welcome to Ecommerce</Text>
    <TouchableOpacity
      className="bg-white p-4 rounded-lg shadow-md mb-4"      onPress={() => navigation.navigate('products')}
    >
      <Text className="text-blue-700 text-lg font-bold">Go to Products</Text>
    </TouchableOpacity>
    <TouchableOpacity
      className="bg-white p-4 rounded-lg shadow-md"
      onPress={() => navigation.navigate('cartItems')}
    >
      <Text className="text-blue-700 text-lg font-bold">Go to Cart</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Home

const styles = StyleSheet.create({})