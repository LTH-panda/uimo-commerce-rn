import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import {BodyTemplate, BottomButton, Header, TextField} from 'components/Shared';
import useModifyAddress from 'hooks/useModifyAddress';

function ModifyAddressScreen() {
  const {onModifyAddress} = useModifyAddress();

  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header title="주소 추가" />
      <BodyTemplate>
        <TextField subject="수취인" placeholoder="full name" />
        <TextField subject="연락 받을 전화번호" placeholoder="01012345678" />
        <TextField subject="배송받을 장소" placeholoder="address" />
        <TextField subject="상세주소" placeholoder="address detail" />
      </BodyTemplate>
      <BottomButton text="추가" onPress={onModifyAddress} />
    </SafeAreaView>
  );
}

export default ModifyAddressScreen;
