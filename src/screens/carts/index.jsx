// CartItemsScreen.js
import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import CartItem from '../../components/cartItem';
import Navbar from '../../components/navbar';
import Button from '../../components/button';

const initialCartItems = [
  {
    id: 1,
    name: 'Product 1',
    image: require("../../../assets/product1.png"),
    cost: 10.99,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    image: require("../../../assets/product1.png"),

    cost: 19.99,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Product 3',
    image: require("../../../assets/product1.png"),

    cost: 15.49,
    quantity: 1,
  }
];

const CartItems = ({navigation}) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);

  return (
    <View className="flex-1 bg-blue-100">
      <Navbar />
      <ScrollView className="pt-20 p-4">
        <Text className="text-2xl font-bold text-center mb-4 text-blue-700">My Cart</Text>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            image={item.image}
            cost={item.cost}
            quantity={item.quantity}
            onRemove={() => handleRemove(item.id)}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
          />
        ))}
        <View  className="mt-4">
          <Text className="text-xl font-bold text-blue-700 text-right">
            Total Price: ${totalPrice}
          </Text>
          <View className="py-7">
          <Button mode={"outlined"} onPress={()=>navigation.navigate("checkout")} className="bg-[white] w-full p-[10] mt-4 ">
            Procced to checkout
          </Button>
          </View>
        
        </View>
      </ScrollView>
    </View>
  );
};

export default CartItems;
