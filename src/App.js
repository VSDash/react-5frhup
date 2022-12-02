import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ComponentA />
    </div>
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
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: '1px',
        margin: '20px',
      }}
    >
      Comp C<div>{children}</div>
    </div>
  );
};
