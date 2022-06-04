import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from 'navigations/MainTab';
import React from 'react';
import ModifyProfileScreen from 'screens/ModifyProfileScreen';
import OnBoardScreen from 'screens/OnBoardScreen';
import OrderResultScreen from 'screens/OrderResultScreen';
import OrderScrenn from 'screens/OrderScreen';
import ProductScreen from 'screens/ProductScreen';
import RegisterScreen from 'screens/RegisterScreen';
import SearchScreen from 'screens/SearchScreen';
import SignInScreen from 'screens/SignInScreen';
import {RootStackParamList} from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfileScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Order" component={OrderScrenn} />
      <Stack.Screen name="OrderResult" component={OrderResultScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
