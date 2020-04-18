import React, { Component } from 'react'

export default class AddTask extends Component {
    constructor(props){
        super(props);

        this.state={
            input:''
        };
    }
    inputChange = event => {
        this.setState({ input: event.target.value})
        //У события есть значение поля ввода в его объекте target.Позволяет изменять input

    };
    AddNewTask = () =>{
      const{input} = this.state;
      if(input) 
        this.props.AddNewTask(input);
        this.setState({input:''})
    }
    render() {
        const{input}=this.state;
        return (
            <div>
            <input onChange={this.inputChange} value={input} type="text" />
            <button onClick={this.AddNewTask} className="but1" disabled={input===''} >Добавить</button> 
            </div>
        )
    }
}
