import { useRef } from 'react';

function Ref() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // 当按钮被点击时，使文本框获取焦点
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default Ref;
