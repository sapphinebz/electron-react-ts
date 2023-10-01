import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { interval } from "rxjs";
import { tap } from "rxjs/operators";
import { useSubscription } from "./utils/use-subscription";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const observable = React.useMemo(
    () => interval(1000).pipe(tap(setCount)),
    []
  );
  useSubscription(observable);

  return (
    <>
      <h2>Hello from React! {count}</h2>
      <div>
        <button onClick={(value) => console.log(value)}>click</button>
      </div>
    </>
  );
};

function render() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App></App>);
}

render();
