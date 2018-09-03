import React, { Component } from 'react';
import reducer from '../reducer/todo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from '../components/Todo';

let store = createStore(reducer);

class TodoView extends Component{
    render() {
        return(
            <Provider store={store}>
                <Todo />
            </Provider>
        )
    }
}

export default TodoView;



