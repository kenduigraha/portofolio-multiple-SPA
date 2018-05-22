import React, { Component } from 'react';
import { Carousel, Input } from 'antd';
const Search = Input.Search;

const dataImg = [1, 2, 3, 4, 5];

const CarouselComponent = (props) => {
    return (
        <Carousel>
            {
                dataImg.map(no => (
                    <div>
                        <img
                            src={`/images/carousel-${no}.jpg`}
                            style={{ width: '100%', margin: 'auto', height: 'auto' }}
                            alt={`marvel carousel #${no}`}
                        />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default CarouselComponent;