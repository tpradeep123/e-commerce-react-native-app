import React from 'react';
import {Text, View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export default function CancellationPolicy() {
    return(
        <View style={{backgroundColor:'#fff',padding:10,borderRadius:15,marginTop:6,marginBottom:6}}>
       <Text style={{fontSize:17,color:'#000',fontWeight:600,padding:5}}>Cancellation Policy</Text>
       <Text style={{fontSize:14,color:'#000',padding:5}}>Orders cannot be cancelled once packed for delivery. in case of unexpected delays delays, a refund will be provide, if appicable.</Text>
        </View>
    )
}