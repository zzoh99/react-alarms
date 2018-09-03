import React, {Component} from 'react';
import TodoForm from './todoForm';
import TodoList from './TodoList';
import './Todo.css';

class Todo extends Component{
    render(){

        const {
            todoList,
            addTodo,
            delTodo,
            updateTodo,
            getTodo
        } = this.props;

        return(
            <div className="Todo">
                <div className="Text">To do</div>
                <TodoForm 
                    addTodo={addTodo}
                />
                <TodoList 
                    todoList={todoList}
                    delTodo={delTodo}
                    updateTodo={updateTodo}
                />
            </div>
            
        )
    }
}

export default Todo;