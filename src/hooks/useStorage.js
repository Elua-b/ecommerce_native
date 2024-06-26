import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStorage() {
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  return { storeData, getData, removeData };
}
