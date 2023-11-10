/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import RootReducer from './src/Storage/RootReducer';
var store=createStore(RootReducer)
import RootNavigation from './src/components/Navigation/RootNavigation';
import FlottingCart from './src/components/ui_compponents/FlottingCart/FlottingCart';
import Banner from './src/components/ui_compponents/Banner/Banner';
const {width,height}=Dimensions.get("screen")

function App() {
  return (
     <Provider store={store}>
          <RootNavigation/>
     </Provider>

   

//     <View style={styles.container}>
//    {/* <Card /> 
//    <BillDetails/> */}
// <Banner/>
//   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:height,
    width:width,
  alignItems:'center',
  justifyContent:'center'
 
  }
});

export default App;
