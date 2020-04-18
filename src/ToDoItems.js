import React, { Component } from 'react'


export default class ToDoItems extends Component {
    render() {
        const{title,check,id} = this.props.item
        return (
            <div>
                <label htmlFor="" onClick={this.props.onCheck} className="items">
                <input type="checkbox" checked={check} /> 
                <span>{title} №{id}</span>
                </label>
            </div>
        )
    }
}