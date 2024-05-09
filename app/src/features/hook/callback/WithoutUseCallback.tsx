import { useState } from 'react';

function WithoutUseCallback() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  // 创新创建 increment 函数时会打印 increment 函数
  console.log('Without useCallback: ', increment);

  return (
    <div>
      Count: {count}
      <button onClick={increment}>+1</button>
      <input value={val} onChange={event => setVal(event.target.value)}/>
    </div>
  );
}

export default WithoutUseCallback;
