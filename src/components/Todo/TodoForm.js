import React, {Component} from 'react';
import './Todo.css';

class TodoForm extends Component{

    state = {
        text: ''
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            text:''
        })
        this.props.addTodo(this.state.text);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="InputText" value={this.state.text} onChange={this.handleChange}/>
                <button type="submit">추가</button>
            </form>
        )
    }
}

export default TodoForm;