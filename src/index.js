import React, { StrictMode, createContext } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const MyContext = createContext();

root.render(
  <StrictMode>
    <MyContext.Provider value={0}>
      <App />
    </MyContext.Provider>
  </StrictMode>
);
