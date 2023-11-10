import React, { useState } from 'react';

import {
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import Bill from '../components/ui_compponents/bill/Bill';
import Cart from '../components/ui_compponents/Cart/Cart';
import { useSelector } from 'react-redux';
import Discount from '../components/ui_compponents/Discount/Discount';
import CancellationPolicy from '../components/ui_compponents/CancellationPolicy/CancellationPolicy';
import Order4someone from '../components/ui_compponents/Order4someone/Order4someone';
import Address from '../components/ui_compponents/Address/Address';
const {width,height}=Dimensions.get("screen")
export default function CheckOut() {
  var cart=useSelector(state=>state.products)
  var userData=useSelector(state=>state.user)
  console.log('UserDtaaaa',userData)
  var cartitems=Object.keys(cart).length
  var cartlist=Object.values(cart)
  var ta=cartlist.reduce(totalAmount,0)
  var to=cartlist.reduce(totalOffer,0)
  var tr=cartlist.reduce(totalRate,0)

  function totalAmount(a,b){
     price=b.offer>0?b.offer*b.qty:b.rate*rate
    return(a+price)
  }

  function totalOffer(a,b){
    offer = b.offer*b.qty
   return(a+offer)
 }
 
 function totalRate(a,b){
 rate = b.rate*b.qty
 return(a+rate)
}

var ts= tr-to

  return (
  <View >
<ScrollView>
<View style={{padding:8}}>
<Cart qty={cartitems} cartlist={cartlist}/>
<Discount/>
 <Bill ta={ta} ts={ts} tr={tr}/> 
  {/* <Order4someone/> */}
 {/* <CancellationPolicy/>  */}
 <Address userData={userData}/>
 </View>
 </ScrollView>
  </View>
  );
}
