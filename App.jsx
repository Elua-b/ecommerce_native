import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View, TouchableOpacity, Image, Linking  } from 'react-native';
import { useColorScheme } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';


import Navigator from './src/navigations';
export default function App() {

  const youtubeChannelLink = 'https://www.youtube.com/@WebMind1s/?sub_confirmation=1';
  const instagramLink = 'https://www.instagram.com/webmind1s/';
  const tiktokLink = 'https://www.tiktok.com/@webmind1s';

 const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
