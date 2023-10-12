import React, { useRef } from 'react';

const NewTodo = () => {
  const toDoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHanlder = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = toDoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitHanlder}>
      <label htmlFor="text">To Do Text</label>
      <input type="text" id="text" ref={toDoTextInputRef} required />
      <button>Add To Do</button>
    </form>
  );
};

export default NewTodo;
