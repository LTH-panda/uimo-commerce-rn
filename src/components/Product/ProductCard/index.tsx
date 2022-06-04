import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {ImageContainer, ProductCardBlock} from './style';

type ProductCardProps = {
  title: string;
  desc: string;
  price: number;
};

function ProductCard() {
  return (
    <ProductCardBlock>
      <ImageContainer />
    </ProductCardBlock>
  );
}

export default ProductCard;
