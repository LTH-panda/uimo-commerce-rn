import {View} from 'react-native';
import React from 'react';
import {BottomButton, TextField, Title} from 'components/Shared';
import globalLayout from 'styles/global-layout';
import useSignIn from 'hooks/useSignIn';
import useRegister from 'hooks/useRegister';

type AuthFormProps = {
  isRegister?: boolean;
};

function AuthForm({isRegister}: AuthFormProps) {
  const {onSignIn} = useSignIn();
  const {onRegister} = useRegister();

  const onPress = () => {
    if (isRegister) onRegister();
    else onSignIn();
  };

  return (
    <>
      <Title title={isRegister ? '회원가입' : '로그인'} />
      <View style={[globalLayout.padding]}>
        <TextField subject="아이디" placeholoder="username" />
        <TextField subject="비밀번호" placeholoder="passwrod" />
        {isRegister && (
          <TextField subject="비밀번호 확인" placeholoder="password confirm" />
        )}
      </View>
      <BottomButton
        text={isRegister ? '회원가입' : '로그인'}
        onPress={onPress}
      />
    </>
  );
}

export default AuthForm;
