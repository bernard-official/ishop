    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if(product.name.toLowercase().indexOf(
      filterText.toLowercase()
      ) === -1 ){
        return;
      }
    if( inStockOnly && !product.stocked){
      return;
    }  
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );