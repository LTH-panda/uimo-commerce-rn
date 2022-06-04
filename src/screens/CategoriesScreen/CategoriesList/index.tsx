import {FlatList} from 'react-native';
import React from 'react';
import {Title} from 'components/Shared';
import CategoriesItem from '../CategoriesItem';

const renderItem = ({item}: {item: {subject: string}}) => (
  <CategoriesItem subject={item.subject} />
);

function CategoriesList() {
  const data: Array<{subject: string}> = [
    {subject: 'Furniture'},
    {subject: 'Rugs'},
    {subject: 'Mirrors'},
    {subject: 'Blankets'},
    {subject: 'Cushions'},
    {subject: 'Curtains'},
    {subject: 'Lighting'},
    {subject: 'Lighting2'},
    {subject: 'Lighting3'},
  ];
  return (
    <FlatList
      ListHeaderComponent={<Title title="categories" />}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.subject}
    />
  );
}

export default CategoriesList;
