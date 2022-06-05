import React from 'react';
import {BottomModal, Button, Title} from 'components/Shared';
import {View} from 'react-native';

type ProductFilterProps = {
  visible: boolean;
  onVisible: () => void;
};

function ProductFilter({visible, onVisible}: ProductFilterProps) {
  return (
    <BottomModal visible={visible} onVisible={onVisible}>
      <Title title="filter" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button text="Cancel" theme="secondary" onPress={onVisible} />
      </View>
    </BottomModal>
  );
}

export default ProductFilter;
