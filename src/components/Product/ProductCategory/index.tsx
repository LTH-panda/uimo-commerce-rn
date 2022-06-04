/* eslint-disable global-require */
import {Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import globalType from 'styles/global-typo';
import useNavigateCategory from 'hooks/useNavigateCategory';
import {ImageContainer, ProductCategoryBlock, Subject} from './style';

export type ProductCategoryProps = {
  title: string;
};

function ProductCategory({title}: ProductCategoryProps) {
  const {onNavigateCategory} = useNavigateCategory();

  return (
    <Pressable onPress={() => onNavigateCategory(title)}>
      <ProductCategoryBlock>
        <Subject>
          <Text style={[globalType.h2B, globalType.tBlack]}>{title}</Text>
        </Subject>
        <ImageContainer>
          <ImageBackground
            imageStyle={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
            source={require('assets/images/stories/1.jpg')}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </ImageContainer>
      </ProductCategoryBlock>
    </Pressable>
  );
}

export default ProductCategory;
