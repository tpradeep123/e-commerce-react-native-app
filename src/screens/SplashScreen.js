import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Dimensions,Image} from 'react-native';
const {width, height} = Dimensions.get('screen');
export default function SplashScreen() {
    var navigation = useNavigation();
    setTimeout(()=>{
     navigation.navigate('Home1')
    },1500)
    return(<View style={{backgroundColor:'#fbc531',width:width*1,height:height*1}}>
       <View style={{justifyContent:'center',alignItems:'center',height:height*0.8}}>
        <Image style={{resizeMode:'contain',width:200,height:200}} source={require('../../assets/logo.png')}/>
       </View>
    </View>)
}