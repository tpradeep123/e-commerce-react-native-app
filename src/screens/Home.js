import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions} from 'react-native';
import CircleComponent from '../components/ui_compponents/CircleComponent/CircleComponent';
import {postData, getData} from '../Services/FetchNodeServices';
import Banner from '../components/ui_compponents/Banner/Banner';
import FlottingCart from '../components/ui_compponents/FlottingCart/FlottingCart';
import BannersAds from '../components/ui_compponents/BannerAds/BannersAds';
import Card from '../components/ui_compponents/Card/Card';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
export default function Home() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(false);
  const [drinksProducts, setDrinksProducts] = useState([]);
  const fetchAllCategory = async () => {
    var result = await getData('category/category_list');
    setCategory(result.data);
  };
  const fetchAllProductBySubCategory = async () => {
    var result = await postData('userinterface/fetch_products_by_subcategory', {
      subcategoryname: 'Milk, Bread & Butter',
    });
    setProducts(result.data);
  };

  const fetchAllDrinksProductBySubCategory = async () => {
    var result = await postData('userinterface/fetch_products_by_subcategory', {
      subcategoryname: 'soft drink',
    });
    setDrinksProducts(result.data);
  };

  useEffect(function () {
    fetchAllCategory();
    fetchAllProductBySubCategory();
    fetchAllDrinksProductBySubCategory();
  }, []);
  return (
    <View style={{position: 'relative'}}>
      <FlottingCart />
      <ScrollView>
        <View style={{backgroundColor: '#fff'}}>
          <View
            style={{
              width: width * 1,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <CircleComponent data={category} />
          </View>
          <View
            style={{
              width: width * 1,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Banner />
            <BannersAds/>
          </View>
         <Text style={{fontSize:20,color:'#000',fontWeight:'bold',marginHorizontal:10,marginVertical:10}}>Milk, Bread & Butter</Text>
            <Card data={products} setStatus={setStatus} status={status} />
            <Text style={{fontSize:20,color:'#000',fontWeight:'bold',marginHorizontal:10,marginVertical:10}}>Soft Drinks</Text>
            <Card data={drinksProducts} setStatus={setStatus} status={status} />
          
        </View>
      </ScrollView>
    </View>
  );
}
