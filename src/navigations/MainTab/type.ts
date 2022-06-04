import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {FeedStackNavigationScreenParams} from 'navigations/FeedStack/type';
import {ProfileStackNavigationParams} from 'navigations/ProfileStack/type';
import {RootStackNavigationProp} from 'navigations/RootStack/type';

export type MainTabParamList = {
  FeedStack: FeedStackNavigationScreenParams;
  Bag: {userId: string};
  Like: {userId: string};
  Profile: ProfileStackNavigationParams;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  RootStackNavigationProp
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;
