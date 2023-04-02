import React from 'react'
import CatalogCHimikals from '../CatalogCHimical'



  const chimical=
  {
    id:1,
    title:'AOS Ср-во для мытья посуды Апельсин+мята',
    img:'image21.png',
    kod:'Штрихкод: 4604049097548',
    maker:'Производитель: Нэфис',
    brend:'Бренд: AOS',
    type:'уход за телом',
    price:48.76
  }
export default function Item() {
  return (
    <div className='device-conteiner'>
      <div className='device-image'>
        <img width={250} height={400} src={"../images/"+chimical.img}/>
      </div>
      <div className='device-info'>
        <h1>{chimical.title}</h1>
        <h2>{chimical.price}</h2>
        <button className='navigation'>В корзину</button>
        <div className='device-character'>
          <h3>{chimical.maker}</h3>
          <h3>{chimical.brend}</h3>
          <h3>{chimical.type}</h3>
          <h3>{chimical.kod}</h3>
          <h2>Описание</h2>
          <h4>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis 
            iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. 
            Faucibus consectetur aliquet sed pellentesque consequat consectetur congue 
            mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, 
            malesuada.</h4><hr/>
            <h2>Характеристики</h2>
            <h3>Назначение:{chimical.brend}</h3>
            <h3>Тип:{chimical.brend}</h3>
            <h3>Производитель:{chimical.brend}</h3>
            <h3>Бренд:{chimical.brend}</h3>
            <h3>Артикул:{chimical.brend}</h3>
            <h3>Штрихкод:{chimical.brend}</h3>
        </div>
      </div>
    </div>
  )
}
