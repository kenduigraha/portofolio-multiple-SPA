import React, { Component } from 'react';
import { Carousel, Input } from 'antd';
const Search = Input.Search;

const CarouselComponent = (props) => {
    return (
        <Carousel>
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </div>
        </Carousel>
    )
}

export default CarouselComponent;