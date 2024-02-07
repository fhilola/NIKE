import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cart} = useSelector((state: RootState ) => state.certRoot)
  return (
    <div>
        {
            cart && cart.length > 0 && cart.map((item, index) => 
            <div key={index}>
                <img width={100} height={100} src={item.product_images[0]} alt="" />
                <p>{item.product_name}</p>
                <p>{item.selectedVariant.variant_value}</p>
                <p>{item.selectedVariant.variant_sale_price}</p>
                <p>{item.count}</p>
            </div>)
        }
    </div>
  )
}

export default Cart