import BlogList from "./views/BlogList";
import Blog from "./components/Blog";
import User from "./components/User";
import About from "./views/About";
import Login from "./views/Login";
import UserList from "./views/UserList";
import Header from "./components/Header";
import BlogDetails from "./views/BlogDetails";
import UserDetails from "./views/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const blogs = [
    {
      id: 1,
      title: "The Art of Coding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
      likes: 20,
    },
    {
      id: 2,
      title: "Exploring React Hooks",
      content: "React Hooks provide a new way to manage state and effects...",
      author: "Jane Smith",
      likes: 15,
    },
    {
      id: 3,
      title: "Tips for Web Development Beginners",
      content: "Starting a career in web development? Here are some useful tips...",
      author: "Alice Johnson",
      likes: 12,
    },
    {
      id: 4,
      title: "The Beauty of JavaScript",
      content: "JavaScript is a versatile language used for web development...",
      author: "Bob Brown",
      likes: 25,
    },
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe123",
      numberOfBlogs: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith456",
      numberOfBlogs: 12,
    },
    {
      id: 3,
      name: "Alice Johnson",
      username: "alicej",
      numberOfBlogs: 5,
    },
    {
      id: 4,
      name: "Bob Brown",
      username: "bobbrown",
      numberOfBlogs: 9,
    },
    {
      id: 5,
      name: "Ella Davis",
      username: "ellad",
      numberOfBlogs: 10,
    },
  ];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <BlogList blogs={blogs} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/users" element={<UserList users = {users}/>} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/users/:id" element={<UserDetails users={users}/>} />
        <Route path="/blogs/:id" element={<BlogDetails blogs={blogs}/>} />
      </Routes>
    </Router>
  );
};

export default App;
