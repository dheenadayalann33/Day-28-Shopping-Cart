import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Images({ element }) {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={element.images[0]} class="d-block w-100" alt="..." style={{height:'300px'}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={element.images[1]} class="d-block w-100" alt="..." style={{height:'300px'}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={element.images[2]} class="d-block w-100" alt="..." style={{height:'300px'}}/> 
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Images;

