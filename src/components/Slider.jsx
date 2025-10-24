import React from 'react'
import Carousel from "react-bootstrap/Carousel";

export const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item  >
             <Carousel.Caption>
               <h1>Лучшие товары для вашего дома</h1>
               <p>По низким ценам</p>
             </Carousel.Caption>
             <img
               className="d-block w-100"
               src="src/img/im-1.jpg"
               alt="First slide"
             /> 
        </Carousel.Item>

        <Carousel.Item >
            <Carousel.Caption>
               <h1>Лучшие товары для вашего дома</h1>
               <p>По низким ценам</p>
            </Carousel.Caption>
            <img
            className="d-block w-100"
            src="src/img/im-8.jpg"
            alt="Second slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <Carousel.Caption>
               <h1>Лучшие товары для вашего дома</h1>
               <p>По низким ценам</p>
            </Carousel.Caption>
           <img
            className="d-block w-100"
            src="src/img/im-9.jpg"
            alt="Third slide"
           />
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}
