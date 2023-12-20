import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoList = () => {
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore();
  const [todoValue, setTodoValue] = useState("");

  const handleChange = ({ target: { value } }) => {
    setTodoValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <div>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo"
          name="new-todo"
          value={todoValue}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "unset",
              }}
            >
              {todo.text}{" "}
            </span>
            {!todo.isCompleted ? (
              <button onClick={() => completeTodo(todo.id)}>✅</button>
            ) : null}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
