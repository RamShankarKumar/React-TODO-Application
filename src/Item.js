import React, {Component} from 'react';
import './Item.css';

class Item extends Component{
    constructor(props){
        super(props); // here we can see the usecase of this props with super keyword. 
        this.state = {
            isEditing : false,
            updatedTask : this.props.newList // just because we have used super(props), we are able to access props.newList in the state.
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove(){
        this.props.removeItem(this.props.id);
    }

    toggleForm(){
        this.setState({
            isEditing : !this.state.isEditing
        })
    }

    handleUpdate(evt){
        evt.preventDefault();
        // take new task data and pass up to parent
        this.props.updateItem(this.props.id, this.state.updatedTask);
        this.toggleForm();
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleToggle(evt){
        this.props.toggleItem(this.props.id);
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form className='Item-edit-form' onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.updatedTask} name='updatedTask' onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            );
        }
        else{
            result = (
                <div className='Item'>
                    <li className={this.props.completed ? 'Item-task completed' : "Item-task"} onClick={this.handleToggle}>{this.props.newList}</li>
                    <div className='Item-buttons'>
                        <button onClick={this.toggleForm}>
                            <i class='fas fa-pen' />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class='fas fa-trash' />
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default Item;