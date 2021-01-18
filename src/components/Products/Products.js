import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product.js'
import useStyles from './style';

export default function Products({products,onAddToCart}) {
  

const classes=useStyles();
    return (
        <main className={classes.content}>
      
       <div className={classes.toolbar}/>

            <Grid container justify="center" spacing={4}>
                {
                     products.map((pro)=>(
                         <Grid item key={pro.id} xs={12} sm={6} md={4} lg={3}>
                           <Product product={pro} onAddToCart={onAddToCart}/>
                             </Grid>
                     ))
                }

            </Grid>
        </main>
    )
}
