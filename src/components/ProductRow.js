function ProductRow({ jsonData }) {
  return (
    <>
      {jsonData.map((row) => (
        <tr key={row.id}>
          <td style={{ color: row.inStock ? 'black' : 'red' }}>{row.name}</td>
          <td>{row.price}</td>
        </tr>
      ))}
    </>
  );
}

export default ProductRow;
