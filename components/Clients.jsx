"use client";

import Link from "next/link";
import { createContext, useContext, useState } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutButton = () => {
  const { user } = useContext(Context);

  const logoutHandler = () => {
    alert("Logout");
  };

  return (
    <>
      {user.id ? (
        <button className="btn" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </>
  );
};

export const TodoButton=({id,iscompleted})=>{

  const deleteHandler=(id)=>{
    alert(`Deleted ${id}`)
  }

  return (
    <>
    <input type="checkbox" checked={iscompleted}/>
    <button className="btn" onClick={()=>deleteHandler(id)}>Delete</button>
    </>
  )
}