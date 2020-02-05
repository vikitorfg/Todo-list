import React from "react";
import Text from "./atoms/text";
import InputBox from "./atoms/inputBox";
import Todo from "./molecules/todo";
import ActionMenu from "./atoms/actionMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Text text="Todos" type="title" />
      <InputBox placeholder="What needs to be done?" />
      <ActionMenu />
      <Todo />
    </div>
  );
}

export default App;
