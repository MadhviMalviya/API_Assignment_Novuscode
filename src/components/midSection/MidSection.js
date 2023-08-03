import React, { useEffect, useState } from 'react';
import style from './Mid.module.css';
import axios from 'axios';
import ProductCard from './ProductCard';

function MidSection() {
  const [post, setPost] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);  //display 4 from api

  useEffect(() => {
    handleData();
  }, [visibleProducts]); // will run whenever the visibleProducts state changes

  function handleData() {
    axios
      .get(`https://dummyjson.com/products?limit=${visibleProducts}`)   //syntx in template literals
      .then((res) => {
        console.log(res);
        setPost(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleShowMore() {
    setVisibleProducts((prevVisible) => prevVisible + 4)
    console.log('clicked');
  }

  return (
    <div className={style.midMain}>
      <h3>Latest Products</h3>

      <div className={style.container}>
        {post.map((product, index) => (
          <ProductCard key={index} product={product} />   //prop ,reused component
        ))}
      </div>

      <button onClick={handleShowMore}>Show More</button>
    </div>
  );
}

export default MidSection;
