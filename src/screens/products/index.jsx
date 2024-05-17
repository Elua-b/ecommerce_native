// ProductsScreen.js
import React from "react";
import { View, FlatList, ScrollView ,Text} from "react-native";
import ProductItem from "../../components/productItem";
import Navbar from "../../components/navbar"
const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    image: require("../../../assets/product1.png"),
    cost: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: require("../../../assets/product1.png"),

    cost: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: require("../../../assets/product1.png"),

    cost: 15.49,
  },
];

const Products = () => {
  return (
    <ScrollView className="bg-[white] py-5 " stickyHeaderIndices={[0]}>
        <View className="">
        <Navbar/>
        </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text className="p-5 text-[20px]  text-gray-700">
         Available  Products :
        </Text>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => (
            <ProductItem name={item.name} image={item.image} cost={item.cost} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      
    </ScrollView>
  );
};

export default Products;
