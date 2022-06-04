import React from 'react';
import {Text} from 'react-native';
import globalType from 'styles/global-typo';
import {TitleBlock} from './style';

type TitleProps = {
  title: string;
  isCenter?: boolean;
};
function Title({title, isCenter}: TitleProps) {
  return (
    <TitleBlock style={[isCenter && {alignItems: 'center'}]}>
      <Text style={[globalType.h1B, globalType.tBlack]}>{title}</Text>
    </TitleBlock>
  );
}

export default Title;
