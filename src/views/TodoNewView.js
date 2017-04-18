/**
 * Created by everbudding on 17.4.17.
 */
import React from 'react';

function TodoNew(props) {
    const onChange = (event) => props.onDraftTodo(event.target.value);
    const ENTER_KEY_CODE = 13;
    const keyPress = (event) => {
        if (event.which === ENTER_KEY_CODE) {
            props.onAddTodo(props.draft);
        }
    };
        return (
            <div className="View">
                <input className="input"
                       id="new-todo"
                       value={props.draft}
                       onChange={onChange}
                       onKeyPress={keyPress}
                       autoFocus={true}
                />
            </div>
        );
}


export default TodoNew;