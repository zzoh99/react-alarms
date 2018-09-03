import React, {Component} from 'react';
import LapInfo from './lapInfo';
import './StopWatch.css';

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

class StopWatch extends Component{

    state = {
        lapNum: 0,
        isLapClick: false
    }

    componentWillReceiveProps(nextProps) { // 새로운 props를 얻을 때 마다 호출
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying){
            const timerInterval = setInterval(()=> {
                currentProps.startStopWatch()
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

    handleClick = (e) => {
        const {lapNum,isLapClick} = this.state;
        this.setState({
            lapNum: lapNum + 1,
            isLapClick: true
        });

        document.getElementById('lapList').innerHTML += this.props.elapsedTime;
    }

    render() {
        
        console.log(this.props);

        const {
            isPlaying,
            elapsedTime,
            lapList,
            startTimer,
            stopTimer,
            cleanTime,
            startStopWatch,
            addLap
        } = this.props;

        
        const laps = lapList.map(
            (lap, i) => (
                <LapInfo 
                    key={i}
                    index={i+1}
                    lapTime={lap.lapTime}
                />
            )
        );

        return(
            <div className="Layout">
                <div className="StopWatch">
                    {formatTime(elapsedTime)}
                </div><br/>
                <div className="ButtonWarp">
                    {!isPlaying
                        ? <span className="Btn" onClick={startTimer}>시작</span>
                        : <div className="BtnBox">
                            <span className="Btn" onClick={addLap}>기록</span>
                            <span className="Btn" onClick={stopTimer}>중지</span>
                          </div>
                    }
                    <span className="Btn" onClick={cleanTime}>초기화</span>
                </div>
                <div className="lapList">
                    {laps}
                </div>
            </div>
        )
    }
}

export default StopWatch;