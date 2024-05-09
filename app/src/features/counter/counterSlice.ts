import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { fetchCount } from './counterAPI'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

// 下面的函数被称为 thunk，它允许我们执行异步逻辑。它可以像常规操作一样被调度：`dispatch(incrementAsync(10))`。
// 这将会调用 thunk，并将 `dispatch` 函数作为第一个参数。然后可以执行异步代码，并可以调度其他操作。Thunk 通常用于发起异步请求。
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    // 我们返回的值将成为 `fulfilled` 操作的有效负载
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // `reducers` 字段可以让我们定义 reducers 并生成相关的 actions
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 中编写值变更的逻辑。
      // 但它实际上并不会改变状态，因为它使用了 Immer 库，该库会检测对“草稿状态”的更改，并基于这些更改生成一个全新的不可变状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // 使用 PayloadAction 类型来声明 `action.payload` 的内容
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  // `extraReducers` 字段让 slice 处理在其他地方定义的 actions，包括由 createAsyncThunk 或其他 slice 生成的 actions。
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'failed'
      })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// 下面的函数被称为 selector，它允许我们从状态中选择一个值。
// 选择器也可以在使用它们的地方内联定义，而不是在 slice 文件中定义。
// 例如：`useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value

// 我们也可以手动编写 thunks，它们可能包含同步和异步逻辑。
// 下面是一个根据当前状态有条件地调度 actions 的示例。
export const incrementIfOdd =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectCount(getState())
      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount))
      }
    }

export default counterSlice.reducer
