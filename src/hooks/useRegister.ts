import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import {useCallback} from 'react';

export default function useRegister() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onRegister = useCallback(() => {
    // 회원가입 구현
    navigation.navigate('ModifyProfile');
  }, []);

  return {onRegister};
}
