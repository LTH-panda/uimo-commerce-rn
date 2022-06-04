import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CatalogScreen from 'screens/CatalogScreen';
import CategoriesScreen from 'screens/CategoriesScreen';
import RoomScreen from 'screens/RoomScreen';
import {FeedStackParamList} from './type';

const Stack = createNativeStackNavigator<FeedStackParamList>();

function FeedStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Room" component={RoomScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Catalog" component={CatalogScreen} />
    </Stack.Navigator>
  );
}

export default FeedStack;
