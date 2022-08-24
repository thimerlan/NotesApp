import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export const Table = ({ todo, RemoveTodo, disabledArea, SuccessTodo }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th> Date </th>
            <th> Title</th>
            <th> Description</th>
            <th>Completed</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence initial={false} exitBeforeEnter={false}>
            {todo.map((todo) => {
              return (
                <motion.tr
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.1, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  key={todo.id}
                >
                  <td className="time">{todo.Time}</td>
                  <td className={todo.success ? "line" : ""}>
                    <textarea
                      maxLength={25}
                      disabled={todo.disabled ? false : true}
                    >
                      {todo.title}
                    </textarea>
                  </td>
                  <td className={todo.success ? "line" : ""}>
                    <textarea
                      maxLength={55}
                      disabled={todo.disabled ? false : true}
                    >
                      {todo.describe}
                    </textarea>
                  </td>
                  <td>
                    <button
                      className={todo.success ? "success" : "unsuccess"}
                      onClick={() => SuccessTodo(todo.id)}
                    >
                      <b>&#10004;</b>
                    </button>
                  </td>
                  <td>
                    <button
                      className={todo.disabled ? "edit-act" : "edit"}
                      onClick={() => disabledArea(todo.id)}
                    >
                      <b>&#9998;</b>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => RemoveTodo(todo.id)}>
                      &#10008;
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};
// &#9998;  <b>&#10004;</b>
