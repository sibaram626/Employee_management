import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new employee..."
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddTask;
