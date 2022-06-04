import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import {Header, Title} from 'components/Shared';
import {AuthForm} from 'components/Auth';

function RegisterScreen() {
  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header back />
      <AuthForm isRegister />
    </SafeAreaView>
  );
}

export default RegisterScreen;
