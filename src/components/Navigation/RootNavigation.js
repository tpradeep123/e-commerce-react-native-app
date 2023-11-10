/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState, useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Dimensions, Text, Image} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import CheckOut from '../../screens/CheckOut';
import ProductDetails from '../../screens/ProductDetails';
import AppHeader from '../ui_compponents/AppHeader/AppHeader';
import {getStoreData} from '../../Storage/AsyncStorage';
import SplashScreen from '../../screens/SplashScreen';
const {width, height} = Dimensions.get('screen');
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  const [login, setLogin] = useState(null);
  const checkUser = async () => {
    var log = await getStoreData('login');
    setLogin(log);
  };
  useEffect(function () {
    checkUser();
  }, []);
  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            drawerIcon: () => <MCI name={'home-city'} size={24} />,
          }}
        />

        <Drawer.Screen
          name="CheckOut"
          component={CheckOut}
          options={{
            headerShown: false,
            drawerIcon: () => <MCI name={'car'} size={24} />,
          }}
        />
      </Drawer.Navigator>
    );
  };

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{flexDirection: 'column', alignItems: 'center', margin: 8}}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={require('../../../assets/photo.jpg')}
          />
          <Text style={{margin: 5, fontWeight: 'bold'}}>{login?.username}</Text>
          <Text style={{margin: 2}}>{login?.emailid}</Text>
          <Text style={{margin: 2}}>{login?.mobileno}</Text>
        </View>
        <DrawerItemList {...props}>
          <DrawerItem
            label="My Profile"
            // onPress={()=>props.navigation.navigate('MyProfile')}
            icon={() => <MCI name={'account-box'} size={24} />}
          />
          <DrawerItem
            label="Setting"
            //   onPress={()=>props.navigation.navigate('MyProfile')}
            icon={() => <MCI name={'account-setting'} size={24} />}
          />
        </DrawerItemList>
      </DrawerContentScrollView>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home1"
          component={ProjectDrawer}
          options={{header: AppHeader}}
        />
        <Stack.Screen
          name="AppHeader"
          component={AppHeader}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
