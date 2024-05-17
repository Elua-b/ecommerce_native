// CheckoutScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Navbar from '../../components/navbar'; // Ensure Navbar is imported

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Credit Card');
  const CART_ITEMS = [
    {
      id: 1,
      name: 'Product 1',
      cost: 10.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      cost: 19.99,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Product 3',
      cost: 15.49,
      quantity: 1,
    },
  ];

  const totalPrice = CART_ITEMS.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);

  const handlePayment = () => {
    console.log(`Proceed with ${selectedPaymentMethod}`);
    // Implement payment processing logic here
  };

  return (
    <View className="flex-1 bg-blue-100">
      <Navbar />
      <View className="pt-20 p-4">
        <Text className="text-2xl font-bold text-center mb-4 text-blue-700">Checkout</Text>
        <View className="mt-4">
          <Text className="text-xl font-bold text-blue-700 text-right">
            Total Price: ${totalPrice}
          </Text>
        </View>
        <View className="mt-6">
          <Text className="text-lg font-bold text-blue-700">Select Payment Method:</Text>
          <TouchableOpacity
            className={`p-4 mt-2 rounded-lg ${selectedPaymentMethod === 'Credit Card' ? 'bg-blue-500' : 'bg-white'}`}
            onPress={() => setSelectedPaymentMethod('Credit Card')}
          >
            <Text className={`text-center ${selectedPaymentMethod === 'Credit Card' ? 'text-white' : 'text-blue-500'} text-lg font-bold`}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`p-4 mt-2 rounded-lg ${selectedPaymentMethod === 'PayPal' ? 'bg-blue-500' : 'bg-white'}`}
            onPress={() => setSelectedPaymentMethod('PayPal')}
          >
            <Text className={`text-center ${selectedPaymentMethod === 'PayPal' ? 'text-white' : 'text-blue-500'} text-lg font-bold`}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`p-4 mt-2 rounded-lg ${selectedPaymentMethod === 'Bank Transfer' ? 'bg-blue-500' : 'bg-white'}`}
            onPress={() => setSelectedPaymentMethod('Bank Transfer')}
          >
            <Text className={`text-center ${selectedPaymentMethod === 'Bank Transfer' ? 'text-white' : 'text-blue-500'} text-lg font-bold`}>Bank Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`p-4 mt-2 rounded-lg ${selectedPaymentMethod === 'MOMO' ? 'bg-yellow-400' : 'bg-yellow-400'}`}
            onPress={() => setSelectedPaymentMethod('MOMO')}
          >
            <Text className={`text-center ${selectedPaymentMethod === 'MOMO' ? 'text-white' : 'text-white'} text-lg font-bold`}>MOMO</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg shadow-md mt-6"
          onPress={handlePayment}
        >
          <Text className="text-white text-lg font-bold text-center">Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
