import React, { useEffect, useState, useCallback } from "react"; // Import useCallback
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import EditUser from "../../components/Edit/edit";
import Account from "../../components/Account/account";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, firstName, lastName } = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isEditing, setIsEditing] = useState(false);

  const getUser = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, user is not authenticated.");
      navigate("/sign-in");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }, [navigate]);

  useEffect(() => {
    if (!isLoggedIn) {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/sign-in");
      } else {
        getUser()
          .then((userData) => {
            dispatch(setUser(userData));
          })
          .catch((error) => console.error("Error:", error));
      }
    } else {
      getUser()
        .then((userData) => {
          dispatch(setUser(userData));
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [isLoggedIn, navigate, dispatch, getUser]);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          {isEditing ? "Edit user info" : "Welcome back"}
          <br />
          {isEditing ? (
            <EditUser userName={userName} firstName={firstName} lastName={lastName} onCancel={handleCancelEdit} />
          ) : (
            <>
              {userName}!
              <br />
              <button className="edit-button" onClick={handleEditClick}>
                Edit Name
              </button>
            </>
          )}
        </h1>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
}

export default User;
