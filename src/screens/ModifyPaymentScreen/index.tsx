import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

function ModifyPaymentScreen() {
  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header title="주소 추가" />
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
      <BottomButton text="추가" onPress={onModifyProfile} />
    </SafeAreaView>
  );
}

export default ModifyPaymentScreen;
