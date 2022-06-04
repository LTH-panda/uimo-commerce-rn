import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BagIcon, HeartIcon, LogotypeIcon, UserIcon} from 'components/Icons';
import FeedStack from 'navigations/FeedStack';
import ProfileStack from 'navigations/ProfileStack';
import React from 'react';
import BagScreen from 'screens/BagScreen';
import LikeScreen from 'screens/LikeScreen';
import {MainTabParamList} from './type';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#212121',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="FeedStack"
        component={FeedStack}
        options={{
          tabBarIcon: ({color}) => (
            <LogotypeIcon fill={color} width="100%" height="60%" />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          tabBarIcon: ({color}) => (
            <BagIcon fill={color} width="100%" height="60%" />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={LikeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <HeartIcon fill={color} width="100%" height="60%" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => (
            <UserIcon fill={color} width="100%" height="60%" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
