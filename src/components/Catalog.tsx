import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    img:any;
    kod:string;
    maker:string;
    brend:string;
    price: string;
  }
  
  interface CatalogProps {
    products: Product[];
  }
  const products = [
    {
      id: 1,
      title:'AOS Ср-во для мытья посуды Апельсин+мята',
      img:'image21.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:2,
      title:'AOS средство для мытья посуды Crystal',
      img:'image21-2.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:3,
      title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      img:'image21-3.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:4,
      title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      img:'image21-4.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:5,
      title:'AOS Ср-во для мытья посуды Апельсин+мята',
      img:'image21.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:6,
      title:'AOS средство для мытья посуды Crystal',
      img:'image21-2.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:7,
      title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      img:'image21-3.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
    {
      id:8,
      title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      img:'image21-4.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      price:'48,76 ₸'
    },
  ];
const Catalog:React.FC<CatalogProps>=({products})=>
{
  const history=useNavigate()
    return(
        <div className='aktion-products-wrapper'>
            {products.map(product =>(
            <div key={product.id} className="aktion-products">
                <img src={"./images/"+ product.img} alt='product'onClick={()=>history('/item'+ '/'+ product.id)}/><br/>
                <h3>{product.title}</h3><br/>
                <b>{product.kod}</b><br/>
                <b>{product.maker}</b><br/>
                <b>{product.brend}</b><br/>
                <p>{product.price}</p>
                <button className='navigation'>в корзину</button>
                </div>
                ))}
        </div>
    );
};

export default Catalog;