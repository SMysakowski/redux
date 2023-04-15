import useCounterStore from "../../store/zustand";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore((state) => state);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
