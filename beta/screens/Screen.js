import React from 'react'
import {StyleSheet,ImageBackground} from "react-native";

export default function Screen () {


   return (
    <ImageBackground source = {
        require('../assets/tiger.webp')} style={styles.container}> 
       
        
      </ImageBackground>

        
        );

} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: 'center',
      justifyContent: 'center',
    },
  });