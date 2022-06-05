import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';
import {useCallback} from 'react';

export default function useNavigateProduct() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onNavigateProduct = useCallback(
    () => navigation.navigate('Product', {productId: '1'}),
    [],
  );

  return {onNavigateProduct};
}
