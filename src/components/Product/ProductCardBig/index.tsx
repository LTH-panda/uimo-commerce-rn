/* eslint-disable global-require */
import {Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalType from 'styles/global-typo';
import {HeartFilledIcon, HeartIcon} from 'components/Icons';
import useNavigateProduct from 'hooks/useNavigateProduct';
import {
  Desc,
  ImageContainer,
  Price,
  ProductCardBigBlock,
  ProductHeader,
} from './style';

function ProductCardBig() {
  const {onNavigateProduct} = useNavigateProduct();
  const [like, setLike] = useState<boolean>(false);

  const onLike = () => setLike(!like);

  return (
    <ProductCardBigBlock>
      <Pressable onPress={onNavigateProduct}>
        <ImageContainer>
          <Image
            source={require('assets/images/stories/4.jpg')}
            resizeMode="cover"
            style={{width: '100%', height: '100%', borderRadius: 8}}
          />
        </ImageContainer>
        <ProductHeader>
          <Price style={[globalType.body1R]}>price</Price>
          {like ? (
            <Pressable onPress={onLike}>
              <HeartFilledIcon width={24} height={24} fill="#212121" />
            </Pressable>
          ) : (
            <Pressable onPress={onLike}>
              <HeartIcon width={24} height={24} fill="#212121" />
            </Pressable>
          )}
        </ProductHeader>
        <Desc>wooden table</Desc>
      </Pressable>
    </ProductCardBigBlock>
  );
}

export default ProductCardBig;
