import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodos,getTodosByVisibilityFilter } from "../redux/selectors";



const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : "No todos, yay!"}
    </ul>
);
/*
const mapStateToProps = state => {
    console.log(JSON.stringify(state));
    const { byIds, allIds } = state.todos || {};
    const todos =
        allIds && allIds.length
            ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
            : null;
    console.log(JSON.stringify(todos));

    return { todos };
};

export default connect(mapStateToProps)(TodoList);


const mapStateToProps = state => {
    const { visibilityFilter } = state
    const todos = getTodosByVisibilityFilter(state, visibilityFilter)
    return { todos }
}

export default connect(mapStateToProps)(TodoList)


export default connect(state => ({ todos: getTodos(state) }))(TodoList);
*/

export default connect(state => ({ todos: getTodosByVisibilityFilter(state, state.visibilityFilter) }))(TodoList);

