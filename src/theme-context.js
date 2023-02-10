import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#ffffff',
  },
  dark: {
    foreground: '#000000',
    background: '#ffffff',
  },
};

export const ThemeContext = React.createContext({ theme: themes.dark });
