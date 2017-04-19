/**
 * Created by everbudding on 18.4.17.
 */

'use strict';

import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoEditStore extends ReduceStore{
    constructor(){
        super(TodoDispatcher);
    }

    getInitialState(){
        return {id: null, text:''};
    }

    reduce(state, action){
        switch (action.type) {

            case TodoActionTypes.START_EDITING_TODO:
            // Don't add todos with no text.
            return state.set({
                id: action.id,
                text: action.text,
            });

            default:
                return state;
        }
    }
}