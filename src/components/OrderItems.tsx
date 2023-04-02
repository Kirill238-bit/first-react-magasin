import React from 'react'
import {useState} from 'react'

interface Product  {
    id: number;
    title: string;
    img: any;
    price: number;

}
const Cart = () => {
    const [cart, setCart] = useState<Product[]>([
      { id: 1, title: 'AOS Ср-во для мытья посуды Апельсин+мята',img:'image21.png', price: 48.76},
      { id: 2, title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',img:'image21-3.png', price: 48.76},
      { id: 3, title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',img:'image21-4.png', price: 48.76 },
      {id:4,title:'AOS средство для мытья посуды Crystal',img:'image21-2.png',price:48.76}
    ]);
    const getTotalPrice = () => {
        return cart.reduce((total, product) => {
          return total + product.price;
        }, 0);
      };
    return (
        <div  className='oform-basket-info'>
          {cart.map((product) => (
            <div key={product.id} className='oform-basket-items'>
              <img src={"./images/"+ product.img}/>
              <p>{product.title}</p>
              <p>{product.price+'₸'}</p>
            </div>
          ))}
          <h3>итого</h3>
          <p><h4 className="total-price">{getTotalPrice()}</h4></p>
        </div>
      );
}
export default Cart