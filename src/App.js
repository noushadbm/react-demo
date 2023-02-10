import React from 'react';
import './style.css';
import Post from './Post';
import { ThemeContext } from './theme-context';

export default function App() {
  return (
    <ThemeContext.Provider value={2}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Post />
      </div>
    </ThemeContext.Provider>
  );
}
