import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts=()=> {
      fetch(`http://localhost:8080/products`)
      .then(res=> res.json())
      .then(data=> setProducts(data))
    }
    
    fetchProducts()
    
  }, [])
  

  return (
    <div>
      <h1>PRODUCTS</h1>
      <div style={{"border": "1px "}}>
      {
        Products.map(t=> {
          return (
            <Link  key={t.id} to={`/products/${t.id}`}>
              <br />
              <br />
              {t.name},
              
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default Products