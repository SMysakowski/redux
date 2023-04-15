import { useDispatch, useSelector } from "react-redux";

import { todosSelector, deleteTodo, toggleTodo } from "../../store/todoReducer";

export default function TodoList() {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button>
              <span onClick={() => handleDelete(todo.id)}>-</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
