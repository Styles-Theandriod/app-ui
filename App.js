import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import Homescreen from './assets/component/Homescreen';
import Platform from './assets/component/Platform';


import TextInput from './assets/component/TextInput';

const myImage = 'https://picum.photos/200/300'

const myComponent = () =>{
  return(
    <ImageBackground source={myImage} style={styles.ImageBackground}>
      <Text>Hello world</Text>
    </ImageBackground>
  )
}
export default function App() {
  return (
    <View>
      <TextInput message="Please enter your username"/>
      <Image require="./assets/splash.png"/>
      <ImageBackground style={styles.myBackground}>

      </ImageBackground>

      <Image source={{uri:'https://picum.photos/200/300'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  ImageBackground:{
    resizeMode:'cover',
    
  },
  myBackground:{
    height:'100%',
    width:'100%',
    resizeMode:'cover'
  }
  
});
