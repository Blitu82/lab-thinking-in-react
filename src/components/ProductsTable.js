import ProductRow from './ProductRow';

function ProductsTable({ jsonData }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow jsonData={jsonData} />
      </tbody>
    </table>
  );
}

export default ProductsTable;
