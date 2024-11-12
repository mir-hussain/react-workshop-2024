import { useState } from "react";
import Child from "./Child";
import GrandChild from "./GrandChild";

export default function CompositeDemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Child
        grandChild={
          <GrandChild
            count={count}
            button={
              <button onClick={() => setCount(count + 1)}>increment</button>
            }
          />
        }
      />
    </div>
  );
}

//* Solving props drilling
//* Composition with server and client
