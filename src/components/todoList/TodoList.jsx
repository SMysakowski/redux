import { useGetTodosQuery } from "../../services/api";

export default function TodoList() {
  const { data } = useGetTodosQuery();

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
            <button>
              <span>-</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
