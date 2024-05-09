import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home.tsx";
import About from "./features/about/About.tsx";
import Memo from "./features/hook/memo/Memo.tsx";
import Reducer from "./features/hook/reducer/Reducer.tsx";
import Context from "./features/hook/context/Context.tsx";
import Effect from "./features/hook/effect/Effect.tsx";
import Callback from "./features/hook/callback/Callback.tsx";
import Ref from "./features/hook/ref/Ref.tsx";
import Counter from "./features/counter/Counter.tsx";
import Timestamp from "./features/timestamp/Timestamp.tsx";
import AntDesign from "./features/ant/AntDesign.tsx";

import { ConfigProvider, MappingAlgorithm, theme } from 'antd';
import { useState } from "react";
import Chart from "./features/chart/Chart.tsx";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

const { defaultAlgorithm, darkAlgorithm } = theme;

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home/>
    },
    {
      path: `/about`,
      element: <About/>
    },
    {
      path: `/hook/effect`,
      element: <Effect/>
    },
    {
      path: `/hook/context`,
      element: <Context/>
    },
    {
      path: `/hook/reducer`,
      element: <Reducer/>
    },
    {
      path: `/hook/memo`,
      element: <Memo/>
    },
    {
      path: `/hook/callback`,
      element: <Callback/>
    },
    {
      path: `/hook/ref`,
      element: <Ref/>
    },
    {
      path: `/counter`,
      element: <Counter/>
    },
    {
      path: `/timestamp`,
      element: <Timestamp/>
    },
    {
      path: `/antd`,
      element: <AntDesign/>
    },
    {
      path: `/chart`,
      element: <Chart/>
    }
  ]
);

export default function App() {

  const getTheme = (): MappingAlgorithm[] => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? [darkAlgorithm]
      : [defaultAlgorithm];
  }

  const [algorithm, setAlgorithm] = useState<MappingAlgorithm[]>(getTheme())

  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => setAlgorithm(getTheme()));

  return (
    <ConfigProvider locale={zhCN}
                    theme={{
                      algorithm: algorithm
                    }}
    >
      <RouterProvider router={router}
                      fallbackElement={<p>Loading...</p>}
      />
    </ConfigProvider>
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
