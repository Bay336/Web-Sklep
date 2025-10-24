import React, { useState} from 'react';
import { BsFillBasket3Fill } from "react-icons/bs";





import Order from './Order';
import { Slider } from './Slider';



const showOrders = (props) => {

  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))

  return(

    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete}
        key={el.id}
        item={el}
        />
      ))}

      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} Р</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
        <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false)

  return (

 
    <header> 
        <div>
          <img className="header-img" src={'src/avatar.jpg'} alt="#" />
          <span className='logo'>WEB МАГАЗИН
          </span>

          
          <BsFillBasket3Fill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

          {cartOpen && (
            <div className='shop-cart'>
               {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}

            </div>
          )}
       
        </div>

        <div className='presentation'>
        </div>

        <Slider />  

    </header>  

  )
}
