import {View} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import {ActionHeader} from 'components/Shared';
import ProductImage from 'components/Product/ProductImage';

function ProductScreen() {
  const {top} = useSafeAreaInsets();
  return (
    <SafeAreaView
      edges={['bottom']}
      style={[globalLayout.full, globalColor.white]}>
      <ProductImage />
      <View style={{height: top}} />
      <ActionHeader />
    </SafeAreaView>
  );
}

export default ProductScreen;
