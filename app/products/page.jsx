
//  we can get product wihout use effect as in server side
 const loadProducts = async()=>{
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;

 }
const Products = async() => {
  const products = await loadProducts()
  console.log("products" , products);
  
  return (
    <div>
      {products.map((product)=>(
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
      
    </div>
  )
}

export default Products
