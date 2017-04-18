/**
 * Created by everbudding on 17.4.17.
 */
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import createStore from './CreateStores';

class TodoDraftStore extends ReduceStore {

    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return createStore('TodoDraftStore','');
    }

    reduce(state, action) {

        localStorage.setItem("TodoDraftStore", JSON.stringify(state));

        switch (action.type) {
            case TodoActionTypes.UPDATE_DRAFT:
                // Do nothing for now, we will add logic here soon!
                return action.text;

            case TodoActionTypes.ADD_TODO:
                return '';

            default:
                localStorage.setItem("TodoDraftStore", JSON.stringify(state));
                return state;
        }
    }
}

export default new TodoDraftStore();