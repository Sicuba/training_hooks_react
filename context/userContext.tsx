"use client"
import { createContext, useState } from "react";

export const UserContext = createContext({ name: "", email: "", ChangeName:()=>{}, ChangeEmail:()=>{}});

const UserContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [name, setName] = useState<string>("Josevaldo Sicuba");
  const [email, setEmail] = useState<string>("josevaldosicuba@gmail.com");
  function ChangeName():void{
    setName("Sicuba")
  }
  function ChangeEmail():void{
    setEmail("sicuba@gmail.com")
  }
  return (
    <UserContext.Provider value={{name, email, ChangeName,ChangeEmail}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
