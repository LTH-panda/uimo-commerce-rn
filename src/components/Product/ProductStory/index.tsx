/* eslint-disable global-require */
import {Text, ImageBackground} from 'react-native';
import React from 'react';
import globalType from 'styles/global-typo';
import globalLayout from 'styles/global-layout';
import {Inside, ProductStoryBlock} from './style';

type ProductStoryProps = {
  imageNumber: number;
  insideText: string;
};

const imagePath: any = {
  1: require('assets/images/stories/1.jpg'),
  2: require('assets/images/stories/2.jpg'),
  3: require('assets/images/stories/3.jpg'),
  4: require('assets/images/stories/4.jpg'),
};

function ProductStory({imageNumber, insideText}: ProductStoryProps) {
  return (
    <ProductStoryBlock>
      <ImageBackground
        source={imagePath[imageNumber]}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
        imageStyle={{borderRadius: 10}}>
        <Inside style={[globalLayout.full]}>
          <Text style={[globalType.tWhite, globalType.body1R]}>
            {insideText}
          </Text>
        </Inside>
      </ImageBackground>
    </ProductStoryBlock>
  );
}

export default ProductStory;
