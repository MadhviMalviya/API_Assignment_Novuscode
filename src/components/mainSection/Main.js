import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Main.module.css';
import ProductCard from '../midSection/ProductCard';

function Main() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      handleData();
    }, []); 
  
    function handleData() {
      axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          console.log(res);
          setPost(res.data.products.slice(0, 1)); 
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div className={style.midMain}>
        <div className={style.container}>
          {post.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  }

export default Main;
