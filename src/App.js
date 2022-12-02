import React, { useState, useContext, useEffect } from 'react';
import './style.css';
const CountContext = React.createContext();
export default function App() {
  const [count, setCount] = useState('Sherlock');
  return (
    <CountContext.Provider value={count}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <
        <ComponentA />
      </div>
    </CountContext.Provider>
  );
}

const ComponentA = ({ children }) => {
  return (
    <div
      style={{ borderStyle: 'solid', borderColor: 'red', borderWidth: '1px' }}
    >
      Comp A <ComponentB />
    </div>
  );
};
const ComponentB = ({ children }) => {
  useEffect(() => {
    console.log('rerender');
  }, []);
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: '1px',
        margin: '20px',
      }}
    >
      Comp B <ComponentC />
    </div>
  );
};
const ComponentC = ({ children }) => {
  const user = useContext(CountContext);
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: '1px',
        margin: '20px',
      }}
    >
      Comp C<div>{user}</div>
    </div>
  );
};
