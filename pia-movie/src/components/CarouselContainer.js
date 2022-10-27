import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Card.css'

const CarouselContainer = () =>{
    return(
        <div className='Carousel-div'>
            <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/47/e1/07/47e107893c4f6cced4536948ae2945d0.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Howls Moving Castle</h3>
            <p>Descripcion pelicula jjjj</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://media.cntraveler.com/photos/593ab456f2125a2b5b9ed232/16:9/w_2560%2Cc_limit/MCDMYNE_EC003_H.JPG"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>My Neighbour Totoro</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.port.hu/images/000/068/069.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
        
    )
}

export default CarouselContainer;