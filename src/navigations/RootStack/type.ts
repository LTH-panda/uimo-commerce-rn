import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  OnBoard: undefined;
  AuthStack: undefined;
  SignIn: undefined;
  MainTab: undefined;
  Search: undefined;
  Product: {productId: string};
  Order: {order: Product[]};
  OrderResult: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
