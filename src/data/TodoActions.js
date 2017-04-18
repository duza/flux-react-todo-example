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

    onShowAllTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.SHOW_ALL_TODOS,
        });
    },

    onShowActiveTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.SHOW_ACTIVE_TODOS,
        });
    },

    onShowCompletedTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.SHOW_COMPLETED_TODOS,
        });
    },


    startEditingTodo() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.START_EDITING_TODO,
        });
    },

    stopEditingTodo() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.STOP_EDITING_TODO,
        });
    },

    editTodo() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.EDIT_TODO,
        });
    },
};

export default Actions;