import React, {Component} from 'react';
import './Todo.css';

class TodoInfo extends Component{

    state = {
        editing: false,
        todoText:' ',
        idx: 0,
        isChecked: false,
        style: 'TodoText'
    }

    handleToggleEdit = (e) => {
        
        const { editing, isChecked } = this.state;
        [e.target.id] == 'editing'
            ? this.setState({editing: !editing})
            : this.setState({isChecked: !isChecked})
        
    }

    // editing 값이 바뀔 때 처리 할 로직
    componentDidUpdate(prevProps, prevState) {
    
        const { todo } = this.props;
        if(!prevState.editing && this.state.editing){
            // editing 값이 false -> true 로 전환 될 때
            this.setState({
                todoText: todo.todo,
                idx: todo.idx
            })
        }
        else if(prevState.editing && !this.state.editing){
            // editing 값이 true -> false 로 전환 될 때
            this.props.updateTodo(this.state.idx, this.state.todoText);
        }

    }

    // input에서 onChange이벤트가 발생 될 때 호출  
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            todoText: value
        })        
    }

    render(){
        const {
            todo,
            delTodo,
            updateTodo
        } = this.props;
        const {editing, isChecked} = this.state;

        if(!editing){
            return(
                <div className='Info'>
                    <span className='TodoIdx'>{todo.idx}</span>
                    <input type="checkbox"  onClick={this.handleToggleEdit} id='isChecked' className='checkbox' />
                    <span className={`TodoText${isChecked ? 'Checked' : '' }`}>
                        {todo.todo}
                    </span>
                    <div className='SpanBtnDiv'>
                        <span className='SpanBtn' onClick={this.handleToggleEdit} id='editing'> 수정 |</span>
                        <span className='SpanBtn' onClick={()=>{delTodo(todo.idx)}}> 삭제</span>
                    </div>
                </div>
            )
        }

        if(editing){
            return(
                <div className='Info'>
                    <span className='TodoIdx'>{todo.idx}</span>
                    <input 
                        className='EditText'
                        type='text' 
                        value={this.state.todoText}
                        onChange={this.handleChange}
                    />
                    <div className='SpanBtnDiv'>
                        <span className='SpanBtn' onClick={this.handleToggleEdit} id='editing'> 확인 |</span>
                        <span className='SpanBtn' onClick={()=>{delTodo(todo.idx)}}> 삭제</span>
                    </div>
                </div>
            )
        }
    }
}

export default TodoInfo;