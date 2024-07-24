import { UserContext } from "@/context/userContext";
import { useContext, useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = (): void => {
    setCount((prevState) => prevState + 1);
  };
  const {name, email} = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col gap-5 p-5">
      <p>Context: {name}</p>
      <p>Context: {email}</p>
        <p>Count: {count}</p>
        <button onClick={increment} className="p-2 bg-blue-300 rounded-md">
          Increment
        </button>
      </div>
    </>
  );
};
