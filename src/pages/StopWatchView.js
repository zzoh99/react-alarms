import React, {Component} from 'react';
import StopWatch from '../components/StopWatch'
import reducer from '../reducer/alarm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

class StopWatchView extends Component{
    render() {
        return(
            <Provider store={store}>
                <StopWatch />
            </Provider>
        )
    }
}
 
export default StopWatchView;