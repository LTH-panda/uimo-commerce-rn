import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import {Header} from 'components/Shared';
import globalColor from 'styles/global-color';
import {AuthForm} from 'components/Auth';

function SignInScreen() {
  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header back />
      <AuthForm />
    </SafeAreaView>
  );
}

export default SignInScreen;
