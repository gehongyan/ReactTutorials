import { useCallback, useState } from "react";

function WithUseCallback() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('');

  const incrementCallback = useCallback(() => {
    const increment = () => {
      setCount(count + 1);
    };
    // 创新创建 increment 函数时会打印 increment 函数
    console.log('With useCallback: ', increment);
    return increment;
  }, [count]);

  return (
    <div>
      Count: {count}
      <button onClick={incrementCallback}>+1</button>
      <input value={val} onChange={event => setVal(event.target.value)}/>
    </div>
  );
}

export default WithUseCallback;
