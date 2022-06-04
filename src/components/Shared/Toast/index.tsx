import React from 'react';
import {Text} from 'react-native';
import {ToastBlock} from './style';

type ToastProps = {
  children: React.ReactNode;
};

function Toast({children}: ToastProps) {
  return (
    <ToastBlock>
      {children}
      <Text style={{color: '#fff'}}>toast</Text>
    </ToastBlock>
  );
}

export default Toast;
