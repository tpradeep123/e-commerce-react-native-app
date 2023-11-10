import React from 'react';
import {
    View,
    Dimensions,
    Image,
    FlatList
  } from 'react-native';
  import { ScrollView } from "react-native-gesture-handler"
  import { serverURL } from '../../../Services/FetchNodeServices';
  const {width,height}=Dimensions.get('screen')
export default function ProductImage({pimages}){
console.log("xxxxxxxxxx",images)
var images=[]
try{
  images=pimages[0].pictures.split(',')
}catch(e){}
  const ShowProductImages=({item})=>{
    return(
      <View style={{width:width*.99,  alignItems:"center", justifyContent:"center"}}>
      <Image
style={{resizeMode:"contain", width:width*.75, height:height*.25}}
source={{uri:`${serverURL}/images/${item}`}}/>
      </View>
    )
  }
return(

        
  <View style={{justifyContent:"center", backgroundColor:"#fff", resizeMode:"contain", alignItems:"center", width:width*.99, height:height*.35}}>

<FlatList
  showsHorizontalScrollIndicator={false}
  horizontal
  data={images}
  renderItem={({item})=><ShowProductImages item={item}/>}
  keyExtractor={item => "#" + item.id}
  />
         <View
  style={{
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 0.65,
    width:width*1,
    marginLeft:10, 
    marginTop:15,
    marginBottom:10, 
  }}
/>
</View>


)
}