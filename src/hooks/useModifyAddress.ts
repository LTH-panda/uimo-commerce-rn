import {useNavigation} from '@react-navigation/native';
import {ProfileStackNavigationProp} from 'navigations/ProfileStack/type';
import {useCallback} from 'react';

export default function useModifyAddress() {
  const navigation = useNavigation<ProfileStackNavigationProp>();

  const onModifyAddress = useCallback(() => {
    navigation.navigate('Address', {userId: 'id'});
  }, []);

  return {onModifyAddress};
}
