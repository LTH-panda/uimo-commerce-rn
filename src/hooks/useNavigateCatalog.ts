import {useNavigation} from '@react-navigation/native';
import {FeedStackNavigationProp} from 'navigations/FeedStack/type';
import {useCallback} from 'react';

export default function useNavigateCatalog() {
  const navigation = useNavigation<FeedStackNavigationProp>();

  const onNavigateCatalog = useCallback(
    category => navigation.navigate('Catalog', {category}),
    [],
  );

  return {onNavigateCatalog};
}
