import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import OrderItems from'../OrderItems'
import Modal from '../modal/Modal'

export default function Order() {

  const [modalActive,setModalActive]=useState(false)
  const navigate=useNavigate();
  return (
    <div className='oform-order'>
      <div className='oform-base'>
      <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
        <form>
         <div className='numbers'>1</div> <h2>контактные данные</h2>
         <p><h3>Имя</h3><input type="test" name='Введите ваше имя'/></p>
         <p><h3>Телефон</h3><input type="number" name='Введите ваш телефон'/></p>
         <p><h3>E-mail</h3><input type="e-mail" name='Введите ваш E-mail'/></p>
         <p><h3>Нахвание организации</h3><input type="test" alt='Введите назание организации'/></p>
         <p><div className='numbers'>2</div><h2>адрес доставки</h2></p>
         <p><h3>Город</h3><input type="test" alt='Введите ваш город'/></p>
         <p><h3>Адрес</h3><input type="test" alt='Введите адрес доставки'/></p>
        </form>
        <p><button className='navigation' onClick={()=>setModalActive(true)}>Подтверждение заказа</button></p>
        <Modal active={modalActive} setActive={setModalActive}>
          <img src='./images/Frame122.png' width={59} height={59} />
          <p><h2>Спасибо за заказ</h2></p>
          <p><h4>Наш менеджер свяжется с вами в ближайшее время</h4></p>
          </Modal>
      </div>

      <div className='oform-info'>

        <div className='oform-info-block'>
          <img src='./images/Group130.png' alt='кошелек'/>
          <h2>Оплата</h2>
          <h4>Принимаем оплату наличными, по карте 
              и через расчетный счет.</h4>
        </div>

        <div className='oform-info-block'>
        <img src='./images/Group130-2.png' alt='грузовик'/>
        <h2>Доставка</h2>
        <h4>Бесплатная доставка от 10 000 ₸
            по области. Наша доставка работает ежедневно.</h4>
        </div>

        <div className='oform-info-block'>
        <img src='./images/Group130-3.png' alt='вопрос'/>
        <h2>Возникли вопросы?</h2>
        <h4>Звоните: +7 777 490 00 91
            Менеджер Вам ответит на все вопросы.</h4>
        </div>

        <div>
         <div className='numbers'>3</div><h2>дополнительно</h2>
        <h3>Комментарии</h3>
        <input className='komment' type="test" alt='Введите ваш комментарий'/>
        </div>

      </div>
      <div className='oform-basket'>
        <h2>Ваш заказ</h2>
        <div><OrderItems/></div>
        <button className='navigation'onClick={()=>navigate('/Basket')}>Редактировать заказ</button>
      </div>

      </div>
  )
}
