import React from "react";
import { View,Dimensions,Text, Image,FlatList, ScrollView } from "react-native";
import PlusMinus from "../plusminus/PlusMinus";
import OI from 'react-native-vector-icons/Octicons';
import { serverURL } from "../../../Services/FetchNodeServices";
const {width, height} = Dimensions.get('screen');
export default function Cart(props){

    const ShowCartProducts=({item})=>{
        return(<View style={{backgroundColor:'#fff',borderRadius:15,marginTop:6,marginBottom:6}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',padding:7}}>
        <View style={{flexDirection:'row',width:width*0.38,justifyContent:'space-between'}}>
            <View style={{width:width*0.15,height:height*0.07,borderRadius:10,borderWidth:0.5,borderColor:'#006400', alignItems:'center',justifyContent:'center'}}>
                <Image
        style={{resizeMode:'contain',width:50,height:50}}
        source={{uri:`${serverURL}/images/${item.picture}`}}/>
        </View>
        <View style={{flexDirection:'column',width:width*0.2}}>
            <Text style={{fontSize:13,color:'#000'}}>{item.productlistname}</Text>
            <Text style={{fontSize:13,marginBottom:2}}>{item.weight}</Text>
            <Text style={{fontSize:13,color:'#000',fontWeight:500}}>&#8377; {item.offer} x {item.qty}</Text>
        </View> 
    
        </View>
        <View style={{justifyContent:'center'}}>
        <PlusMinus qty={item.qty}/>
        </View>
        </View>
        </View>)}
    return( 
        <>
        <View style={{flexDirection:'row',padding:10,width:width*0.73,justifyContent:'space-between',alignItems:'center'}}>
        <OI name={'stopwatch'} size={25}/>
        <View>
        <Text style={{fontSize:18,color:'#000',fontWeight:600}}>Free delivery in 12 minutes</Text>
        <Text>{props.qty} items</Text>
        </View>
          </View>
            <View>
        <FlatList
      numColumns={1}
      data={props.cartlist}
      renderItem={({item})=><ShowCartProducts item={item}/>}
      key={'#'}
      keyExtractor={item => '#' + item.id}
      />
      </View> 
    </>
    )
}