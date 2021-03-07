import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/Blog/AllPosts.js";
import OnePost from "./components/Blog/OnePost.js";
import Navbar from "./components/Navbar/Navbar.js";
import Projects from "./components/Webpages/projects.js";
import Aboutme from "./components/Webpages/aboutme.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route component={Aboutme} path="/" exact />
        <Route component={Projects} path="/projects" exact />
        <Route component={AllPosts} path="/allposts" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}
export default App;