import { UserContext } from "@/context/userContext";
import { useContext, useEffect, useRef, useState } from "react";

export const RenderFc = () => {
  const [count, setCount] = useState<number>(0);
  const render = useRef<number>(1);
  const handleChangeCount = (): void => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    render.current = render.current + 1;
  });
  const { email, name, ChangeEmail, ChangeName } = useContext(UserContext);
  return (
    <>
      <p>Context: {name}</p>
      <p>Context: {email}</p>
      <p>Renderizações: {render.current}</p>
      <button onClick={handleChangeCount} className="p-2 bg-red-300 rounded-md">
        Increment: {count}
      </button>
      <button
        onClick={() => {
          ChangeEmail();
          ChangeName();
        }}
        className="p-2 bg-red-300 rounded-md mt-5"
      >
        Alter Context
      </button>
    </>
  );
};
