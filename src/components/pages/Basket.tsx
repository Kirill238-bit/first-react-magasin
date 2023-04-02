import React from 'react'
import CartPage from '../CartPage'
import { useNavigate } from 'react-router-dom'



export default function Basket() {
  const navigate=useNavigate();
  return (
    <div className='basket-conteiner'>
    <h1 className='offer-title'>Корзина</h1>
    <hr/>
    <CartPage/>
    <div className='offer'>
      <button className='navigation' onClick={()=>navigate('/Order')}>Оформить заказ</button>
    </div>
  </div>
  )
}

