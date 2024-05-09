import { MyContext } from "./MyContext.tsx";
import { ComponentInsideContext } from "./ComponentInsideContext.tsx";

function Context() {
  return (
    // 使用 MyContext.Provider 提供 Context
    <MyContext.Provider value="Hello, Context!">
      <ComponentInsideContext/>
    </MyContext.Provider>
  );
}

export default Context;
