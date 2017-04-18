/**
 * Created by everbudding on 17.4.17.
 */
import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoFilterStore from '../data/TodoFilterStore';


function getStores() {
    return [
        TodoStore,
        TodoDraftStore,
        TodoFilterStore,
        ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        draft: TodoDraftStore.getState(),
        allComplete: TodoStore.getState().every(todo => todo.complete),
        filterGroup: TodoFilterStore.getState(),

        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onAddTodo: TodoActions.addTodo,
        onDraftTodo: TodoActions.updateDraft,
        onDeleteCompletedTodos: TodoActions.clearComplited,
        toggleAllTodos: TodoActions.toggleAllTodos,

        onShowAllTodos: TodoActions.onShowAllTodos,
        onShowActiveTodos: TodoActions.onShowActiveTodos,
        onShowCompletedTodos: TodoActions.onShowCompletedTodos,

        startEditingTodo: TodoActions.startEditingTodo,
        stopEditingTodo: TodoActions.stopEditingTodo,
        editTodo: TodoActions.editTodo,

    };
}

export default Container.createFunctional(AppView, getStores, getState);