import {Text, Pressable} from 'react-native';
import React from 'react';
import globalType from 'styles/global-typo';
import {ButtonBlock} from './style';

type ButtonProps = {
  onPress: () => void;
  text: string;
  theme?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isSmall?: boolean;
};

function Button({onPress, text, theme = 'ghost', isSmall}: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <ButtonBlock theme={theme} isSmall={isSmall}>
        <Text style={[globalType.body1R]}>{text}</Text>
      </ButtonBlock>
    </Pressable>
  );
}

export default Button;
