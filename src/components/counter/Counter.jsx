import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const obj = {
    a: 1,
    b: 2,
    c: {
      d: 1,
    },
  };

  const obj2 = {
    ...obj,
    c: {
      ...obj.c,
      d: 2,
    },
  };

  console.log("obj1", obj);
  console.log(obj2);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
