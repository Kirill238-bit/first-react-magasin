import React from 'react'
import Header from './begin/Header'
import Main from './begin/Main'
import Catalog from '../Catalog'
import Footer from './begin/Footer'


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
export default function Home() {
  return (
    <div className='wrapper'>
    <Main />
    <h1 className='wrapperh1'>Акционные товары</h1>
    <Catalog  products={products}/>
  </div>
  )
}
