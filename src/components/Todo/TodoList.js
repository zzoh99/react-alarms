import React, {Component} from 'react';
import TodoInfo from './TodoInfo';
import './Todo.css';

class TodoList extends Component{
    render(){

        const { 
            todoList,
            delTodo,
            updateTodo
        } = this.props;

        const list = todoList.map(
            todo => (
                <TodoInfo 
                    key={todo.idx}
                    todo={todo}
                    delTodo={delTodo}
                    updateTodo={updateTodo}
                />
            )
        )

        return(
            <div className="InfoWarp">
                {list}
            </div>
        )
    }
}

export default TodoList;