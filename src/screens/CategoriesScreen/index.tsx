import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BodyTemplate, Header, SearchBar} from 'components/Shared';
import {RouteProp, useRoute} from '@react-navigation/native';
import {FeedStackParamList} from 'navigations/FeedStack/type';
import globalLayout from 'styles/global-layout';
import globalColor from 'styles/global-color';
import CategoriesList from './CategoriesList';

type CategoriesScreenRouteProp = RouteProp<FeedStackParamList, 'Categories'>;

function CategoriesScreen() {
  const {params} = useRoute<CategoriesScreenRouteProp>();

  return (
    <SafeAreaView style={[globalLayout.full, globalColor.white]}>
      <Header back title={params.room} />
      <BodyTemplate>
        <SearchBar />
      </BodyTemplate>
      <CategoriesList />
    </SafeAreaView>
  );
}

export default CategoriesScreen;
