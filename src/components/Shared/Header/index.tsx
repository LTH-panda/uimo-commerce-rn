import {Pressable, Text, View} from 'react-native';
import React from 'react';
import globalType from 'styles/global-typo';
import {ArrowLeftIcon} from 'components/Icons';
import {HeaderBlock} from './style';

type HeaderProps = {
  back?: boolean;
  title?: string;
  right?: string;
};

function Header({back, title, right}: HeaderProps) {
  return (
    <HeaderBlock>
      {back && (
        <Pressable>
          <ArrowLeftIcon fill="#212121" />
        </Pressable>
      )}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[globalType.body1R]}>{title}</Text>
      </View>
      {right && (
        <Pressable>
          <Text>{right}</Text>
        </Pressable>
      )}
    </HeaderBlock>
  );
}

export default Header;
