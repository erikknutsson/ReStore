import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProducList from "./ProductList"

export default function Catalog()  {
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

    return (
        <>  
            <ProducList products={products}/>
        </>
    )
}