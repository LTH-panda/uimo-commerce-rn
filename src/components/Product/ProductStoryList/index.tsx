import {View, FlatList} from 'react-native';
import React from 'react';
import ProductStory from '../ProductStory';
import {styles} from './style';

const renderItem = ({
  item,
}: {
  item: {imageNumber: number; insideText: string};
}) => (
  <ProductStory imageNumber={item.imageNumber} insideText={item.insideText} />
);

function ProductStroyList() {
  const data = [
    {imageNumber: 1, insideText: 'best of 2022'},
    {imageNumber: 2, insideText: 'the golden hour'},
    {imageNumber: 3, insideText: 'lovely kitchen'},
    {imageNumber: 4, insideText: 'summer choice '},
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={[styles.separator]} />}
      keyExtractor={item => item.imageNumber.toString()}
    />
  );
}

export default ProductStroyList;
