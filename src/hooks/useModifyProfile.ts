import {useNavigation} from '@react-navigation/native';
import {MainTabNavigationProp} from 'navigations/MainTab/type';
import {useCallback} from 'react';

export default function useModifyProfile() {
  const navigation = useNavigation<MainTabNavigationProp>();

  const onModifyProfile = useCallback(() => {
    // profile modify
    navigation.navigate('MainTab');
  }, []);

  return {onModifyProfile};
}
