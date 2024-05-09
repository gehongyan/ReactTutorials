import { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);

  // 使用 useEffect 来更新 document 的 title
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // 返回的函数会在组件卸载或者下一次 useEffect 执行前被调用
    return () => {
      document.title = 'React App';
    };
  }, [count]); // 当 count 变化时，重新执行副作用

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Effect;
