import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import timestampReducer from '../features/timestamp/timestampSlice.ts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    timestamp: timestampReducer,
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>

// 推断出类型: { counter: CounterState }
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
