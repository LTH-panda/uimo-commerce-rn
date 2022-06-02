import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from 'navigations/AuthStack';
import MainTab from 'navigations/MainTab';
import React from 'react';
import OnBoardScreen from 'screens/OnBoardScreen';
import OrderResultScreen from 'screens/OrderResultScreen';
import OrderScrenn from 'screens/OrderScreen';
import ProductScreen from 'screens/ProductScreen';
import SearchScreen from 'screens/SearchScreen';
import {RootStackParamList} from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Order" component={OrderScrenn} />
      <Stack.Screen name="OrderResult" component={OrderResultScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
