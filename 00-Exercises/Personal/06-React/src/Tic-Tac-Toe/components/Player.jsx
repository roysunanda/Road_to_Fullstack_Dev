import { useState } from "react";

export const Player = ({ playerName, playerSymbol, isActive }) => {
  const [newName, setNewName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const handleName = (event) => {
    // console.log(event);
    setNewName(event.target.value);
  };
  return (
    <li className={isActive ? "active" : null}>
      <span className='player'>
        {isEditing ? (
          <input type='text' required value={newName} onChange={handleName} />
        ) : (
          <span className='player-name'>{newName}</span>
        )}
        <span className='player-symbol'>{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
