import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStack from 'navigations/FeedStack';
import ProfileStack from 'navigations/ProfileStack';
import React from 'react';
import BagScreen from 'screens/BagScreen';
import LikeScreen from 'screens/LikeScreen';
import {MainTabParamList} from './type';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="FeedStack" component={FeedStack} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Like" component={LikeScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

export default MainTab;
