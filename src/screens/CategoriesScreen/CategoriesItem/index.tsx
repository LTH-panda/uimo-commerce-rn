/* eslint-disable global-require */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import globalType from 'styles/global-typo';
import useNavigateCatalog from 'hooks/useNavigateCatalog';
import {CategoriesItemBlock, ImageContainer} from './style';

type CategoriesItemProps = {
  subject: string;
};

function CategoriesItem({subject}: CategoriesItemProps) {
  const {onNavigateCatalog} = useNavigateCatalog();
  return (
    <Pressable onPress={() => onNavigateCatalog(subject)}>
      <CategoriesItemBlock>
        <ImageContainer>
          <Image
            source={require('assets/images/stories/3.jpg')}
            resizeMode="cover"
            style={{width: '100%', height: '100%', borderRadius: 100}}
          />
        </ImageContainer>
        <View>
          <Text style={[globalType.body1R]}>{subject}</Text>
        </View>
      </CategoriesItemBlock>
    </Pressable>
  );
}

export default CategoriesItem;
