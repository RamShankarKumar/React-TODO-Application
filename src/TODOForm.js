import React, {Component} from 'react';
import './TODOForm.css';
import { v4 as uuidv4 } from 'uuid';

class TODOForm extends Component{
    constructor(props){
        super(props);
        this.state = { newTask : ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        if(this.state.newTask !== ""){  // if there is no task added and we are clicking add button then this condition will stop from creating a blank task
            const newlist = {...this.state, id:uuidv4(), completed : false};
            this.props.createList(newlist)
            this.setState({
                newTask : ""
            });
        }
    }
    
    render(){
        return(
            <div>
                <form className='Todo-form' onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="New Todo"
                        id="newTask"
                        name="newTask" // we need to keep the same name as we given in state.
                        value={this.state.newTask}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TODOForm;