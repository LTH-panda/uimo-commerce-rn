import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProp} from 'navigations/AuthStack/type';
import {useCallback} from 'react';

export default function useRegister() {
  const navigation = useNavigation<AuthStackNavigationProp>();

  const onRegister = useCallback(() => {
    // 회원가입 구현
    navigation.navigate('ModifyProfile');
  }, []);

  return {onRegister};
}
