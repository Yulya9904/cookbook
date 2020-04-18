import React, { Component } from 'react'
import ToDoItems from './ToDoItems'
import AddTask from './AddTask'

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todos: 
                [{ id: 0, title:"Задача", check:false}]
        }
    }

    AddNewTask= task =>{
        this.setState((state)=>{
        let {todos}=this.state;
        todos.push({
            id: todos.length !== 0 ? todos.length:0,
            title: task,
            check:false
        });
        return { todos};
       });
    }
    onCheck(index){
        this.setState((state)=>{
            const {todos}=state;
            todos[index].check=!todos[index].check;
            return{
                todos
            };
        });   
    }
    render() {
        const {todos}=this.state;
        return (
            <div className="form">
            <h1>Задачи</h1>
            <div>
                Выполнено задач {todos.reduce((count, item)=>
                ( count + (item.check ? 1 : 0)),0)} 
                {' '}
                из
                {' '} 
                { todos.length}
            </div>
            <AddTask AddNewTask={this.AddNewTask}/>
            { 
            todos.map((item, index) => <ToDoItems 
            key={index} item={item}  onCheck={
                this.onCheck.bind(this,index)
            }/>)
            }
               
            </div>
        )
    }
}

