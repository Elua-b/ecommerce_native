import React from 'react';
import {View, TextInput} from 'react-native';


const Input = ({Icon, placeholder,value,onChangeText, onBlur, security=false, props, borderColor='gray'}) => {
  return (
      <View className="w-full bg-white  mt-2 flex-row border p-4 rounded-md border-gray-200">
        {Icon}
         <TextInput placeholder={placeholder} className="ml-2"
         secureTextEntry={security}
         onChangeText={onChangeText}
         onBlur={onBlur}
         value={value}
         />
      </View>
  )
}
export default Input;