import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setTodoStatus, addTodo, removeTodo
} from './todoListSlice';
import styles from './TodoList.module.css';

export function TodoList() { 
  //React Hooks
  const [todoDescription, setTodoDescription] = useState("");
  //React Redux Hooks
  const todoList = useAppSelector(state => state.todolist);
  const dispatch = useAppDispatch(); 

  return (
    <div>
      <div className={styles.row}>
        <input
        className={styles.row}
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(addTodo(todoDescription));
            setTodoDescription("");}}
        >
          Add new task
        </button>
      </div>
      <div className={styles.row}>
        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
       {/*  <span className={styles.value}>{count}</span> */}
        {/* <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button> */}
      </div>

        {todoList.map((todo) => (
          <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                    dispatch(
                      setTodoStatus({ completed: !todo.completed , id: todo.id })
                    );
                }}
              />
              {todo.description}
              <button
                className={styles.button}
                onClick={() => dispatch(removeTodo(todo.id))}
                >
                DELETE
              </button> 
          </div>
        ))}

    </div>
  );
}
