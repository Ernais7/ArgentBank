import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "../../redux/Slices/userSlice";
import "./edit.css";

function EditUser({ userName, firstName, lastName, onCancel }) {
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState(userName);

  const token = localStorage.getItem("token");

  const updateUserOnServer = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName: newUserName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update username");
      }

      const updatedData = await response.json();
      return updatedData.body;
    } catch (error) {
      console.error("Error updating username:", error);
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend mise à jour
      const updatedUserData = await updateUserOnServer();

      dispatch(updateName(updatedUserData));

      onCancel();
    } catch (error) {
      console.error("Failed to update username:", error);
    }
  };

  return (
    <form className="formEdit" onSubmit={handleFormSubmit}>
      <label className="textEdit" htmlFor="userName">
        User name:
      </label>
      <input className="inputEdit" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} required />
      <label className="textEdit" htmlFor="firstName">
        First name:
      </label>
      <input className="inputEdit" type="text" value={firstName} disabled />
      <label className="textEdit" htmlFor="lastName">
        Last name:
      </label>
      <input className="inputEdit" type="text" value={lastName} disabled />
      <div className="button">
        <button className="buttonEdit" type="submit">
          Save
        </button>
        <button className="buttonEdit" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditUser;
