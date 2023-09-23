import { IncrementButton, DecrementButton } from "./CounterBtn";
import { CounterCount } from "./CounterCount";

const Counter = () => {
  return (
    <div>
      <div>
        <IncrementButton />
        <CounterCount />
        <DecrementButton />
      </div>
    </div>
  );
};

export default Counter;
