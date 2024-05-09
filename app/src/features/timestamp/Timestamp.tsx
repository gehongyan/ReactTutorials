import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { getTimestampAsync, selectTimestamp } from "./timestampSlice.ts";
import { useCallback, useEffect, useMemo, useState } from "react";

function Timestamp() {
  const [localTimestamp, setLocalTimestamp] = useState(0);
  const state = useAppSelector(selectTimestamp)
  const dispatch = useAppDispatch()

  function updateTimestamp() {
    setLocalTimestamp(new Date().getTime());
    dispatch(getTimestampAsync());
  }

  useEffect(() => {
    updateTimestamp();
  }, []);

  const onButtonClick = useCallback(() => {
    updateTimestamp();
  }, []);

  const timestampDiff = useMemo(() => {
    return state.cloudTimestamp ? `${localTimestamp - state.cloudTimestamp}ms` : "N/A";
  }, [state.cloudTimestamp, localTimestamp]);

  return (
    <>
      <div>
        <p>Local timestamp: {localTimestamp}</p>
        <p>Cloud timestamp: {state.cloudTimestamp ?? '...'}</p>
        <p>Difference: {timestampDiff}</p>
      </div>
      <button onClick={onButtonClick}>
        Get timestamp
      </button>
    </>
  );
}

export default Timestamp;
