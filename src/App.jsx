import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsProvider from "./contexts/PostsProvider";

const App = () => {
  return (
    <BrowserRouter>
      {/* Routes */}
      <PostsProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
        </Routes>
      </PostsProvider>
    </BrowserRouter>
  );
};

export default App;
