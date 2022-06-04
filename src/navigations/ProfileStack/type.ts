import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabNavigationProp} from 'navigations/MainTab/type';

export type ProfileStackParamList = {
  ProfileHome: {user: User};
  MyOrder: {userId: string};
  MyOrderDetail: {orderId: string};
  WriteReview: {orderId: string};
  ModifyProfile: {user: User};
  Address: {userId: string};
  ModifyAddress: {userId: string};
  Payment: {userId: string};
  ModifyPayment: {userId: string};
  Setting: undefined;
};

export type ProfileStackNavigationProp = CompositeNavigationProp<
  MainTabNavigationProp,
  NativeStackNavigationProp<ProfileStackParamList>
>;

export type ProfileStackNavigationParams =
  NavigatorScreenParams<ProfileStackParamList>;
