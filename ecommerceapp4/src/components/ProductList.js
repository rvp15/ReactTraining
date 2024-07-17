import React, { useEffect} from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  //const products = useSelector((state) => state.product.products);
  const filteredProducts = useSelector((state) => state.product.filteredProducts);


  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products)
    dispatch(allProducts(data.products));
  };

  useEffect(() => {
    fetchProducts();
  },[]); // Empty dependency array to call only once on mount

  return (
    <div className="product-list">
      <div className="container text-center product-wrapper">
        <div className="row">
          {filteredProducts?.length?filteredProducts?.map((product) => (
            <Product key={product.id} product={product} />
          )) : <h1 style={{margin: "100px"}}> No products found under this category</h1>}
          
        </div>
      </div>
    </div>
  );
};

export default ProductList;
