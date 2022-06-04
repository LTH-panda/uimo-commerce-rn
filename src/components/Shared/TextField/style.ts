import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const TextFieldBlock = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 0px 16px;
  height: 64px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const Subject = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #9e9e9e;
  margin-bottom: 6px;
`;

export const DescriptionBlock = styled.View`
  padding: 5px 16px;
`;
export const Description = styled.Text`
  height: 21px;
  color: #9e9e9e;
  font-weight: 400;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  error: {
    borderColor: '#ef5350',
    borderWidth: 1,
  },
});
