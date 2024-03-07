/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import MI from "react-native-vector-icons/MaterialIcons"
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const {width,height}=Dimensions.get("screen")
export default function FlottingCart() {
  var navigation = useNavigation();
  var cart=useSelector(state=>state.products)
  var cartitems=Object.keys(cart).length
  var cartlist=Object.values(cart)
  var ta=cartlist.reduce(totalAmount,0)
  function totalAmount(a,b){
     price=b.offer>0?b.offer*b.qty:b.rate*rate
    return(a+price)
  }
  return (
    <>
    {cartitems>0 ?
  <View style={{position:'absolute',zIndex:2,top:height*0.73, width:width*0.9,height:height*0.06,borderRadius:10, backgroundColor:'#006400',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:20} }>
  <View style={{flexDirection:'row',padding:10,alignItems:'center'}}>
      <Image
      style={{resizeMode:'contain',width:25,height:25}}
      source={require('../../../../assets/food.png')}/>
      
      <View style={{flexDirection:'column',paddingLeft:5}}>
      <Text style={{fontSize:12,color:"#fff"}}>{cartitems} items</Text>
      <Text style={{fontSize:12,color:"#fff",fontWeight:'bold'}}>&#8377; {ta}</Text>
      </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('CheckOut')}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{fontSize:12,color:"#fff",fontWeight:'bold'}}>View Cart</Text>
       <MI style={{color:"#fff",fontWeight:'bold'}} name={"arrow-right"} size={25}/>
      </View>
      </TouchableOpacity>
      </View>:<></>}
     </>
 
  );
}



