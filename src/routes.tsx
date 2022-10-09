import React from "react";
import { RouteObject } from "react-router-dom";
import { NotFoundPage } from "./pages/error/NotFoundPage";
import { HomePage } from "./pages/home/HomePage";
import { PostPage } from "./pages/post/PostPage";

export const routes: RouteObject[] = [
  { 
    path: "*", 
    element: <NotFoundPage />,
  },
  { 
    path: "/", 
    element: <HomePage />,
  },
  {
    path: "/:postId-:postSlug",
    element: <PostPage />,
  }
]