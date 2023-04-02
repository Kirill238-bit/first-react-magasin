import React from 'react';
import CatalogCHimikals from '../CatalogCHimical';


const chimicals = [
  {
      id: 1,
      title:'AOS Ср-во для мытья посуды Апельсин+мята',
      img:'image21.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за телом',
      price:48.76
    },
    {
      id:2,
      title:'AOS средство для мытья посуды Crystal',
      img:'image21-2.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за руками',
      price:48.76
    },
    {
      id:3,
      title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      img:'image21-3.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за ногами',
      price:48.76 
    },
    {
      id:4,
      title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      img:'image21-4.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за лицом',
      price:48.76 
    },
    {
      id:5,
      title:'AOS Ср-во для мытья посуды Апельсин+мята',
      img:'image21.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за телом',
      price:48.76 
    },
    {
      id:6,
      title:'AOS средство для мытья посуды Crystal',
      img:'image21-2.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за руками',
      price:48.76 
    },
    {
      id:7,
      title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      img:'image21-3.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за ногами',
      price:48.76 
    },
    {
      id:8,
      title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      img:'image21-4.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за лицом',
      price:48.76 
    },
    {
      id: 9,
      title:'AOS Ср-во для мытья посуды Апельсин+мята',
      img:'image21.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за телом',
      price:48.76 
    },
    {
      id:10,
      title:'AOS средство для мытья посуды Crystal',
      img:'image21-2.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за руками',
      price:48.76 
    },
    {
      id:11,
      title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      img:'image21-3.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за ногами',
      price:48.76 
    },
    {
      id:12,
      title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      img:'image21-4.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за лицом',
      price:48.76 
    },
    {
      id:13,
      title:'AOS Ср-во для мытья посуды Апельсин+мята',
      img:'image21.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за телом',
      price:48.76 
    },
    {
      id:14,
      title:'AOS средство для мытья посуды Crystal',
      img:'image21-2.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за руками',
      price:48.76 
    },
    {
      id:15,
      title:'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      img:'image21-3.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за ногами',
      price:48.76 
    },
    {
      id:16,
      title:'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      img:'image21-4.png',
      kod:'Штрихкод: 4604049097548',
      maker:'Производитель: Нэфис',
      brend:'Бренд: AOS',
      type:'уход за лицом',
      price:48.76 
    },

];
export default function Shop(){
  return (
    <div className='shop-conteiner'>
      <CatalogCHimikals chimicals={chimicals} />
    </div>
  );
}
