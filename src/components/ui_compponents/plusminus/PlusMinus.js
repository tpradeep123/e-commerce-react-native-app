import React, { useState } from "react";
import { View,Dimensions,Text, Image, TouchableOpacity } from "react-native";
import Button from "../ButtonComponent/Button";
const {width, height} = Dimensions.get('screen');
export default function PlusMinus(props){
    const [values,setValues]=useState(props.qty)
    const btnplus=()=>{
        if(values<5){
        setValues(prev => prev +1)
        props.onChange(values + 1)
        }
    }
    const btnminus=()=>{
        if(values>0){
        setValues(prev => prev -1)
        props.onChange(values - 1)
        }
    }
    return(
        <>
        {values == 0 ?
           <Button onPress={()=>btnplus()} w={0.18} h={0.035} label={'ADD'} bgcolor={'white'} fontSize={15} textColor={'#008000'} borderColor={'#008000'} />
           :
        <View style={{backgroundColor:'green',width:width*0.170,height:height*0.035, borderRadius:4}}>
        <View style={{flexDirection:'row',padding:3,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>btnminus()}>
            <View style={{backgroundColor:'green',width:width*0.05,alignItems:'center',height:height*0.030}}>
        <Text style={{fontSize:15,color:'#fff'}}>-</Text>
       </View>
       </TouchableOpacity>
   
       <View style={{backgroundColor:'green',width:width*0.05,alignItems:'center',height:height*0.030}}>
        <Text style={{fontSize:15,color:'#fff'}}>{values}</Text>
       </View>
     
       <TouchableOpacity onPress={()=>btnplus()}>
       <View style={{backgroundColor:'green',width:width*0.05,alignItems:'center',height:height*0.030}}>
        <Text style={{fontSize:15,color:'#fff'}}>+</Text>
       </View>
       </TouchableOpacity>
       
        </View>
      </View> }
      </>
    )
}
