import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import database from "./constants";
import Debug from "./Components/Debug/Debug";
import TextEditor from "./Components/TextEditor/TextEditor";
import ViewPost from "./Components/ViewPost/ViewPost";
import Logout from "./Components/Logout/Logout";
import PostCreated from "./Components/PostCreated/PostCreated";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/Homepage"} />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Debug" element={<Debug />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/TextEditor" element={<TextEditor />} />
        <Route path="/viewpost/:postName" element={<ViewPost />} />
        <Route path="/PostCreated" element={<PostCreated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
