/* eslint-disable global-require */
import {Text, Image} from 'react-native';
import React from 'react';
import {ClearIcon} from 'components/Icons';
import {
  BodyContainer,
  ImageContainer,
  ProductCardSmallBlock,
  ProductHeader,
  TextContainer,
} from './style';

function ProductCardSmall() {
  return (
    <ProductCardSmallBlock>
      <ImageContainer>
        <Image
          source={require('assets/images/stories/3.jpg')}
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 8}}
        />
      </ImageContainer>
      <BodyContainer>
        <ProductHeader>
          <TextContainer>
            <Text>price</Text>
            <Text>desc</Text>
          </TextContainer>
          <ClearIcon width={24} height={24} fill="#212121" />
        </ProductHeader>
      </BodyContainer>
    </ProductCardSmallBlock>
  );
}

export default ProductCardSmall;
