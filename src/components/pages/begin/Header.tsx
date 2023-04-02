import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Header() {
 const navigate=useNavigate()
  return (
    <header className='header'>
      <div className='adress'>
          <h3>г. Кокчетав, ул. Ж. Ташенова 129Б<br/>(Рынок Восточный)</h3>
          <img src="/images/Vector.png" alt='почта' width={17} height={14}></img>
          <h4>opt.sultan@mail.ru <br/>На связи в любое время</h4>
            <div className='about'>
            <h4 className='navigation'>О компании</h4>
            <h4 className='navigation'>Доставка и оплата</h4>
            <h4 className='navigation'>Возврат</h4>
            <h4 className='navigation'>Контакты</h4>
            </div>
       </div>

      <div className='menu'>
        <img src="/images/Vector-2.png"alt='султан'></img>
        <button className='nothing' onClick={()=>navigate('/Shop')}>Каталог</button>
        <input  value="Поиск..." className='women'/>
          <h3>+7(777)490-00-91<br/>
          <h4>время работы: 9:00-20:00</h4>
          <h5>Заказать звонок</h5></h3>
          <img src="/images/pngwing3.png"alt='поддержка'width={74} height={100} className='women'></img>
        <button className='nothing'>Прайс-лист</button>
        <button className='navigation'onClick={()=>navigate('/Basket')} ><img className='basket' src='./images/Vector-3.png'width={41} height={29}/></button>
        <h5 className='basket-text'>Корзина</h5>
      </div>
      
    </header>
  )
}

