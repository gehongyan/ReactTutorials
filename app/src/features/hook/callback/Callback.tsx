import WithUseCallback from "./WithUseCallback.tsx";
import WithoutUseCallback from "./WithoutUseCallback.tsx";

function Callback() {
  return (
    <>
      <WithUseCallback />
      <WithoutUseCallback />
    </>
  );
}

export default Callback;
