import React, { useEffect, useState } from 'react';
import {Text, View, Dimensions} from 'react-native';
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import Button from '../ButtonComponent/Button';
import PhoneNumberModel from '../PhoneNumberModal/PhoneNumberModal';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getStoreData } from '../../../Storage/AsyncStorage';
import RazorpayCheckout from 'react-native-razorpay';
const {width, height} = Dimensions.get('screen');

export default function Address({userData}) {
   var navigation=useNavigation()
  var cart=useSelector(state=>state.products)
  var cartlist=Object.values(cart)
  var ta=cartlist.reduce(totalAmount,0)
  function totalAmount(a,b){
     price=b.offer>0?b.offer*b.qty:b.rate*rate
    return(a+price)
  }

    const [visible,setVisible]=useState(false)
    const [login,setLogin]=useState(null)
    const checkUser=async()=>{
        var log=await getStoreData('login')
        console.log("aaaaaaaaaasssssssyyy",log)
        setLogin(log)
    }
    const handleOpenPhone=async()=>{
        if(login==null)
        setVisible(true)
       else
       await makePayment()

    }
    useEffect(function(){
     checkUser()
    },[])

    const makePayment=async()=>{
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
            amount: ta*100,
            name: login?.username,
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
           navigation.navigate("Home")
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
    }
    return(
        <View style={{backgroundColor:'#fff',flexDirection:'column',padding:10,borderRadius:15,marginTop:6,marginBottom:6}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
     <View style={{flexDirection:'row',width:width*0.43,justifyContent:'space-between',alignItems:'center',padding:5}}>
<MCI name={'home-city-outline'} size={30} color={'#f1c40f'}/>
<View style={{padding:5}}>
<Text style={{color:'#000'}}>Delivery to Home</Text>

<Text>{login?.username}</Text>
<View style={{flexDirection:'row'}}>
<Text>{login?.addressone}</Text>
<Text>{login?.city}</Text>
<Text>{login?.state}</Text>
</View>
<Text>{login?.pincode}</Text>
</View>
</View>
<View style={{justifyContent:'center'}}>
<Text style={{color:'#008000'}}>Change</Text>
</View>
</View>
<View >
  
<Button onPress={()=>handleOpenPhone()} w={0.9} h={0.05} label={'Make Payments'} bgcolor={'#008000'} fontSize={17} textColor={'#fff'} borderColor={'#008000'} />

</View>

<PhoneNumberModel visible={visible} setVisible={setVisible} />

 </View>
    )
}