/**
 * Created by everbudding on 17.4.17.
 */
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';
import createStore from './CreateStores';
import {createTodoStore} from './CreateStores';


class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return createTodoStore('TodoStore', Immutable.OrderedMap());
    }

    reduce(state, action) {

        localStorage.setItem("TodoStore", JSON.stringify(state));

        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                // Do nothing for now, we will add logic here soon!
                const inputText = action.text.trim();
                const isInputTextUnique = ![...state.values()].map(todo => todo.text).includes(inputText);
                if (!inputText) {
                    return state;
                }
                if ((inputText) && (isInputTextUnique)) {
                    const id = Counter.increment(state.size);
                    return state.set(id, new Todo({
                        id,
                        text: inputText,
                        complete: false,
                    }));
                }

            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);

            case TodoActionTypes.TOGGLE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete),
                );

            case TodoActionTypes.CLEAR_COMPLITED_TODOS:
                return state.filter(todo => !todo.complete);

            case TodoActionTypes.TOGGLE_ALL_TODOS:
                console.log(state);
                const allComplete = state.every(todo => todo.complete);
                return state.map(
                    todo => todo.set('complete', !allComplete)
                );

            default:
                return state;
        }
    }
}

export default new TodoStore();