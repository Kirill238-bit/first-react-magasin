import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-conteiner'>
            <div className='footer-info1'>
                <img src='/images/logo-footer.png' width={156}/>
                <h4>Компания «Султан» — снабжаем розничные магазины товарами 
                    "под ключ" в Кокчетаве и Акмолинской области</h4>
                <h5>Подпишись на скидки и акции</h5>
                <input value="Введите ваш E-mail"/>
            </div>

            <div className='footer-info2'>
                <h3 className='navigation'>Меню сайта:</h3>
                <h4 className='navigation'>О компании</h4>
                <h4 className='navigation'>Доставка и оплата</h4>
                <h4 className='navigation'>Возврат</h4>
                <h4 className='navigation'>Контакты</h4>
            </div>

            <div className='footer-info3'>
                <h3 className='navigation'>Категории:</h3>
                <h4 className='navigation'>Бытовая химия</h4>
                <h4 className='navigation'>Косметика и гигиена</h4>
                <h4 className='navigation'>Товары для дома</h4>
                <h4 className='navigation'>Товары для детей и мам</h4>
                <h4 className='navigation'>Посуда</h4>
            </div>

            <div className='footer-info4'>
                <h3 className='navigation'>Скачать прайс-лист:</h3>
                <button className='navigation'>Прайс лист</button><br/>
                <h4>Связь в мессенджерах</h4>
                <img className='navigation' src='/images/watup.png'/>
                <img className='navigation'src='/images/telegram.png'/>
            </div>

            <div className='footer-info5'>
                <h3>Контакты:</h3>
                <h4>+7(777)490-00-91</h4>
                <h4>время работы: 9:00-20:00</h4>
                <h4>Заказать звонок</h4>
                <h4>opt.sultan@mail.ru</h4>
                <h4>На связи в любое время</h4>
                <img src='/images/visa.png'/>
                <img src='/images/mastercard.png'/>
            </div>

        </div>

    </footer>
  )
}
