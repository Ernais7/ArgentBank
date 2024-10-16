import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import SignIn from "../pages/Sign-in/sign-in";
import User from "../pages/User/user";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { useDispatch } from "react-redux";
import { setAuthFromStorage } from "../redux/Slices/authSlice";
import ProtectedRoute from "../components/ProtectedRoute/protectedRoute";
import "../style/index.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
