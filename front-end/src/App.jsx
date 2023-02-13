import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import BlogaddedPage from "./Components/BlogaddedPage";
import SingleBlogPage from "./Components/SingleBlogPage";
import CategaryBlog from "./Components/CategaryBlog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signupPage" element={<SignupPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="BlogaddedPage" element={<BlogaddedPage />} />
        <Route path="SingleBlogPage" element={<SingleBlogPage />} />
        <Route path="CategaryBlog/:categary" element={<CategaryBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
