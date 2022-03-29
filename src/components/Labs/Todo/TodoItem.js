import React from "react";
const TodoItem = ({todo}) => {
    return(
        <li key={todo.title}>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;
