/**
 * Created by everbudding on 17.4.17.
 */

import React from 'react';
import TodoNew from "./TodoNewView"

function AppView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>todos</h1>
            <TodoNew {...props} />
        </header>
    );
}

function Main(props) {
    if (props.todos.size === 0) {
        return null;
    }
    return (
        <section id="main">
            <input checked={props.allComplete}
                     id="toggle-all"
                     type="checkbox"
                   onChange={(event) => props.toggleAllTodos(event.target.checked)}

            />
                <label htmlFor="toggle-all">Mark all as complete</label>

            <ul id="todo-list">
                {[...props.todos.values()].reverse().map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => props.onToggleTodo(todo.id)}
                            />
                            <label>
                                {todo.text}
                            </label>
                            <button
                                className="destroy"
                                onClick={() => props.onDeleteTodo(todo.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }

    const remaining = props.todos.filter(todo => !todo.complete).size;
    const complited = props.todos.size - remaining;
    const phrase = remaining === 1 ? ' item left' : ' items left';
    return (
      <footer id="footer">
        <span id="todo-count">
            <strong>
                {remaining}
            </strong>
              {phrase}
        </span>
        <button id="clear-completed"
                onClick={props.onDeleteCompletedTodos}>
            Delete {complited} complited todos
        </button>
      </footer>
    );
}

export default AppView;