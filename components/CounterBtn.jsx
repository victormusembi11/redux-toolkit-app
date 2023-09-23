import { useDispatch } from "react-redux";

import { increment, decrement } from "@/lib/features/counter/counterSlice";

export function IncrementButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(increment())}>Incrememnt</button>;
}

export function DecrementButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrement())}>Decrement</button>;
}
