---
title: "React with Redux"
date: "2023-05-24"
author: "ozan ocak"
tags: ["React", "redux", "rtk"]
subtitle: "Creating todo app using React and Redux Toolkit ...."
---

Step 1: Set up your project

Create a new React app using `create-react-app`:

```
npx create-react-app react-toolkit-todo
```

Next, install the following dependencies:

```
npm install --save @reduxjs/toolkit react-redux
```

Step 2: Define the Redux store

Create a new file called `src/store.js` and add the following code:

```jsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

This creates an empty Redux store.

Step 3: Define the todo slice

Create a new file called `src/todoSlice.js` and add the following code:

````jsx
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo} = todoSlice.actions;

Step 4: Add the todo form component

Create a new file called `src/TodoForm.js` and add the following code:

```jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from './todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodo({
      id: nanoid(),
      text,
      completed: false,
    }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
````

This component renders a form with an input field and a button. When the form is submitted, a new todo item is added to the Redux store using the `addTodo` action creator.

Step 5: Add the todo list component

Create a new file called `src/TodoList.js` and add the following code:

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodoimport React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
```

This component renders a list of todo items and a checkbox to mark them as completed. When a todo item is removed, the `removeTodo` action creator is dispatched. When a todo item is toggled, the `toggleTodo` action creator is dispatched.

Step 6: Render the todo app

Update the `App.js` file to render the todo app:

````jsx
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

```jsx
function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
````

This renders the todo form and list components in the app.
