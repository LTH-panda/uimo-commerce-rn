import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import {useCallback} from 'react';

export default function useSignIn() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onSignIn = useCallback(() => {
    navigation.navigate('MainTab');
  }, []);

  return {onSignIn};
}
