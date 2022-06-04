import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import {BodyTemplate, BottomButton, Header, TextField} from 'components/Shared';
import {ProfileImage} from 'components/Profile';
import {View} from 'react-native';
import useModifyProfile from 'hooks/useModifyProfile';

function ModifyProfileScreen() {
  const {onModifyProfile} = useModifyProfile();

  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header title="프로필 설정" />
      <BodyTemplate>
        <View
          style={[
            globalLayout.center,
            globalLayout.padding,
            globalLayout.mgBot,
          ]}>
          <ProfileImage />
        </View>
        <TextField subject="이름" placeholoder="full name" />
        <TextField subject="닉네임" placeholoder="nickname" />
        <TextField subject="전화번호" placeholoder="01012345678" />
        <TextField subject="이메일" placeholoder="email" />
      </BodyTemplate>
      <BottomButton text="설정" onPress={onModifyProfile} />
    </SafeAreaView>
  );
}

export default ModifyProfileScreen;
