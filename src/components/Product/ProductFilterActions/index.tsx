import {Text} from 'react-native';
import React from 'react';
import {DirectionVerticalIcon, FilterIcon} from 'components/Icons';
import {ActionButton, ProductFilterActionsBlock} from './style';

function ProductFilterActions() {
  return (
    <ProductFilterActionsBlock>
      <ActionButton>
        <Text style={{marginRight: 4}}>Sort</Text>
        <DirectionVerticalIcon width={18} height={18} fill="#212121" />
      </ActionButton>
      <ActionButton>
        <Text style={{marginRight: 4}}>Filter</Text>
        <FilterIcon width={18} height={18} fill="#212121" />
      </ActionButton>
    </ProductFilterActionsBlock>
  );
}

export default ProductFilterActions;
