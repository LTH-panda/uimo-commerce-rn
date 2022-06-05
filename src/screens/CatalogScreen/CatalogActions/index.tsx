import React from 'react';
import {BodyTemplate, SearchBar} from 'components/Shared';
import {ProductFilterActions} from 'components/Product';

function CatalogActions() {
  return (
    <BodyTemplate>
      <SearchBar />
      <ProductFilterActions />
    </BodyTemplate>
  );
}

export default CatalogActions;
