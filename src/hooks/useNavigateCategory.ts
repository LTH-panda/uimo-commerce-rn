import {useNavigation} from '@react-navigation/native';
import {FeedStackNavigationProp} from 'navigations/FeedStack/type';
import {useCallback} from 'react';

export default function useNavigateCategory() {
  const navigation = useNavigation<FeedStackNavigationProp>();

  const onNavigateCategory = useCallback(
    room => navigation.navigate('Categories', {room}),
    [],
  );

  return {onNavigateCategory};
}
