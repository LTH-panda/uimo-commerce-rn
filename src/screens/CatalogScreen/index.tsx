import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'components/Shared';
import {RouteProp, useRoute} from '@react-navigation/native';
import {FeedStackParamList} from 'navigations/FeedStack/type';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import CatalogList from './CatalogList';

type CatalogScreenRouteProp = RouteProp<FeedStackParamList, 'Catalog'>;

function CatalogScreen() {
  const {params} = useRoute<CatalogScreenRouteProp>();

  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header back title={params.category} />
      <CatalogList />
    </SafeAreaView>
  );
}

export default CatalogScreen;
