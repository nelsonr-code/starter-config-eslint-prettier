import './App.css';
import { useState } from 'react';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <MyComponent
        pr1={'o'}
        pr2={'6'}
      />
    </div>
  );
}

export default App;
