// src/App.js
import React from 'react';
import UserComponent from './components/userComponent';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux Persist + Thunk Demo</h1>
      <UserComponent />
    </div>
  );
}

export default App;
