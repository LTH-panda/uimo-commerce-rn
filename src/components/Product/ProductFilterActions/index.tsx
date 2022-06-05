import {Text} from 'react-native';
import React, {useState} from 'react';
import {DirectionVerticalIcon, FilterIcon} from 'components/Icons';
import {ActionButton, ProductFilterActionsBlock} from './style';
import ProductSort from '../ProductSort';
import ProductFilter from '../ProductFilter';

function ProductFilterActions() {
  const [sortVisible, setSortVisible] = useState<boolean>(false);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  return (
    <>
      <ProductFilterActionsBlock>
        <ActionButton onPress={() => setSortVisible(true)}>
          <Text style={{marginRight: 4}}>Sort</Text>
          <DirectionVerticalIcon width={18} height={18} fill="#212121" />
        </ActionButton>
        <ActionButton onPress={() => setFilterVisible(true)}>
          <Text style={{marginRight: 4}}>Filter</Text>
          <FilterIcon width={18} height={18} fill="#212121" />
        </ActionButton>
      </ProductFilterActionsBlock>
      <ProductSort
        visible={sortVisible}
        onVisible={() => setSortVisible(false)}
      />
      <ProductFilter
        visible={filterVisible}
        onVisible={() => setFilterVisible(false)}
      />
    </>
  );
}

export default ProductFilterActions;
