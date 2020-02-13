import React, { Component } from 'react';

export default class Select extends Component {
    render() {
        return (
            <div>
                <select className="unicornFilter" onChange={this.props.handleChangeCallback}>
                <option value='' defaultValue>All Creatures</option>
                <option value='narwhal'>Narwhal</option>
                <option value='rhino'>Rhino</option>
                <option value='unicorn'>Unicorn</option>
                <option value='unilego'>Unilego</option>
                <option value='triceratops'>Triceratops</option>
                <option value='markhor'>Markhor</option>
                <option value='mouflon'>Mouflon</option>
                <option value='addax'>Addax</option>
                <option value='chameleon'>Chameleon</option>
                <option value='lizard'>Lizard</option>
                <option value='dragon'>Dragon</option>
            </select>
            <select className="hornsFilter" onChange={this.props.handleChangeCallback}>
                <option value='' defaultValue>All Creatures</option>
                <option value='1'>One Horn</option>
                <option value='2'>Two Horns</option>
                <option value='3'>Three Horns</option>
                <option value='100'>ONE HUNDRED HORNS</option>
            </select>
            <select className="babyFilter" onChange={this.props.handleChangeCallback}>
                <option value='' defaultValue>All Creatures</option>
                <option value='baby'>Baby Creatures</option>
            </select>
        </div>
        )
    }
}