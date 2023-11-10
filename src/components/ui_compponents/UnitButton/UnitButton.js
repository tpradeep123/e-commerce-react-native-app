import React, { useEffect, useState } from 'react';
import { Dimensions,View,Text,FlatList, TouchableOpacity } from "react-native";
const {width,height}=Dimensions.get('screen')
export default function UnitButton({product,setProduct}){
    const [selectedBox,setSelectedBox]=useState(product)

    const handleUnits=(item)=>{
        setSelectedBox(item)
        setProduct(item)
        
    }
    const ShowUnits=({item})=>{
        return(
            <TouchableOpacity onPress={()=>handleUnits(item)}>
            <View style={{backgroundColor:'#fff',paddingBottom:15}} >
        <View style={{marginLeft:10,width:width*0.22,height:height*0.075,borderRadius:10,justifyContent:'center',alignItems:'center',borderColor:'#008000',borderWidth:1}}>
<Text style={{fontWeight:500}} >{item.weight}</Text>
<Text style={{fontSize:16, fontWeight:900,color:'#000'}}>&#8377;{item.rate}</Text>
        </View>
        
        </View>
        </TouchableOpacity>
        )
    }
    return(
<View style={{backgroundColor:'#fff',justifyContent:'space-evenly'}} >
<Text style={{fontSize:17, fontWeight:700,color:'#000',padding:10}}>Select Unit</Text>
<FlatList
    horizontal
data={product}
renderItem={({item})=><ShowUnits item={item}/>}
key={'#'}
keyExtractor={item => '#' + item.id}

/>
</View>
    )
}