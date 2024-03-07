import React from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import MI from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
export default function Banner() {
  return (
    <View style={{position: 'relative'}}>
      <Image
        style={{
          resizeMode: 'contain',
          width: width * 0.95,
          height: height * 0.12,
          borderRadius: 20,
          margin: 10,
        }}
        source={require('../../../../assets/banner.jpg')}
      />
      <View
        style={{
          position: 'absolute',
          top: 50,
          right: 1,
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: '#2E2E2E',
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MI name={'arrow-forward'} size={20} color={'#fff'} />
      </View>
    </View>
  );
}
