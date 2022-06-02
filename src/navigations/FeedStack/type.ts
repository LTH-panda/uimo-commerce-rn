import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigationProp} from 'navigations/RootStack/type';

export type FeedStackParamList = {
  Room: undefined;
  Categories: {room: string};
  Catalog: {category: string};
};

export type FeedStackNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  NativeStackNavigationProp<FeedStackParamList>
>;

export type FeedStackNavigationScreenParams =
  NavigatorScreenParams<FeedStackParamList>;
