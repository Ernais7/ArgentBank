import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import SignIn from "../pages/Sign-in/sign-in";
import User from "../pages/User/user";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
