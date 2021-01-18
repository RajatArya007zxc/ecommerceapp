import React,{useState,useEffect} from 'react'
// import Products from './components/Products/Products';
// import NavBar from './components/NavBar/NavBar';
import {Products ,NavBar} from './components';
import {commerce} from './Lib/commerceApi';


export default function App() {
    const [products,setProducts]=useState([]);
    const [cart,setCart] =useState({});

    const fetchProducts = async ()=>{
       const {data}=await commerce.products.list();
       setProducts(data);
    }

    //  Now for the Cart
    
     const fetchCart= async ()=>{
         setCart(await commerce.cart.retrieve())
     }
          
       const handelAddtoCart= async (productId,quantity)=>{

         const item = await commerce.cart.add(productId,quantity);
         setCart(item.cart)
       }
//

    useEffect(()=>{
        fetchProducts()
        fetchCart();
    },[])
   // console.log(products);
   console.log(cart);
    return (
        <div>
            <NavBar totalItem={cart.total_items}/>
            <Products products={products} onAddToCart={handelAddtoCart}/>
        </div>
    )
}
