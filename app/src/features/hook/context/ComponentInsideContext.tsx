import { useContext } from "react";
import { MyContext } from "./MyContext.tsx";

export function ComponentInsideContext() {
  // 使用 useContext 访问 Context
  const contextValue = useContext(MyContext);
  return <p>{contextValue}</p>;
}
