import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import database from "./constants";
import Debug from "./Components/Debug/Debug";
import TextEditor from "./Components/TextEditor/TextEditor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/Homepage"} />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Debug" element={<Debug />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/PostText" element={<TextEditor />} />
      </Routes>
      <Debug />
    </BrowserRouter>
  );
}

export default App;
