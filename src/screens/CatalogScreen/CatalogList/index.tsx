import {FlatList} from 'react-native';
import React from 'react';
import {ProductCardBig} from 'components/Product';
import CatalogActions from '../CatalogActions';

const renderItem = item => <ProductCardBig />;

function CatalogList() {
  const data = [1, 2, 3, 4, 5];
  return (
    <FlatList
      ListHeaderComponent={<CatalogActions />}
      data={data}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between', padding: 16}}
    />
  );
}

export default CatalogList;
