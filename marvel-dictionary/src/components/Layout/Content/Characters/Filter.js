import React, { Component } from 'react';
import { Button, Radio } from 'antd';
import SortingCharacters from './Sorting';

export default class FilterCharactersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLimit: ['4', '8', '16', '32'],
            radioButtonValue: this.props.limit.toString(),
        };
        this.handleChangeSort = this.handleChangeSort.bind(this);
    }

    handleClickButton(e) {
        let value = e.target.value;
        if (value !== this.state.radioButtonValue) {
            this.setState({ radioButtonValue: value });
            this.props.changeDataLimit(value);
        }
    }

    handleChangeSort(orderBy) {
        this.props.changeDataSort(orderBy);
    }
    
    render() {
        const value = this.state.radioButtonValue;
        return(
            <div style={{ height: '60px'}}>
                <Radio.Group value={value} style={{float: 'left'}}>
                    {
                        this.state.dataLimit.map(data => {
                            return (
                                <Radio.Button
                                    value={data}
                                    key={data}
                                    onClick={(e) => this.handleClickButton(e)}
                                >
                                    {data}
                                </Radio.Button>
                            )
                        })
                    }
                </Radio.Group>
                <SortingCharacters
                    changeOrderBySort={this.handleChangeSort}
                />
            </div>
        );
    }
}
