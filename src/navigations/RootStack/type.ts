import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackNavigationScreenParams} from 'navigations/AuthStack/type';
import {MainTabNavigationScreenParams} from 'navigations/MainTab/type';

export type RootStackParamList = {
  OnBoard: undefined;
  AuthStack: AuthStackNavigationScreenParams;
  MainTab: MainTabNavigationScreenParams;
  Search: undefined;
  Product: {productId: string};
  Order: {order: Product[]};
  OrderResult: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
