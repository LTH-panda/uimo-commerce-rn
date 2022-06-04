import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ModifyAddressScreen from 'screens/ModifyAddressScreen';
import ModifyPaymentScreen from 'screens/ModifyPaymentScreen';
import ModifyProfileScreen from 'screens/ModifyProfileScreen';
import RegisterScreen from 'screens/RegisterScreen';
import {AuthStackParamList} from './type';

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfileScreen} />
      <Stack.Screen name="ModifyAddress" component={ModifyAddressScreen} />
      <Stack.Screen name="ModifyPayment" component={ModifyPaymentScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
