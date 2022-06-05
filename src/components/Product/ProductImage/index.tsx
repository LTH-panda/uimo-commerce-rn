/* eslint-disable global-require */
import {Image} from 'react-native';
import React from 'react';
import {ProductImageContainer} from './style';

function ProductImage() {
  return (
    <ProductImageContainer>
      <Image
        source={require('assets/images/stories/3.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
    </ProductImageContainer>
  );
}

export default ProductImage;
