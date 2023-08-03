import React from 'react';
import style from './Search.module.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Search() {
  return (
    <div className={style.searchbox}>
      <div>
        <h6>Get first update</h6>
        <h4>
          Get the news in front line by <br />
          <span className={style.red}>subscribe✍️</span> our latest updates
        </h4>
      </div>
      <div className={style.searchbar}>
        <TextField 
        sx={{backgroundColor:'white'}}
          label="Enter email"
          variant="outlined"
          size="small"
          type="text"
          placeholder="Your Email"
        />
        <Button variant="contained" color="primary" sx={{backgroundColor:'red', border:'none', borderRadius:'6' }} >
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Search;
