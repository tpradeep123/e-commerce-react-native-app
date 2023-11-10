/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Image, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('screen');
export default function AppHeader(props) {
  var navigation = useNavigation();
  return (
    <View
      style={{
        width: width,
        height: height * 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
      }}>
      <MCI name="menu" size={35} 
      onPress={()=> navigation.dispatch(DrawerActions.openDrawer())} />
      <Image
        style={{resizeMode: 'contain', width: 35, height: 35}}
        source={require('../../../../assets/logo.png')}
      />
      <MCI name="shopping-outline" size={35} />
    </View>
  );
}
