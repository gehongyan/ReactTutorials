// 一个模拟异步请求数据的模拟函数
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>(resolve =>
    setTimeout(() => resolve({ data: amount }), 500)
  )
}
