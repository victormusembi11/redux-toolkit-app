import { useSelector } from "react-redux";

export function CounterCount() {
  const count = useSelector((state) => state.counter.value);
  return <span>{count}</span>;
}
