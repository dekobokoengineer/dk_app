// src/App.js
import React from 'react';
import './App.css';
import MyComponent from './MyComponent'; // パスが正しいことを確認

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reactアプリケーションへようこそ！</h1>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
