import React from 'react';
import { useState,useEffect } from 'react';
import { Modal,View,Text,Dimensions,TouchableOpacity, TextInput } from 'react-native';
import Button from '../ButtonComponent/Button';
import InputText from '../TextField/InputText';
import OtpModal from '../OTPModal/OtpModal';
import { postData } from '../../../Services/FetchNodeServices';
const {width,height}=Dimensions.get("screen")
export default function PhoneNumberModel(props){
//    const [visible,setVisible]=useState(false)
   const [show,setShow]=useState(false)
   const [mobileno,setMobileno]=useState('')
   const handelOtp=async()=>{
    props.setVisible(false)
    setShow(true)
   }

    return(
        <View style={{flex:1}} >
        <Modal visible={props.visible} transparent>
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'#fff',width:width*0.9,height:height*0.3,borderRadius:10}}>
        <Text style={{fontSize:20,alignSelf:'center',padding:15,paddingBottom:30,fontWeight:900,textColor:'#000'}}>Phone Number</Text>
        <View style={{alignSelf:'center',paddingBottom:15}}>
        {/* <TextInput  placeholder='+91' style={{width:width*0.7,borderWidth:2,borderColor:'rgba(0,0,0,0.5)', borderRadius:7}}/> */}
        <InputText onChangeText={(txt)=>setMobileno(txt)} w={.8} icon={'phone'} placeholder={'number'} inputMode={"tel"}/>
       </View>
       <View style={{alignSelf:'center',padding:25}}>
<Button onPress={()=>handelOtp()} w={0.8} h={0.07} label={'Get OTP'} bgcolor={'#008000'} fontSize={20} textColor={'#fff'} borderColor={'#008000'} />
</View>
        </View>
            </View>

        </Modal>
        <OtpModal mobileno={mobileno} 
        // setVisible={props.setVisible} visible={visible} 
        setShow={setShow} show={show}/>
        </View>
    )
}