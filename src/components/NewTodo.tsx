import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const toDoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHanlder} className={classes.form}>
      <label htmlFor="text">To Do Text</label>
      <input type="text" id="text" ref={toDoTextInputRef} required />
      <button>Add To Do</button>
    </form>
  );
};

export default NewTodo;
