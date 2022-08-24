import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./InputField";
import { Table } from "./Table";

function App() {
  const [letter, setLetter] = useState("Hello");
  const [describe, setDescribe] = useState("I am Dev");
  const [todo, setTodo] = useState([]);

  function CreateNotes() {
    if (letter.length) {
      setTodo([
        ...todo,
        {
          id: new Date().toISOString(),
          Time: new Date().toLocaleTimeString(),
          title: letter,
          describe,
          disabled: false,
          success: false,
        },
      ]);
      setLetter("");
      setDescribe("");
    }
  }
  function RemoveTodo(todoID) {
    setTodo(
      todo.filter((todo) => {
        if (todo.id !== todoID) {
          return todo;
        } else {
        }
      })
    );
  }
  function disabledArea(todoID) {
    setTodo(
      todo.map((item) => {
        if (item.id == todoID) {
          return {
            ...item,
            disabled: !item.disabled,
          };
        } else {
          return item;
        }
      })
    );
  }
  function SuccessTodo(todoID) {
    setTodo(
      todo.map((item) => {
        if (item.id == todoID) {
          return {
            ...item,
            success: !item.success,
          };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <div className="App">
        <InputField
          letter={letter}
          setLetter={setLetter}
          CreateNotes={CreateNotes}
          describe={describe}
          setDescribe={setDescribe}
        />
        <Table
          RemoveTodo={RemoveTodo}
          todo={todo}
          disabledArea={disabledArea}
          SuccessTodo={SuccessTodo}
        />
      </div>
    </>
  );
}

export default App;
