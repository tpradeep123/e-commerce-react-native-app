import React, {useState} from 'react';
import {View, Dimensions, Text, Image, FlatList, ScrollView} from 'react-native';
const {width, height} = Dimensions.get('screen');
export default function BannersAds() {
  const [images, setImages] = useState([
    require('../../../../assets/babycare-WEB.png'),
    require('../../../../assets/electronics-WEB.png'),
    require('../../../../assets/morning-banner.png'),
    require('../../../../assets/pharmacy-WEB.png'),
  ]);

  return (
    <ScrollView style={{width: width * 1, height: height * 0.2}}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Image
            source={item}
            style={{
              width: width * 0.9,
              height: height * 0.18,
              marginHorizontal: 10,
              borderRadius: 20,
              marginTop: 5,
              resizeMode: 'contain',
            }}
          />
        )}
        key={'#'}
        keyExtractor={item => '#' + item.id}
      />
    </ScrollView>
  );
}
