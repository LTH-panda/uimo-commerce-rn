import {Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {ArrowLeftIcon, HeartIcon} from 'components/Icons';
import {useNavigation} from '@react-navigation/native';
import {HeaderBlock, IconContainer} from './style';

function ActionHeader() {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => navigation.goBack(), []);

  return (
    <HeaderBlock>
      <Pressable onPress={onGoBack}>
        <IconContainer>
          <ArrowLeftIcon fill="#212121" width={24} height={24} />
        </IconContainer>
      </Pressable>
      <Pressable>
        <IconContainer>
          <HeartIcon fill="#212121" />
        </IconContainer>
      </Pressable>
    </HeaderBlock>
  );
}

export default ActionHeader;
