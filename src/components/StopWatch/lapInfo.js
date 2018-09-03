import React, { Component } from 'react';
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

class LapInfo extends Component{
    render(){

        const {
            index, lapTime
        } = this.props;

        return(
            <div className="lapInfo">
                <span className="lapNum">랩{index}</span>
                <span className="lapTime">{formatTime(lapTime)}</span>
            </div>
        )

    }
}

export default LapInfo;