import React, { Component } from 'react';
import Timer from '../components/Timer';
import reducer from '../reducer/alarm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

class TimerView extends Component{
    render() {
        return(
            <Provider store={store}>
                <Timer />
            </Provider>
        )
    }
}

export default TimerView;



