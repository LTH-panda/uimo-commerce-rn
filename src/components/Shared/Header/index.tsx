import {Pressable, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import globalType from 'styles/global-typo';
import {ArrowLeftIcon} from 'components/Icons';
import {useNavigation} from '@react-navigation/native';
import {HeaderBlock} from './style';

type HeaderProps = {
  back?: boolean;
  title?: string;
  right?: string;
};

function Header({back, title, right}: HeaderProps) {
  const navigation = useNavigation();
  const onGoBack = useCallback(() => navigation.goBack(), []);

  return (
    <HeaderBlock>
      {back && (
        <Pressable onPress={onGoBack}>
          <View>
            <ArrowLeftIcon fill="#212121" />
          </View>
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
          zIndex: -1,
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
