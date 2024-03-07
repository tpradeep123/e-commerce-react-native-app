import React, { useEffect, useState } from 'react';

import {Text, View, Dimensions,TextInput, Image,FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Button from '../ButtonComponent/Button';
import {useNavigation} from '@react-navigation/native';
import { serverURL } from '../../../Services/FetchNodeServices';
import {useDispatch} from 'react-redux';
import ProductDetails from '../../../screens/ProductDetails';
import PlusMinus from '../plusminus/PlusMinus';
const {width, height} = Dimensions.get('screen');

export default function Card(props) {
  const [qty,setQty]=useState(0)
  var dispatch=useDispatch();
  var navigation = useNavigation();
  const handleChange=(value,item)=>{
    setQty(value)
    item['qty']=value
    dispatch({type:'ADD_PRODUCT',payload:[item.productlistid,item]})
    props.setStatus(!props.status)
  }
const ShowProducts=({item})=>{
  return(
    
    <View style={{ margin: 5, backgroundColor: '#fff',width: width * 0.43,height: 'auto',borderRadius:5,paddingBottom:10,borderWidth:1,borderColor:'#95a5a6'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails',{state:{product:item}})}>
      <View style={{alignItems:'center'}}>
      <Image
      style={{resizeMode:'contain',width:100,height:100,marginTop:15,marginBottom:15}}
      source={{uri:`${serverURL}/images/${item.picture}`}}/>
      </View>
      <View style={{paddingLeft:12}}>
      <Text style={{fontSize:14,fontWeight:'bold',letterSpacing:1,height:20}}>{item.productlistname}</Text>
      <Text style={{fontSize:13,}}>{item.weight}</Text>
      </View>
      </TouchableOpacity>
      <View style={{paddingLeft:12,flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
      <View>
     <Text style={{fontSize:15,fontWeight:'bold'}}>&#8377;{item.offer}</Text>
     <Text style={{fontSize:12,textDecorationLine:'line-through'}}>&#8377;{item.rate}</Text>
     </View>
     <View style={{padding:5}}>
   <PlusMinus qty={item.qty==undefined?0:item.qty}  onChange={(value)=>handleChange(value,item)} />
   </View>
      </View>
      </View>
  )
}
  return (
    <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
      <FlatList
      horizontal={true}
    //numColumns={2}
    data={props.data}
    renderItem={({item})=><ShowProducts item={item}/>}
    keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}

    />
  </ScrollView>
  );
}
