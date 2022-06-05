import React from 'react';
import {BottomModal, Button, Title} from 'components/Shared';
import {View} from 'react-native';

type ProductSortProps = {
  visible: boolean;
  onVisible: () => void;
};

function ProductSort({visible, onVisible}: ProductSortProps) {
  return (
    <BottomModal visible={visible} onVisible={onVisible}>
      <Title title="sort by" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button text="Cancel" theme="secondary" onPress={onVisible} />
      </View>
    </BottomModal>
  );
}

export default ProductSort;
