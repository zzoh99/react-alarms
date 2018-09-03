import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as todoAction } from '../../reducer/todo'
import Todo from './presenter';

function mapStateToProps(state){ // state복사
    const { todoList } = state;
    return {
        todoList
    };
}

function mapDispatchToProps(dispatch){
    return{
        addTodo: bindActionCreators(todoAction.addTodo, dispatch),
        delTodo: bindActionCreators(todoAction.delTodo, dispatch),
        updateTodo: bindActionCreators(todoAction.updateTodo, dispatch),
        getTodo: bindActionCreators(todoAction.getTodo, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);