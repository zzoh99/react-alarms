import React, {Component} from 'react';
import './Timer.css';

function formatTime(time){

    let hours = Math.floor(time/3600);
    time -= hours * 3600;

    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    
    let second = parseInt(time % 60 , 10);

    let timeFormat =
        (hours < 10
            ? '0'+hours
            : hours)
        + ':' +
        (minutes < 10 
            ? '0'+minutes
            : minutes)
        + ':' +
        (second < 10
            ? '0'+second
            : second);

    return timeFormat;
}

class Timer extends Component{

    componentWillReceiveProps(nextProps) { // 새로운 props를 얻을 때 마다 호출
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying){
            const timerInterval = setInterval(()=> {
                currentProps.addSecond()
            },1000);
            this.setState({
                timerInterval
            });
        }
        else if (currentProps.isPlaying && !nextProps.isPlaying){
            // stop the interval
            clearInterval(this.state.timerInterval);
        }

    }

    render() {

        console.log(this.props);

        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            stopTimer,
            cleanTime,
            addTimes
        } = this.props;
        
       
        return(
            <div className="Layout">
                <div className="Timer">
                    {formatTime(timerDuration - elapsedTime)}
                </div><br/>
                <div className="ButtonWarp">
                    <span className="TimeAddBtn" onClick={()=>addTimes(1)}>
                        +1초
                    </span>
                    <span className="TimeAddBtn" onClick={()=>addTimes(10)}>
                        +10초
                    </span>
                    <span className="TimeAddBtn" onClick={()=>addTimes(60)}>
                        +1분
                    </span>
                    <span className="TimeAddBtn" onClick={()=>addTimes(600)}>
                        +10분
                    </span>
                    <span className="TimeAddBtn" onClick={()=>addTimes(3600)}>
                        +1시간
                    </span>
                    {!isPlaying 
                        ? <span className="TimeAddBtn" onClick={startTimer}>시작</span>
                        : <span className="TimeAddBtn" onClick={stopTimer}>정지</span>
                    }
                    <span className="TimeAddBtn" onClick={cleanTime}>초기화</span>
                </div>
                
            </div>
        )
    }
}

export default Timer;