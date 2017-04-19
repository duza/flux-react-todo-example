/**
 * Created by everbudding on 18.4.17.
 */
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import createStore from './CreateStores';


class TodoFilterStore extends ReduceStore{
    constructor(){
        super(TodoDispatcher);
    }

    getInitialState(){
        return 'all';
    }

    reduce(state, action){

        switch (action.type){
            case TodoActionTypes.SHOW_ALL_TODOS:
                return 'all';

            case TodoActionTypes.SHOW_ACTIVE_TODOS:
                return 'active';

            case TodoActionTypes.SHOW_COMPLETED_TODOS:
                return 'completed';

            default:
                return state;

        }

    }
}

export default new TodoFilterStore();