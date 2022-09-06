import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumberReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Increment-Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div>
        <a title="Decrement" onClick={() => dispatch(decNumber())}>
          <span>-</span>
        </a>
        <input type="text" value={myState} readOnly />
        <a title="Increment" onClick={() => dispatch(incNumber(5))}>
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
