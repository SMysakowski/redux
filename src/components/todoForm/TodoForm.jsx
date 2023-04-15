import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../store/todoReducer";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Type your todo"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        <span>+</span>
      </button>
    </div>
  );
}
