import React, {Component} from 'react';
import './ItemList.css';
import TODOForm from './TODOForm';
import Item from './Item';

class ItemList extends Component{
    constructor(props){
        super(props);
        this.state = {todoList : []}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newList){
        this.setState({
            todoList : [...this.state.todoList, newList]
        });
    }

    remove(id){
        this.setState({
            todoList: this.state.todoList.filter(item => item.id !== id)
        })
    }

    update(id,updatedTask){
        const updatedTodos = this.state.todoList.map(todo => {
            if(todo.id === id){
                return {...todo, newTask: updatedTask}
            }
            return todo;
        })
        this.setState({
            todoList : updatedTodos
        })
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todoList.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({
            todoList : updatedTodos
        })
    }

    render(){
        const itemlist = this.state.todoList.map(lists => (
            <Item
                newList={lists.newTask}
                key={lists.id}
                id={lists.id}
                completed={lists.completed}
                removeItem={this.remove}
                updateItem={this.update}
                toggleItem = {this.toggleCompletion}
            />
        ));

        console.log(itemlist);

        return(
            <div className='ItemList'>
                <h1>
                    Todo lists <span>Simple React Todo List App</span>
                </h1>
                <ul>{itemlist}</ul>
                <TODOForm createList={this.create}/>
            </div>
        );
    }
}

export default ItemList;