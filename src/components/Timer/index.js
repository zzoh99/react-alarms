import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as timerActions } from '../../reducer/alarm'
import Timer from './presenter';

function mapStateToProps(state){ // state복사
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch){
    return{
        startTimer: bindActionCreators(timerActions.startTimer, dispatch),
        stopTimer: bindActionCreators(timerActions.stopTimer, dispatch),
        cleanTime: bindActionCreators(timerActions.cleanTime, dispatch),
        addSecond: bindActionCreators(timerActions.addSecond, dispatch),
        addTimes: bindActionCreators(timerActions.addTimes, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

/*
    상태를 연결시키는 함수는 mapStateToProps 로,
    액션함수를 연결시키는 함수는 mapDispatchToProps 로 만들어서, 
    이를 connect에 전달해주고, 
    그렇게 전달받은 함수에 우리가 아까 만든 Timer 컴포넌트를 전달하여 이를 내보내면 props 로 사용 할 수 있게 됩니다.
*/