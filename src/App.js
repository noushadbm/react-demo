import React from "react";
import "./style.css";
import Comment from './Comment';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Comment auther="Me"/>
    </div>
  );
}
