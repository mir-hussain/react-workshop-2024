import { use } from "react";

const fetchProductList = async () => {
  const res = await fetch("http://localhost:3000/products");
  return res.json();
};

export default function ProductList() {
  const products = use(fetchProductList());

  console.log(products);

  return (
    <div>
      {products.map((item) => (
        <p key={item.id}>{item.productName}</p>
      ))}
    </div>
  );
}
