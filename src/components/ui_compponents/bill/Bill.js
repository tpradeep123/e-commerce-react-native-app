import React from "react";
import { View,Dimensions,Text } from "react-native";
import FA from "react-native-vector-icons/FontAwesome";
import MI from "react-native-vector-icons/MaterialIcons";
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
const {width, height} = Dimensions.get('screen');
export default function Bill(props){
    return(
      
        <View style={{padding:10,borderRadius:15,backgroundColor:'white',marginTop:6,marginBottom:6}} >
      <Text style={{fontSize:18,color:'#000',fontWeight:500}}>Bill Details</Text>
      <View style={{justifyContent:'space-between',flexDirection:'row',paddingTop:10,paddingBottom:10}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <FA name={"newspaper-o"} size={17} style={{marginRight:7,color:'#000'}}/>
    <Text style={{marginRight:7,color:'#000',fontSize:15}}>Sub total</Text>
    <MCI name={"chevron-down-circle-outline"} size={17} style={{marginRight:7,color:'#000'}}/>
    <View style={{backgroundColor:'#c9e5ee',width:width*0.18,alignItems:'center',borderRadius:3,justifyContent:'center'}}>
       <Text style={{fontSize:12,color:'#0F52BA',fontWeight:'bold'}}>Saved &#8377; {props.ts}</Text>
    </View>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{color:'#000',textDecorationLine:'line-through'}}>&#8377; {props.tr}</Text>
        <Text style={{color:'#000',fontWeight:500}}>  &#8377; {props.ta}</Text>
    </View>
</View>

<View style={{justifyContent:'space-between',flexDirection:'row',paddingTop:10,paddingBottom:20}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <MI name={"delivery-dining"} size={21} style={{marginRight:7,color:'#000'}}/>
    <Text style={{marginRight:7,color:'#000',fontSize:15}}>Delivery charge</Text>
    <MCI name={"information-outline"} size={17} style={{marginRight:7,color:'#000'}}/>
    </View>
    <View style={{flexDirection:'row'}}>
      {props.ta<200? <Text style={{marginRight:5,color:'#000'}}>&#8377; 40</Text>
        :<><Text style={{marginRight:5,color:'#000',textDecorationLine:'line-through'}}>&#8377; 40</Text><Text style={{color:'#05445E'}}>FREE</Text></>}
    </View>
</View>
<View style={{justifyContent:'space-between',flexDirection:'row',marginBottom:15}}>
     <Text style={{color:'#000',fontSize:18,fontWeight:450}}>Grand Total</Text>
   <Text style={{color:'#000',fontWeight:500,fontSize:18}}>&#8377; {props.ta>200?props.ta:props.ta+40}</Text>
    </View>
    <View style={{height:height*0.05,borderRadius:8, backgroundColor:'#c9e5ee',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5}}>
<Text style={{color:'#0F52BA',fontSize:17,fontWeight:'bold'}}>Your total savings</Text>
<Text style={{color:'#0F52BA',fontSize:17,fontWeight:'bold'}}>&#8377; {props.ta>200?props.ts+40:props.ts}</Text>

    </View>
        </View>
      
    )
}