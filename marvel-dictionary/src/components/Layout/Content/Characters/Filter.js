import React, { Component } from 'react';
import { Button } from 'antd';

const FilterCharactersComponent = (props) => {
    return (
        <div style={{ height: '60px'}}>
            <Button style={{float: 'right'}}>Sort</Button>
            <Button style={{float: 'right'}}>Filter</Button>
        </div>
    )
}

export default FilterCharactersComponent;