import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigation=useNavigate()
  return (

    <div className='main'>
      <div className="main-conteiner"
      style={{ backgroundImage:`url(${'/images/back.png'})`}}>
        <div className='main-conteiner-info'>
            <h1>Бытовая химия,косметика и хозтовары</h1><p>
            <h2>оптом по кокчетаву и области</h2></p>
            <button onClick={()=>navigation('/Shop')}><h3 className='navigation'>в каталог</h3></button>
                <div className='main-conteiner-info2'>
            <h4>Только самые<br/>
                выгодные предложения</h4><p>
            <h4>Бесплатная доставка<br/>
                 по Кокчетаву от 10тыс Т</h4></p>
                 </div>
        </div>
      </div>
        <h2>КАТЕГОРИИ ТОВАРОВ</h2>
        <h3>10 000+ ходовых позиций по спецмальным ценам</h3>
        <div className='main-info'>
            <div className='main-info-img'><img src='./images/Group64.png'/><h4>Бытовая химия</h4></div>
            <div className='main-info-img'><img src='./images/Group64-2.png'/><h4>Косметика и гигиена</h4></div>
            <div className='main-info-img'><img src='./images/Group64-3.png'/><h4>Товары для дома</h4></div>
            <div className='main-info-img'><img src='./images/Group64-4.png'/><h4>Товары для детей и мам</h4></div>
            <div className='main-info-img'><img src='./images/Group64-5.png'/><h4>Посуда</h4></div>
        </div>
        <div className='main-info-map'>
            <img className='main-info-map-img' src='./images/map.png'/>
            <div className='main-info-map-text'>
            <h2>Контакты</h2>
            <h3>Оптовый поставщик «Султан»</h3>
            <h4>Адрес:<br/>г. Кокчетав, ул. Ж. Ташенова 129Б<br/>
                (Рынок Восточный).</h4>
                <h4>Отдел продаж:<br/>+7 (777) 490-00-91<br/> opt.sultan@mail.ru</h4>
                <h4>Данные налогоплательщика:<br/>ИП Катран Д.С.
                    <br/>ИИН: 860113450858</h4>
                    </div>
        </div>
    </div>
  )
}
