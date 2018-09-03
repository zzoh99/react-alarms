import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as timerActions } from '../../reducer/alarm'
import StopWatch from './presenter';

function mapStateToProps(state){ // state복사
    const { isPlaying, elapsedTime, lapList } = state;
    
    return {
        isPlaying,
        elapsedTime,
        lapList
    };
}

function mapDispatchToProps(dispatch){
    return{
        startTimer: bindActionCreators(timerActions.startTimer, dispatch),
        stopTimer: bindActionCreators(timerActions.stopTimer, dispatch),
        cleanTime: bindActionCreators(timerActions.cleanTime, dispatch),
        startStopWatch: bindActionCreators(timerActions.startStopwatch, dispatch),
        addLap: bindActionCreators(timerActions.addLap, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StopWatch);