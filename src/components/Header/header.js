import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/argentBankLogo.webp";
import "./header.css";
import { logout } from "../../redux/Slices/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <div>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userName}
            </Link>{" "}
            <Link className="main-nav-item" to="/" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
