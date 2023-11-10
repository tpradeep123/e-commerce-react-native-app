import React from "react";
import { View,Dimensions,Text} from "react-native";
import MI from 'react-native-vector-icons/MaterialIcons';
import OI from 'react-native-vector-icons/Octicons';

const {width, height} = Dimensions.get('screen');
export default function Discount(){
    return(
        <View style={{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:15,marginTop:6,marginBottom:6}}>
       <View style={{flexDirection:'row',width:width*0.38,justifyContent:'space-between'}}>
       <OI name={'feed-star'} size={23} color={'#0F52BA'}/>
       <Text style={{fontSize:18,color:'#000',fontWeight:400}}>Use Coupons</Text>
       </View>
       <View>
       <MI name={'keyboard-arrow-right'} size={25}/>
       </View>
        </View>
    )
}