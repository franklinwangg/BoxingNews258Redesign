import React, { createContext, useState, useEffect } from "react";

// import data from "../fakeData/data.json";
// import data from "/fakeData/data.json";

export const UserContext = createContext();

const VITE_SERVER_ORIGIN = import.meta.env.VITE_SERVER_ORIGIN;

const UserProvider = ({ children }) => {
  // 1) fetch the data
  // 2) for each element in data, load it into a useState
  // 3) put the useState into the useContext with createContext
  // 4) wrap the UserContext around necessary elements in app

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
