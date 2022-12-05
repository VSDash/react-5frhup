import React, { useState, useContext, useEffect, useMemo } from 'react';
import './style.css';
const CountContext = React.createContext();
export default function App() {
  const [counts, setCounts] = useState({ A: 0, B: 0, C: 0 });
  const [count, setCount] = useState(0);
  console.log('App');
  return (
    <CountContext.Provider value={counts}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
        <button
          onClick={() => setCounts((prev) => ({ ...prev, A: prev.A + 1 }))}
        >
          Plus A
        </button>
        <button
          onClick={() => setCounts((prev) => ({ ...prev, B: prev.B + 1 }))}
        >
          Plus B
        </button>
        <button
          onClick={() => setCounts((prev) => ({ ...prev, C: prev.C + 1 }))}
        >
          Plus C
        </button>
        <div>{count}</div>
        <ComponentA />
      </div>
    </CountContext.Provider>
  );
}

const ComponentA = React.memo(({ children }) => {
  const { A } = useContext(CountContext);
  console.log('A');
  return (
    <div
      style={{ borderStyle: 'solid', borderColor: 'red', borderWidth: '1px' }}
    >
      Comp A <div>{A}</div>
      <ComponentB />
    </div>
  );
});
const ComponentB = ({ children }) => {
  const { B } = useContext(CountContext);
  console.log('B');
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: '1px',
        margin: '20px',
      }}
    >
      Comp B<div>{B}</div> <ComponentC />
    </div>
  );
};
const ComponentC = ({ children }) => {
  const { C } = useContext(CountContext);
  console.log('C');
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: '1px',
        margin: '20px',
      }}
    >
      Comp C<div>{C}</div>
    </div>
  );
};
