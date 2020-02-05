import React from "react";
import Text from "./atoms/text";
import InputBox from "./atoms/inputBox";
import Todo from "./molecules/todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Text text="Todos" type="title" />
      <InputBox placeholder="What needs to be done?" />
      <Todo />
    </div>
  );
}

export default App;
