import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {BottomModal, Button, Title} from 'components/Shared';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';

function ProductScreen() {
  const [visible, onVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <View>
        <Button
          text="visible"
          onPress={() => onVisible(true)}
          theme="primary"
        />
        <BottomModal visible={visible} onVisible={() => onVisible(false)}>
          <Title title="sort by" />
        </BottomModal>
      </View>
    </SafeAreaView>
  );
}

export default ProductScreen;
