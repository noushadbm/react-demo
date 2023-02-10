import React from 'react';
import './style.css';
import Post from './Post';
import { ThemeContext, themes } from './theme-context';

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div>
        <h1>Hello World!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Post />
      </div>
    </ThemeContext.Provider>
  );
}
