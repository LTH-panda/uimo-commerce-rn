import {View} from 'react-native';
import React, {useCallback} from 'react';
import globalLayout from 'styles/global-layout';
import {Button} from 'components/Shared';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import useNavigateAuth from 'hooks/useNavigateAuth';

function OnBoardActions() {
  const {onNavigateRegister, onNavigateSignIn} = useNavigateAuth();
  const navigation = useNavigation<RootStackNavigationProp>();

  const onNavigateMainTab = useCallback(
    () => navigation.navigate('MainTab'),
    [],
  );

  return (
    <View style={[globalLayout.center]}>
      <Button text="회원가입" theme="primary" onPress={onNavigateRegister} />
      <View style={[globalLayout.mgBot]} />
      <Button text="로그인" theme="secondary" onPress={onNavigateSignIn} />
      <View style={[globalLayout.mgBot]} />
      <Button text="둘러보기" onPress={onNavigateMainTab} />
    </View>
  );
}

export default OnBoardActions;
