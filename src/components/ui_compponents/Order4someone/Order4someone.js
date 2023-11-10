import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import Button from '../ButtonComponent/Button';
const {width, height} = Dimensions.get('screen');

export default function Order4someone() {
    return(
        <View style={{backgroundColor:'#fff',padding:10,borderRadius:15,marginTop:6,marginBottom:6,flexDirection:'row'}}>
        <View style={{width:width*0.8}}>    
       <Text style={{fontSize:17,color:'#000',fontWeight:600,padding:5}}>Order for someone else</Text>
       <Text style={{fontSize:14,color:'#000',padding:5}}>Add a message to be sent as an SMS with your gift.</Text>
       </View>
       <View style={{justifyContent:'center'}}>
       <Button w={0.1} h={0.035} label={'ADD'} bgcolor={'white'} fontSize={15} textColor={'#008000'} borderColor={'#fff'} />
       </View>

        </View>
    )
}