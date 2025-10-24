import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";


import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";


import Footer from "./components/Footer";
import Header from "./components/Header";

import Form from "./components/Form";
import About from "./components/About";

import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'im-2.jpg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '49,99'
        },

        {
          id: 2,
          title: 'Стол серый',
          img: 'im-3.jpg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '4549,99'
        },

        {
          id: 3,
          title: 'Диван серый',
          img: 'im-4.jpg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '4549,99'
        },

        {
          id: 4,
          title: 'Тумба серая',
          img: 'im-5.webp',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '549,99'
        }
        ,
        {
          id: 5,
          title: 'Кровать серая',
          img: 'im-6.jpg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '349,99'
        },

        {
          id: 6,
          title: 'Прихожка серая',
          img: 'im-7.jpg',
          desc: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
          category: 'chairs',
          price: '649,99'
        }
      ],

      showFullItem: false,

      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render () {
  return (
    <div className="wrapper">

         


     <Router>

        <Navbar>
       
                <Nav>
                  <Nav.Link><Link exeto={'/'}>Главная</Link></Nav.Link>
                  <Nav.Link><Link to={'/form'}>Регистрация</Link></Nav.Link>
                  <Nav.Link><Link to={'/about'}>About</Link></Nav.Link>
                </Nav>
      
           </Navbar>
    
           <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/header" element={<Header />} />

           </Routes>

     </Router>


    

     <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder} />

      {this.state.showFullItem && <ShowFullItem  onAdd = {this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

     <Footer />

    </div>
  )
}

  onShowItem (item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }


  addToOrder(item) {

    let isInArray = false

    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray =true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
