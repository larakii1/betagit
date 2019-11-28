import React from 'react'
import {StyleSheet,ImageBackground,View,Text, Alert , Button} from "react-native";

export default function App () {

  // SimpleAlertHandler = ()=> {
  //   alert("hello world !")
  // }
  showAlert1=()=> {  
    Alert.alert(  
        'Tout est cool dans cette vie  !',  
        'Je ne comprend pas mes gamineries',  
        
    );  
} 
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
      
      
      <View style={{backgroundColor: 'grey', flex: 0.5, borderRadius :15}}><Text>hello world</Text>
      <View style={{backgroundColor:'#DCDCDC',width:300, height :5 , borderRadius:3 , position : 'relative' , top : 600 ,left :40,transform: [{ rotate: '90deg' }] }}></View>
      <Button  onPress={this.showAlert1}  title="Press me " style={styles.button} color = 'grey'
                    ></Button>  
      </View>


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
    button:{
     width : 300
    }
  });