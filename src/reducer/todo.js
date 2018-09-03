// Actions
const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
const UPDATE_TODO = 'UPDATE_TODO'
const GET_TODO = 'GET_TODO';

// Action Creators
function addTodo(todo){
    return{
        type: ADD_TODO,
        todo
    }
}

function delTodo(idx){
    return {
        type: DEL_TODO,
        idx
    }
}

function updateTodo(idx,todo){
    return{
        type: UPDATE_TODO,
        idx,
        todo
    }
}

function getTodo(){
    return{
        type: GET_TODO
    }
}

// Reducer
const initalState= {
    todoList: []
}

function reducer(state = initalState, action){
    switch(action.type){
        case ADD_TODO:
            return applyAddTodo(state,action);
        case DEL_TODO:
            return applyDelTodo(state,action);
        case UPDATE_TODO:
            return applyUpdateTodo(state,action);
        case GET_TODO:
            return applyGetTodo(state,action);
        default:
            return state;
    }
}

// Reducer Functions
function applyAddTodo(state, action){
    return {
        todoList: [
            ...state.todoList,
            {
                idx: state.todoList.length + 1,
                todo: action.todo
            }
        ]
    }
}

function applyDelTodo(state, action){
    return {
        todoList: state.todoList.filter((todo) => {
            return todo.idx !== action.idx
        })
    }
}

function applyUpdateTodo(state, action){

    return {
        todoList:
            state.todoList.map((todo) => {
                if (todo.idx === action.idx) {
                return { ...todo, todo: action.todo }
                }
                return todo
            })
    } 
}

function applyGetTodo(state){
    
}

// Export Action Creator
const actionCreators = {
    addTodo,
    delTodo,
    updateTodo,
    getTodo
}

export { actionCreators };

// Export Reducer
export default reducer;