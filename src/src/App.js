import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
