import {Text, Pressable} from 'react-native';
import React from 'react';
import globalColor from 'styles/global-color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import globalType from 'styles/global-typo';
import {BottomButtonBlock} from './style';

type BottomButtonProps = {
  text: string;
  onPress: () => void;
};

function BottomButton({text, onPress}: BottomButtonProps) {
  const {bottom} = useSafeAreaInsets();

  return (
    <Pressable
      onPress={onPress}
      style={{position: 'absolute', bottom: 0, width: '100%'}}>
      <BottomButtonBlock style={[globalColor.yellow3, {height: bottom * 3}]}>
        <Text style={[globalType.tWhite, globalType.h2R]}>{text}</Text>
      </BottomButtonBlock>
    </Pressable>
  );
}

export default BottomButton;
