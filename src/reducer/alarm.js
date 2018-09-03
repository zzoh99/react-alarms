// Import

// Actions
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const CLEAN_TIME = 'CLEAN_TIME'
const ADD_SECOND = 'ADD_SECOND';
const ADD_TIMES = 'ADD_TIMES';
const START_STOPWATCH = 'START_STOPWATCH';
const ADD_LAP = 'ADD_LAP';

// Action Creators
function startTimer(){
    return{
        type: START_TIMER
    }
}

function stopTimer(){
    return{
        type: STOP_TIMER
    }
}

function cleanTime(){
    return{
        type: CLEAN_TIME
    }
}

function addSecond(){
    return{
        type: ADD_SECOND
    }
}

function addTimes(second){
    return{
        type: ADD_TIMES,
        second
    }
}

function startStopwatch(){
    return{
        type: START_STOPWATCH
    }
}

function addLap(){
    return{
        type: ADD_LAP
    }
}
// Reducer

const initialState = {
    isPlaying: false,
    elapsedTime: 0, // 카운터 된 시간
    timerDuration: 0,
    lapList: []
}

// state 안주면 기본으로 initalState로 시작
function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER :
            return applyStartTimer(state, action);
        case STOP_TIMER :
            return applyStopTimer(state, action);
        case CLEAN_TIME:
            return applyCleanTime(state,action);
        case ADD_SECOND : 
            return applyAddSecond(state, action);
        case ADD_TIMES:
            return applyAddTimes(state, action);
        case START_STOPWATCH:
            return applyStartStopWatch(state, action);
        case ADD_LAP:
            return applyAddLap(state, action);
        default : 
            return state;
    }
}

// Reducer Functions

function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    };
}

function applyStopTimer(state){
    return{
        ...state,
        isPlaying: false,
    }
}

function applyCleanTime(state){
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0,
        timerDuration: 0,
        lapList: []
    }
}

function applyAddSecond(state){
    
    if(state.elapsedTime < state.timerDuration){
        return{
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }
    else{
        return{
            ...state,
            isPlaying: false
        }
    }
}

function applyAddTimes(state, action){
    return{
        ...state,
        timerDuration: state.timerDuration + action.second
    }
}

function applyStartStopWatch(state){
    return{
        ...state,
        elapsedTime: state.elapsedTime + 1
    }
}

function applyAddLap(state){
    return{
        ...state,
        lapList: [
            ...state.lapList,
            {
                lapTime: state.elapsedTime
            }
        ]
    }
}
// Export Acton Creator

const actionCreators = {
    startTimer,
    stopTimer,
    cleanTime,
    addSecond,
    addTimes,
    startStopwatch,
    addLap
}

export { actionCreators };

// Exprot Reducer

export default reducer;