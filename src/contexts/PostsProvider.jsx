import React, { createContext, useState, useEffect } from "react";

// import data from "../fakeData/data.json";
// import data from "/fakeData/data.json";

export const PostsContext = createContext();

const VITE_SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;
console.log(`VITE SERVER ORIGIN : ${VITE_SERVER_ORIGIN}`);

const PostsProvider = ({ children }) => {
  // 1) fetch the data
  // 2) for each element in data, load it into a useState
  // 3) put the useState into the useContext with createContext
  // 4) wrap the postsContext around necessary elements in app

  const [posts, setPosts] = useState([]);
  const fetchData = () => {
    fetch(`${VITE_SERVER_ORIGIN}/posts`)
      .then((promise) => {
        return promise.json();
      })
      .then((dataJson) => {
        setPosts(JSON.parse(dataJson));
      });
  };

  useEffect(() => {
    fetchData();
    // postsContext. // add the posts into this context
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
