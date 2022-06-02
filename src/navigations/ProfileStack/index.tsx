import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddressScreen from 'screens/AddressScreen';
import ModifyAddressScreen from 'screens/ModifyAddressScreen';
import ModifyPaymentScreen from 'screens/ModifyPaymentScreen';
import ModifyProfileScreen from 'screens/ModifyProfileScreen';
import MyOrderDetailScreen from 'screens/MyOrderDetailScreen';
import MyOrderScreen from 'screens/MyOrderScreen';
import PaymentScreen from 'screens/PaymentScreen';
import ProfileScreen from 'screens/ProfileScreen';
import SettingScreen from 'screens/SettingScreen';
import WriteReviewScreen from 'screens/WriteReviewScreen';
import {ProfileStackParamList} from './type';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyOrder" component={MyOrderScreen} />
      <Stack.Screen name="MyOrderDetail" component={MyOrderDetailScreen} />
      <Stack.Screen name="WriteReview" component={WriteReviewScreen} />
      <Stack.Screen name="ModifyProfile" component={ModifyProfileScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="ModifyAddress" component={ModifyAddressScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="ModifyPayment" component={ModifyPaymentScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
