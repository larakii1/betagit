import React from 'react'
import {StyleSheet,ImageBackground,View,Text} from "react-native";

export default function App () {


   return (
    <ImageBackground source = {
        require('../page/assets/saand.jpg')} style={styles.container}> 
          <View
        style={{
          flexDirection: 'row',
          height: 800,
          width:860,
          position:'relative',
          left:235,
         opacity:0.7
      
        }}>
      
        <View style={{backgroundColor: 'grey', flex: 0.5, borderRadius :15}} />
        <Text>Hello World!</Text>
      </View>
        
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