import "./App.css";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
// import CreatePost from '../Components/CreatePost';
// import PostList from '../Components/PostList';
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
