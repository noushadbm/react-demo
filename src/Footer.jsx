import React from 'react';
import { ThemeContext } from './theme-context';

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div
          className="footer-box"
          style={{ backgroundColor: theme.background, color: theme.foreground }}
        >
          <div>This id dveloped by Me!</div>
          <div>--This is footer--</div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Footer;
