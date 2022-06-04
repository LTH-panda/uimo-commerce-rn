import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import {useCallback} from 'react';

export default function useNavigateAuth() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onNavigateRegister = useCallback(
    () => navigation.navigate('Register'),
    [],
  );
  const onNavigateSignIn = useCallback(() => navigation.navigate('SignIn'), []);

  return {onNavigateRegister, onNavigateSignIn};
}
