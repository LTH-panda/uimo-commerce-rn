import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigationProp} from 'navigations/RootStack/type';

export type AuthStackParamList = {
  Register: undefined;
  SignIn: undefined;
  ModifyProfile: undefined;
  ModifyAddress: undefined;
  ModifyPayment: undefined;
};

export type AuthStackNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  NativeStackNavigationProp<AuthStackParamList>
>;

export type AuthStackNavigationScreenParams =
  NavigatorScreenParams<AuthStackParamList>;
