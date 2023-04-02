import React, { useState } from "react";

interface Product  {
    id: number;
    title: string;
    img: any;
    price: number;
    quantity:number;
}
const Cart = () => {
  const [cart, setCart] = useState<Product[]>([
    { id: 1, title: 'AOS Ср-во для мытья посуды Апельсин+мята',img:'image21.png', price: 48.76,quantity:1},
    { id: 2, title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',img:'image21-3.png', price: 48.76,quantity:1},
    { id: 3, title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',img:'image21-4.png', price: 48.76,quantity:1 },
    {id:4,title:'AOS средство для мытья посуды Crystal',img:'image21-2.png',price:48.76,quantity:1 }
  ]);

  const removeProduct = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };
  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} className="order-items">
          <img src={"./images/"+ product.img}/><br/>
          <p>{product.title}</p>
          <button className="change-product"onClick={() => decreaseQuantity(product.id)}>-</button>
          <p>Quantity: {product.quantity}</p>
          <button className="change-product" onClick={() => increaseQuantity(product.id)}>+</button>
          <p>Price:{product.price+'₸'}</p>
          <button className="trash" onClick={() => removeProduct(product.id)}><img src="./images/Frame97.png" width={59} height={59}/></button>
        </div>
      ))}
      <p><h2 className="total-price">{getTotalPrice()}</h2></p>
    </div>
  );
};

export default Cart;
