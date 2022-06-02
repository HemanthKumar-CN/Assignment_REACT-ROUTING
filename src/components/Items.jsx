import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Items = () => {

  const {id}=useParams();
  const [item, setItem] = useState({})
  const navigate=useNavigate();

  useEffect(() => {
    if(id)
    {
      fetch(`http://localhost:8080/products/${id}`)
      .then(r=> r.json())
      .then(d=> setItem(d))
    }
  
    
  }, [id])


  function handleback()
  {
      navigate('/products')
  }
  

  return (
    <div >
      <div><button onClick={handleback}>Back</button></div>
      Product ID: {id}
      <div><img style={{"width":"300px"}} src={item.img} alt="" /></div>
      <div style={{"fontWeight":"bolder"}}>{item.name}</div>
      <div>Price: {item.price}/-</div>
    </div>
  )
}

export default Items