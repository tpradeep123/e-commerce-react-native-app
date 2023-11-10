
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TextInput
} from 'react-native';
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
const {width,height}=Dimensions.get('screen')

 export default function InputText({w,icon,eye,placeholder,inputMode='Text',error=false,errorMessage,password=false,...props}){

   return(<View style={{margin:5}}>
   <View style={{flexDirection:'row',width:width*w,height:height*0.07,borderColor:error?'#eb2f06':'#00a8ff',borderWidth:1,borderRadius:8,alignItems:'center'}}>
   <MCI  name={icon} size={30} style={{padding:5}}/>
<TextInput  secureTextEntry={password}  inputMode={inputMode} placeholder={placeholder} style={{fontSize:20}} {...props}/>
  <MCI  name={eye}  size={30} style={{padding:5,paddingLeft:130}}/>
 </View>
{error? <View style={{margin:5}}>
<Text style={{fontSize:12,color:'#eb2f06',fontWeight:700}}>{errorMessage}</Text>
 </View>:<></>}
 </View>)
}
const style = StyleSheet.create({
    box:{
        width:width*0.5,
        height:height*0.3,
      },
})