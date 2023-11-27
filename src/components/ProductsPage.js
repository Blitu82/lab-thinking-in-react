import { useState } from 'react';
import jsonData from './../data.json';

import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChange={filterBySearch} />
      <ProductsTable jsonData={products} />
    </div>
  );
}
export default ProductsPage;
