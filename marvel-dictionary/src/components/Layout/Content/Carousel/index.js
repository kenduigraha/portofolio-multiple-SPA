import React, { Component } from 'react';
import { Carousel, Input } from 'antd';
const Search = Input.Search;

const CarouselComponent = (props) => {
    return (
        <Carousel>
            <div>
                <img
                    src="/images/carousel-1.jpg"
                    style={{ width: '100%', margin: 'auto', height: 'auto' }}
                    alt="marvel #1"
                />
            </div>
            <div>
                <img
                    src="/images/carousel-2.jpg"
                    style={{ width: '100%', margin: 'auto', height: 'auto' }}
                    alt="marvel #2"
                />
            </div>
            <div>
                <img
                    src="/images/carousel-3.jpg"
                    style={{ width: '100%', margin: 'auto', height: 'auto' }}
                    alt="marvel #3"
                />
            </div>
            <div>
                <img
                    src="/images/carousel-4.jpg"
                    style={{ width: '100%', margin: 'auto', height: 'auto' }}
                    alt="marvel #4"
                />
            </div>
            <div>
                <img
                    src="/images/carousel-5.jpg"
                    style={{ width: '100%', margin: 'auto', height: 'auto' }}
                    alt="marvel #5"
                />
            </div>
        </Carousel>
    )
}

export default CarouselComponent;