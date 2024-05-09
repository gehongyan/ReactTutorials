import { useState, useMemo } from 'react';

function Memo() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');

  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  const expensiveWithoutMemo = () => {
    console.log('compute without memo');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  };

  return (
    <div>
      <h4>{count}-{expensive}</h4>
      <h4>{count}-{expensiveWithoutMemo()}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={event => setVal(event.target.value)} />
      </div>
    </div>
  );
}

export default Memo;
