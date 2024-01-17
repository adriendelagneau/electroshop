"use client"

import { useCartStore } from '@/store/cart';
import React from 'react'
import RippleButton from './RippleButton';
import { toast } from 'sonner';


const AddToCartButton = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    const productToZustand = {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image
    }
    

  const handleAddToCart = () => {
 
    addToCart(productToZustand);
 toast.success("Add to cart")
  };

  return (
    <RippleButton type={"submit"} text={"Add To Cart"} buttonClasses={"w-full mt-10 text-xl rounded-md bg-stone-900  lg:w-[250px]"}  onClick={handleAddToCart} />

  )
}

export default AddToCartButton