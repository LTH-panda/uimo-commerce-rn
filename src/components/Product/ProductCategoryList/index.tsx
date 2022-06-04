import React from 'react';
import ProductCategory, {ProductCategoryProps} from '../ProductCategory';

function ProductCategoryList() {
  const data: ProductCategoryProps[] = [
    {title: 'bedroom'},
    {title: 'living room'},
    {title: 'kitchen'},
    {title: 'diging'},
  ];

  return (
    <>
      {data.map(item => (
        <ProductCategory title={item.title} key={item.title} />
      ))}
    </>
  );
}

export default ProductCategoryList;
