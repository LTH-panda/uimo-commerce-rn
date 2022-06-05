import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  dim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export const ModalContent = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 506px;
  background-color: #fff;
  border-radius: 24px;
  padding-top: 56px;
`;
