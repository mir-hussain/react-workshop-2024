import { Suspense, useActionState } from "react";
import ProductList from "./modules/ProductList";

const createProduct = async (_, formData) => {
  const id = Math.random().toString().split(".")[1];

  const res = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, ...Object.fromEntries(formData) }),
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return null;
};

export default function ActionStateDemo() {
  const [state, formAction, pending] = useActionState(createProduct, null);

  console.log({ state, pending });

  return (
    <div>
      <form action={formAction}>
        <input type="text" name="productName" />
        <button type="submit">{pending ? "Adding..." : "Add Product"}</button>
      </form>
      <Suspense fallback={<p>Loading....</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
