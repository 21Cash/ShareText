import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Debug from "./Components/Debug/Debug";
import TextEditor from "./Components/TextEditor/TextEditor";
import ViewPost from "./Components/ViewPost/ViewPost";
import Logout from "./Components/Logout/Logout";
import PostCreated from "./Components/PostCreated/PostCreated";
import Footer from "./Components/Footer/Footer";
import ViewProfile from "./Components/ViewProfile/ViewProfile";
import { Me } from "./Components/Me/Me";
import { firebaseapp } from "./constants";
import ViewCollection from "./Components/ViewCollection/ViewCollection";
import CollectionEditor from "./Components/CollectionEditor/CollectionEditor";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Navbar />

        {/* Add padding or margin to create space for the Navbar */}
        <div style={{ paddingTop: "70px", paddingBottom: "20px" }}>
          <Routes>
            <Route path="/" element={<Navigate to={"/Homepage"} />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Debug" element={<Debug />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/TextEditor" element={<TextEditor />} />
            <Route path="/viewpost/:postName" element={<ViewPost />} />
            <Route path="/editpost/:postName" element={<TextEditor />} />
            <Route path="/profile/:username" element={<ViewProfile />} />
            <Route path="/PostCreated" element={<PostCreated />} />
            <Route path="/Me" element={<Me />} />
            <Route
              path="view-collection/:username/:collectionName"
              element={<ViewCollection />}
            />

            <Route
              path="/CollectionEditor/:collectionName"
              element={<CollectionEditor />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
