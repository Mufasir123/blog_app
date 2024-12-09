import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./roots/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { CreatePostAction } from "./Components/CreatePost.jsx";
import PostList, { postLoader } from "./Components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader:postLoader},
      { path: "/create-post", element: <CreatePost />, action:CreatePostAction },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
