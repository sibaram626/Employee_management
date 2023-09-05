import React, {useState} from "react";

const Task = ({ task, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
  
    const handleEdit = () => {
        setIsEditing(true);
      };
      const handleSave = () => {
        if (editedText.trim() !== "") {
          onEdit(task.id, editedText);
        }
        setIsEditing(false);
      };
    return (
        <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => onDelete(task.id)}>Delete Employee</button>
          <button onClick={handleEdit}>Edit Employee</button>
        </>
      )}
    </div>
  );
};

export default Task;
