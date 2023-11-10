import React from 'react';
import { useState,useEffect } from 'react';
import { Modal,View,Text,Dimensions,TouchableOpacity, TextInput } from 'react-native';
import EI from "react-native-vector-icons/Entypo"

import Button from '../ButtonComponent/Button';
const {width,height}=Dimensions.get("screen")
export default function AddressModal(props){

    const handleClose=()=>{
        props.setVisible(false)
    }
    // useEffect(function(){
    //     setShow(props.visible)
    //    },[props])
    return(
        <View style={{flex:1}}>
        <Modal visible={props.visible} animationType='slide' transparent>
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',justifyContent:'flex-end'}}>
        <View style={{backgroundColor:'#fff',width:width*1,height:height*0.57,borderRadius:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <Text style={{fontSize:18,fontWeight:900,textColor:'#000'}}>Enter your address</Text>
            <EI onPress={()=>handleClose()} name={'cross'} size={35}/>
            </View>
            <View>
            <TextInput placeholder='Reciver name' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            <TextInput placeholder='email Address' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            <TextInput placeholder='Address one' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            <TextInput placeholder='Address two' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            <TextInput placeholder='City' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            <TextInput placeholder='State' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            <TextInput placeholder='Zip code' style={{width:width*0.9,alignSelf:'center',borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7,padding:5,marginBottom:10}}/>
            </View>
            <View style={{alignSelf:'center'}}>
<Button onPress={()=>handleClose()}    w={0.8} h={0.05} label={'NEXT'} bgcolor={'#008000'} fontSize={20} textColor={'#fff'} borderColor={'#008000'} />

</View>
            </View>
            </View>
            </Modal>

            </View>
    )
}