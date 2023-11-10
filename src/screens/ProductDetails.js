import React, { useEffect, useState } from 'react';

import {
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import ProductImage from '../components/ui_compponents/ProductImage/ProductImage';
import ProductName from '../components/ui_compponents/ProductName/ProductName';
import UnitButton from '../components/ui_compponents/UnitButton/UnitButton';
import { postData } from '../Services/FetchNodeServices';
import FlottingCart from '../components/ui_compponents/FlottingCart/FlottingCart';
import AppHeader from '../components/ui_compponents/AppHeader/AppHeader';
const {width,height}=Dimensions.get("screen")
export default function ProductDetails(props) {
  var selectedProduct =props.route.params.state.product
  const [product,setProduct]=useState(selectedProduct)
  const [images,setImages]=useState([])
  const [units,setUnits]=useState([])
  const fetch_all_images=async()=>{
    var result=await postData('userinterface/fetch_all_multipleimages_by_productlistid',{productlistid:product.productlistid})
    console.log("zzzzzzzzzzzzzzz",result)
    setImages(result.data)
  }

  const fetch_all_units=async()=>{
    var result=await postData('userinterface/fetch_all_products_by_productid',{productid:product.productid})
    console.log("zzzzzzzzzzzzzzz",result)
    setUnits(result.data)
  }
  useEffect(function(){
    fetch_all_images()
    fetch_all_units()
  },[product])
  return (
  <View style={{position:'relative'}}>
    <FlottingCart/>
    <AppHeader/>
<ProductImage pimages={images} />
<ProductName product={product}  />
<UnitButton product={units} setProduct={setProduct} />
  </View>
  );
}
