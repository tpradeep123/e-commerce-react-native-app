import React from "react";
import { Dimensions,View,Text,Divider } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import MI from "react-native-vector-icons/MaterialIcons"
import PlusMinus from "../plusminus/PlusMinus";
import FlottingCart from "../FlottingCart/FlottingCart";
const {width,height}=Dimensions.get('screen')
export default function ProductName({product}){
  const handleChange=(value,item)=>{
    setQty(value)
    item['qty']=value
    dispatch({type:'ADD_PRODUCT',payload:[item.productlistid,item]})
    props.setStatus(!props.status)
  }
    return(
    <View style={{paddingLeft:10,paddingRight:10,backgroundColor:'#fff'}}>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontWeight:700,fontSize:17,color:'#000'}}>{product.productlistname}</Text>
      <MCI name={"share-outline"} size={25}/>
        </View>
        <View  style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
         <Text style={{color:'#008000',fontSize:13}}>View all products by {product.productlistname}</Text>
         <MI name={"arrow-right"} size={20} color={"#008000"}/>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{marginTop:10,flexDirection:'column'}}>
         <Text style={{fontWeight:500}} >{product.weight}</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:width*0.16}}>
         <Text style={{fontSize:16, fontWeight:900,color:'#000'}}>&#8377;{product.offer}</Text>
         <Text style={{fontSize:13, fontWeight:500,color:'#000'}}>&#8377;{product.rate}</Text>
         </View>
         </View>
         <View style={{padding:10}}> 
         <PlusMinus qty={product.qty==undefined?0:product.qty} 
          // onChange={(value)=>handleChange(value,product)} 
          />
         </View>
        
         </View>
         <View
  style={{
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 0.65,
    width:width*1,
    marginTop:15,
    marginBottom:10, 
  }}
/>
     </View>
    
    )
}