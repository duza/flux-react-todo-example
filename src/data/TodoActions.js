/**
 * Created by everbudding on 17.4.17.
 */
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },

    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        });
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        });
    },

    updateDraft(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.UPDATE_DRAFT,
            text,
        });
    },

    clearComplited() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.CLEAR_COMPLITED_TODOS,
        });
    },

    toggleAllTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_ALL_TODOS,
        });
    },

};

export default Actions;