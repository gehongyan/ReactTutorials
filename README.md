# React 基础

本文档是 React 的基础教程，主要包含安装 React 应用程序的开发环境、创建应用程序、根据业务编写代码、测试与部署等内容。

## 开发环境

### 安装 Node.js

要开发 React 应用程序，首先需要安装 Node.js。Node.js 是一个 JavaScript 运行环境。可以在
[Node.js 官网] 下载到 Node.js 的开发环境。

[Node.js 官网]: https://nodejs.org/

### 开发工具

主流的 React 开发工具有 [Visual Studio Code]、[JetBrains WebStorm] 等。

Visual Studio Code 是一款开源的轻量级的代码编辑器，支持多种语言与扩展，是一款非常适合前端开发的工具。

[Visual Studio Code]: https://code.visualstudio.com/

[JetBrains WebStorm]: https://www.jetbrains.com/webstorm/

#### Visual Studio Code 插件

以 Visual Studio Code 为例，为了后续开发的遍历，可以安装一些主流的插件，如：

- [ES7+ React/Redux/React-Native snippets]：提供了一些便于 React 开发的代码片段。
- [Simple React Snippets]：提供了一些 React 开发的代码片段。
- [Prettier - Code formatter]：提供了代码格式化的功能。
- [ESLint]：提供了 JavaScript 代码检查的功能。
- [Stylelint]：提供了 CSS 代码检查的功能。
- [SonarLint]：提供了代码质量检查的功能。

[ES7+ React/Redux/React-Native snippets]: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

[Simple React Snippets]: https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets

[Prettier - Code formatter]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

[Stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

[SonarLint]: https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode

## 创建 React 应用程序

[Vite] 是一个由原生 ESM 驱动的 Web 开发构建工具，它的目标是快速提供合适的开发环境。
此处以使用 Vite 创建 React 应用程序为例，首先通过 npm 包管理器安装 Vite 全局工具。

[Vite]: https://vitejs.dev/

```bash
npm install --global create-vite
```

然后通过 Vite 创建 React 应用程序。

```bash
npm create vite@latest
```

如果命令中不包含额外的参数，Vite 会进行交互式的操作，根据提示选择创建 React 应用程序。
输入应用程序名称后选择框架和语言，即可在当前工作目录下创建 React 应用程序。
本项目以应用程序名称为 app，框架为 React，语言为 TypeScript 为例。
TypeScript 是 JavaScript 的超集，提供了类型检查的功能，可以提高代码的可维护性。

## 模板项目结构

创建 React 应用程序后，会生成如下的项目结构：

```plaintext
app                     # 应用程序根
├─ public               # 静态资源
│  └─ vite.svg          # Vite 图标
├─ src                  # 应用程序源码
│  ├─ assets            # 资源
│  │  └─ react.svg      # React 图标
│  ├─ App.css           # 组件 App 的样式
│  ├─ App.tsx           # 组件 App 的代码
│  ├─ index.css         # 入口文件的样式
│  ├─ index.tsx         # 入口文件的模块
│  └─ vite-env.d.ts     # Vite 环境变量
├─ .eslintrc.cjs        # ESLint 配置
├─ .gitignore           # Git 忽略文件
├─ index.html           # 入口文件
├─ package.json         # 包管理文件
├─ README.md            # 项目说明
├─ tsconfig.json        # TypeScript 配置
├─ tsconfig.node.json   # Node.js TypeScript 配置
└─ vite.config.ts       # Vite 配置
```

## 包管理器

npm 是 Node.js 的包管理器，用于管理 Node.js 的依赖包。
`dependencies` 节点下记录的是应用程序的依赖包，`devDependencies` 节点下记录的是开发环境的依赖包。

版本号前的 `^` 符号表示允许更新到次要版本，`~` 符号表示允许更新到补丁版本。
例如，`^1.2.3` 表示允许更新到 1.x.x 的任意版本，`~1.2.3` 表示允许更新到 1.2.x 的任意版本，
而 `1.2.3` 则表示只能使用 1.2.3 版本。

## 运行示例程序

运行 React 应用程序，首先需要安装依赖。

```bash
cd app
npm install
```

`npm install` 命令会安装 `package.json` 中的依赖，此过程会创建 `node_modules` 目录，存放依赖的包。
还会创建 `package-lock.json` 文件，存放依赖的版本信息。`package-lock.json` 文件记录的是当前实际安装的依赖版本。

安装依赖后，可以运行 React 应用程序。

```bash
npm run dev
```

`npm run` 命令会执行 package.json 中 scripts 字段中的命令，`dev` 是其中一个命令，用于启动开发服务器。
此处的 `dev` 脚本的值是 `vite`，即启动 Vite 开发服务器，因此该命令实际和 `vite` 命令等价。

观察控制台输出，可以看到 React 应用程序的启动信息，如 `Local: http://localhost:5173/` 便可以在浏览器中打开该地址访问应用程序。

package.json 中的 scripts 字段中还有其他脚本，如 `build`、`lint`、`preview` 等。

- `build` 脚本调用了 `tsc && vite build`，即先对 TypeScript 源码进行编译，然后构建应用程序。
- `lint` 脚本调用了 `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0`，即对
  当前名录下的 `.ts` 和 `.tsx` 文件进行 ESLint 检查。`--report-unused-disable-directives` 用于检查未使用的
  ESLint 禁用指令，`--max-warnings 0` 用于设置最大警告数为 0，即任何警告都会导致脚本失败。
- `preview` 脚本调用了 `vite preview`，即启动 Vite 预览服务器，预览构建后的应用程序。该命令主要用于
  预览构建后的应用程序，可以用于测试构建后的应用程序，不应直接用于生产环境。生产环境下应使用一个更完整的服务器应用来托管应用程序。

## 编写 React 代码

React 是一个用于构建用户界面的 JavaScript 库。

### 入口文件

`index.html` 是 React 应用程序的入口文件，其中包含一个 `div` 元素，用于挂载 React 应用程序，以及一个
`script` 元素，用于加载 React 应用程序的入口模块。

```html

<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

`main.tsx` 是 React 应用程序的入口模块，用于在 React 应用程序中渲染一个 `App` 组件。

```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
```

- `ReactDOM.createRoot(document.getElementById('root')!)`：这是 React 18 中引入的新的渲染 API。`createRoot`
  方法创建一个根 React 节点，并将其挂载到指定的 DOM 元素上，将 React 应用程序挂载到 id 为 `root` 的 DOM 元素上。

- `.render(<React.StrictMode><App /></React.StrictMode>)`：这个方法用于在前面创建的根节点上渲染 React 组件。

- `<React.StrictMode>`：React 严格模式，这是一个用于检查 React 应用程序中潜在问题的工具。它不会影响生产构建，
  但在开发模式下，它会激活额外的检查和警告。它包裹了 `App` 组件，所以这些检查和警告将应用于 `App` 组件及其所有子组件。

- `<App />`：这是要渲染的 React 组件。在这个例子中，`App` 是应用程序的根组件。

### 组件

React 应用程序是由组件组成的，组件是 React 应用程序的基本单元。
组件是一个函数或一个类，用于描述用户界面的一部分。组件可以嵌套，形成一个组件树。目前主流的 React 开发方式是函数组件。

函数组件是一个函数，接收一个 props 参数，返回一个 React 元素。React 元素是一个描述用户界面的对象，可以是一个 DOM 元素、一个组件等。

```tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

`function` 用于声明一个函数，`App` 是函数的名称，函数体是函数的实现。`return` 返回了一个 React 元素。

`useState` 是一个 React Hook，用于在函数组件中添加状态。因为函数组件是无状态的，所以需要使用 Hook 来添加状态。
`useState(0)` 返回一个数组，第一个元素 `count` 是状态的值，第二个元素 `setCount` 是更新状态的函数。
这里的状态是一个数字，初始值为 0。`useState(0)` 的参数是状态的初始值，这里的初始值是 0。

`<img src={viteLogo} className="logo" alt="Vite logo" />` 是一个图片元素，`src` 属性是图片的地址，`className`
属性是图片的类名，`alt` 属性是图片的描述。这里的 `src` 属性使用了一个变量 `viteLogo`，这个变量是一个图片的地址，通过
`import` 引入。变量需要使用大括号 `{}` 包裹。

`<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>` 是一个按钮元素，`onClick`
属性是点击事件的处理函数，调用了 `setCount` 函数，更新了 `useState` 定义的状态。
按钮的文本 `count is {count}` 使用了一个变量 `count`，这个变量是一个状态的值，通过大括号 `{}` 包裹。
状态的更新会自动触发对应的组件的重新渲染。

`<></>` 是一个 React 片段，用于包裹多个元素。React 要求一个组件只能返回一个根元素，所以需要使用片段来包裹多个元素。

`export default App` 用于导出组件，这样其他模块就可以引入该组件。

### 样式

`App.css` 是 `App` 组件的样式文件，用于描述 `App` 组件的样式。

默认生成的 `App.css` 包含了以下几个部分。

```CSS
#root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}
```

`#root` 是一个 ID 选择器，用于选择 id 为 `root` 的元素。`max-width` 属性设置元素的最大宽度为 1280 像素，
`margin` 属性设置元素的外边距为 0，`padding` 属性设置元素的内边距为 2rem，这里的 rem 单位是相对于根元素的字体大小，
`text-align` 属性设置元素的文本对齐方式为居中。

```CSS
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
}
```

`.logo` 是一个类选择器，用于选择类名为 `logo` 的元素。`height` 属性设置元素的高度为 6em，
`padding` 属性设置元素的内边距为 1.5em，`will-change` 属性设置元素之后会发生变化的属性为 `filter`，
`transition` 属性设置元素的过渡效果为 `filter 300ms`，即 `filter` 属性的变化时间为 300 毫秒。

`.logo:hover` 是一个伪类选择器，用于选择鼠标悬停在类名为 `logo` 的元素上的元素。
`filter` 属性设置元素的滤镜效果为 `drop-shadow(0 0 2em #646cffaa)`，

```CSS
@keyframes logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
        animation: logo-spin infinite 20s linear;
    }
}
```

`@keyframes logo-spin` 是一个关键帧动画，用于定义一个旋转动画。`from` 关键字表示动画的开始状态，
`to` 关键字表示动画的结束状态。`transform` 属性设置元素的变换效果为 `rotate(0deg)`，即元素的旋转角度为 0 度到 360 度。

`@media (prefers-reduced-motion: no-preference)` 是一个媒体查询，用于根据用户的偏好设置应用样式。
`prefers-reduced-motion` 是一个用户偏好设置，表示用户所设置的是否偏好减弱动画。
根据文档 [prefers-reduced-motion - CSS：层叠样式表 | MDN]，`no-preference` 表示用户未修改系统动画相关特性，
`reduce` 意味着用户修改了系统设置，将动画效果最小化，最好所有的不必要的移动都能被移除。
在 Windows 11 中，影响该值的设置位于「设置 - 辅助功能 - 视觉效果 - 动画效果」。

[prefers-reduced-motion - CSS：层叠样式表 | MDN]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion

#### 模块样式

但传统的 CSS 有一个问题，就是全局作用域。一个 CSS 文件中的样式会对整个页面生效，这样会导致样式冲突，
不利于组件化开发，类名称的弱关联也不利于样式的维护。

CSS Modules 是一种解决方案，它是一种 CSS 的模块化方案，可以解决全局作用域的问题。CSS Modules 会将 CSS
文件中的类名转换为一个哈希值，这样就可以保证类名的唯一性，避免样式冲突。

要将 `App.css` 转换为 CSS Module，首先需要将文件重命名为 `App.module.css`，然后在 `App.tsx` 中更改样式文件的引入，
最后根据需要修改样式文件中的类名，例如，将 `read-the-docs` 类名修改为 `readTheDocs`。

```diff
- import './App.css'
+ import styles from './App.module.css'
```

这样就可以使用 `styles` 对象来引用 CSS Module 中的类名。

```diff
  <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
-       <img src={viteLogo} className={styles.logo} alt="Vite logo" />
+       <img src={viteLogo} className={styles.logo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
-       <img src={reactLogo} className="logo react" alt="React logo" />
+       <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
-   <div className="card">
+   <div className={styles.card}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
-   <p className="read-the-docs">
+   <p className={styles.readTheDocs}>
      Click on the Vite and React logos to learn more
    </p>
  </>
```

更改文件后，可以发现 Vite 为我们自动更新了预览视图，这是因为 Vite 支持热模块替换（HMR）。
但修改后的组件并没有像原来一样保持居中，这是因为 CSS Module 会将类名转换为哈希值，不支持现有的 `#root` ID 选择器。
如果需要使用 ID 选择器，可以使用 `:global` 关键字，保留样式的原始全局性。

```diff
- #root {
+ :global(#root) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
```

### 路由

#### 安装路由组件

React 是一个单页面应用程序（SPA）框架，单页面应用程序是指一个页面加载后，不会因为用户的操作而进行页面的重新加载。
当需要切换页面时，只会更新页面的部分内容，而不会重新加载整个页面，这便需要路由来管理页面的切换。

React Router 是一个用于管理 React 应用程序路由的库，它提供了一些组件，用于在 React 应用程序中实现路由功能。

首先需要安装 React Router，这是我们第一次添加依赖。

```bash
npm install react-router-dom
```

这会在 `package.json` 中的 `dependencies` 节点下添加 `react-router-dom` 依赖。

```diff
+ "react-router-dom": "^6.23.0"
```

现在，我们可以根据文档的指南为我们的应用程序添加路由能力。

#### 整理代码结构

为了让页面结构更清晰，我们先整理以下目录结构。

在 `src` 目录下创建 `features` 文件夹，用于存放各个页面组件。

将组件 `App` 重命名为 `Home`，并移动到 `features/home` 目录下，此操作建议使用 IDE 的重构/重命名功能，
这样，相关的引用也会被自动更新。操作完成后，访问浏览器检查所有的引用是否正常。

重新创建 `App` 组件，用于包裹整个应用程序，这样可以在 `App` 组件中添加路由。

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home.tsx";

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home/>
    }
  ]
);

export default function App() {
  return (
    <RouterProvider router={router}
                    fallbackElement={<p>Loading...</p>}
    />
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
```

新的 `App` 模块道出了一个 `RouterProvider` 组件，用于提供路由功能。`RouterProvider` 组件接收一个 `router` 属性，
这个属性是一个路由对象，用于管理路由。`router` 对象是通过 `createBrowserRouter` 函数创建的，这个函数接收一个路由配置数组，
返回一个路由对象。路由配置数组中的每个元素都是一个路由配置对象，包含了路由的路径和对应的元素。

`createBrowserRouter` 函数返回的路由对象有一个 `dispose` 方法，用于清理路由对象。在开发模式下，当模块被热替换时，
会调用 `dispose` 方法，清理路由对象。

现在，应用程序的路由已经配置好了，但是还需要在入口文件中引入 `App` 组件。由于重构操作，`main.tsx` 中的原来的
`<App />` 也被重命名为 `<Home />`，所以需要将其改为 `<App />`。重新导入模块 `App` 并使用它。

```diff
- import Home from './features/home/Home.tsx'
+ import App from './App.tsx'

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
-     <Home />
+     <App />
    </React.StrictMode>,
  )
```

现在，重新访问 http://localhost:5173/ ，可以看到页面上仍然正常显示着 `Home` 组件的内容，但此时已经是通过路由管理的。

#### 创建新页面

现在，我们来创建一个新的页面，用于展示一个关于页面。

在 `features/about` 目录下创建组件 `About.tsx`。

```tsx
function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is a simple app to demonstrate how to create a simple app using Vite and React.</p>
    </>
  );
}

export default About;
```

然后，我们需要在 `App` 组件中添加一个新的路由配置，用于展示 `About` 页面。

```tsx
import About from "./features/about/About.tsx";

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home/>
    },
    {
      path: `/about`,
      element: <About/>
    }
  ]
);
```

### 钩子

React Hook 是 React 16.8 中引入的新特性，用于在函数组件中添加状态和副作用。
此处对一些常用的钩子进行简单介绍。

#### `useState`

用于在函数组件中添加状态，可以视为一个组件内部的变量。
状态是一个组件可以改变的值，它可以影响组件的行为和渲染输出。
`useState` 接受一个参数，这个参数是状态的初始值，然后返回一个包含两个元素的数组。
第一个元素是当前的状态值，第二个元素是一个函数，用于更新状态值。
调用这个更新函数并传入一个新的值时，React 会重新渲染组件，并使用新的值作为状态。

以 `Home.tsx` 为例。

我们使用 `useState` 创建了一个新的状态变量 `count`，并给它设置了初始值 `0`。
我们还得到了一个函数 `setCount`，用于更新 `count` 的值。
当用户点击按钮时，我们调用 `setCount` 来增加 `count` 的值，这会触发组件的重新渲染。

#### `useEffect`

用于在函数组件中执行副作用操作。副作用操作包括数据获取、订阅或手动修改 DOM 等等。
这些操作通常在组件渲染后执行，以不影响组件的渲染性能。

`useEffect` 接受两个参数：一个是执行副作用的函数，另一个是依赖数组。
当依赖数组中的值发生变化时，副作用函数就会被执行。如果不提供依赖数组，那么副作用函数会在每次渲染后都执行。

以 `Effect.tsx` 为例。

在这个例子中，我们使用 `useEffect` 来更新 `document` 的 `title`。
当 `count` 变化时，副作用函数就会被重新执行，更新 `document` 的 `title`。
当组件卸载或者下一次 `useEffect` 执行前，清理函数会被调用，将 `document` 的 `title` 重置为 `React App`。

需要注意的是，在开发模式下，我们启用了 React 严格模式，这会导致 `useEffect` 中的副作用函数被调用两次。
严格模式下，React 会在渲染过程中执行两次副作用函数，以确保副作用函数的纯净性，即相同的输入应始终产生相同的输出，
这有助于帮我们发现一些潜在的问题。

#### `useContext`

用于在函数组件中访问 React 上下文。React 上下文是一个全局的数据存储区，用于在组件树中传递数据，
而无需通过 props 显式传递。

以 `Context.tsx` 为例。

`useContext` 接受一个 `context` 对象（`React.createContext` 的返回值）作为参数，并返回该 `context` 的当前值。
当前的 `context` 值是由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` 决定的。

#### `useReducer`

用于在函数组件中管理复杂的状态逻辑。`useReducer` 类似于 Redux 中的 `reducer`，它接受一个 `reducer` 函数和一个初始状态，
并返回一个当前状态和一个 `dispatch` 函数。

`useReducer` 可以理解为是一种状态机，`reducer` 函数接收当前的状态和一个 `action`，返回一个新的状态。

以 `Reducer.tsx` 为例。

我们首先定义了一个 `reducer` 函数，它接受当前的 `state` 和一个 `action`，根据 `action` 的类型返回新的 `state`
。然后我们使用 `useReducer`，传入 `reducer` 函数和初始状态，得到当前的 `state` 和一个 `dispatch`
函数。在按钮的点击事件中，我们调用 `dispatch` 函数，传入一个 `action` 对象，触发 `state` 的更新。

#### `useMemo`

用于在函数组件中缓存计算结果，通过记忆计算结果来避免在每次渲染时都进行重计算，优化性能。
`useMemo` 接受两个参数：一个是创建记忆值的函数，另一个是依赖数组。当依赖数组中的值发生变化时，
`useMemo` 就会返回一个新的记忆值。如果依赖数组中的值没有变化，那么 `useMemo` 就会返回上一次的记忆值。

以 `Memo.tsx` 为例。

我们有一个复杂的计算函数 `expensive` 和 `expensiveWithoutMemo`，它们都会根据 `count` 的值进行计算。`expensive`
使用了 `useMemo`，而 `expensiveWithoutMemo` 没有。当我们改变输入框的值时，组件会重新渲染，但 `count`
的值并没有改变。对于 `expensive` 函数，由于 `count` 没有改变，`useMemo`
会返回上一次计算的结果，不会重新计算。但对于 `expensiveWithoutMemo`
函数，每次组件渲染时都会重新计算。因此，通过使用 `useMemo`，我们可以避免在每次渲染时都进行复杂的计算，从而优化性能。

#### `useCallback`

用于在函数组件中缓存回调函数，通过记忆回调函数来避免在每次渲染时都创建新的回调函数，优化性能。
`useCallback` 接受两个参数：一个是创建函数的函数，另一个是依赖数组。当依赖数组中的值发生变化时，`useCallback`
就会返回一个新的函数实例。如果依赖数组中的值没有变化，那么 `useCallback` 就会返回上一次的函数实例。

以 `Callback.tsx` 为例。

我们使用 `useCallback` 创建了一个记忆的 `increment` 函数。只有当 `count` 变化时，`useCallback`
才会返回一个新的 `increment` 函数。如果 `count` 没有变化，那么 `useCallback` 就会返回上一次的 `increment`
函数。这样，即使组件重新渲染，`increment` 函数的引用也不会变化，除非 `count` 变化。

这就是 `useCallback`
的主要用途：它可以帮助我们避免在每次渲染时都创建新的函数，从而优化性能。但是，需要注意的是，`useCallback`
本身也有一定的开销，因此，只有在必要的时候（例如，当函数作为依赖项传递给其他 Hooks，或者当函数传递给性能敏感的子组件时）才应该使用它。

#### `useRef`

用于在函数组件中创建一个可变的引用。`useRef` 返回一个可变的对象，这个对象的 `current` 属性可以存储任意值。
这个对象在组件的整个生命周期中保持不变，不会因为组件的重新渲染而改变。

以 `Ref.tsx` 为例。

我们使用 `useRef` 创建了一个 `ref`，并将其赋值给了一个输入框。然后，当按钮被点击时，我们使用 `ref` 来让输入框获取焦点。

需要注意的是，`useRef` 返回的 `ref` 对象有一个 `current` 属性，用于存储 `ref` 的值。在这个例子中，`current`
属性的值就是输入框的 DOM 节点。

### Redux

[Redux] 是一个用于管理 JavaScript 应用程序状态的开源库。它提供了一种在应用程序中以一种可预测的方式来管理和更新状态的方法。Redux
特别适用于那些由于其状态在很多组件之间共享而变得复杂的 JavaScript 应用程序。

Redux 的核心概念包括：

- **Store**：在 Redux 中，整个应用程序的状态被存储在一个对象树中，这个对象树被称为 Store。

- **Action**：Action 是描述发生了什么的普通对象。它是改变状态的唯一途径。每个 Action 都有一个 `type` 字段，用来描述 Action
  的类型。

- **Reducer**：Reducer 是一个纯函数，它接收当前的状态和一个 Action，然后返回一个新的状态。在 Redux 中，所有的状态更新逻辑都在
  Reducer 中完成。

Redux 的工作流程如下：

1. 发起 Action：应用程序中的某个事件触发了一个 Action。

2. Reducer 计算新的状态：Store 调用 Reducer 函数，并传入当前的状态和触发的 Action。Reducer 函数根据 Action 的类型计算出新的状态。

3. Store 更新状态：Store 将新的状态保存下来。然后，Store 会通知所有的监听器，状态已经更新。

Redux 的主要优点是它提供了一种可预测的状态管理方法，使得状态的更新在任何时候都是可追踪的。此外，由于 Redux 的状态存储在一个单一的
Store 中，这使得在调试和测试应用程序时更加方便。

[Redux]: https://cn.redux.js.org/

#### 安装 Redux Toolkit 和 React Redux

Redux Toolkit 是一个官方的 Redux 工具包，它提供了一些工具和库，用于简化 Redux 的使用。
React Redux 是一个用于在 React 应用程序中使用 Redux 的库。

```Bash
npm install @reduxjs/toolkit react-redux
```

- 定义根 State 和 Dispatch 类型

创建 `src/app/store.ts` 文件

```Typescript
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
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
```

#### 定义 Hooks 类型

创建 `src/app/hooks.ts` 文件

```Typescript
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

#### 定义 Slice State 和 Action

每个 Slice 都包含了一个 Reducer 函数，用于处理 Action，并且可以包含一些额外的 Reducer 函数，用于处理其他的 Action。

#### 编写模块代码

可以参考组件 `Counter`。

### API 调用

[axios] 是一个基于 Promise 的 HTTP 客户端，用于在浏览器和 Node.js 中发送 HTTP 请求。

[axios]: https://axios-http.com/

```Bash
npm install axios
```

可以参考 `Timestamp` 模块。

在 timestampAPI.ts 文件中，定义了一个异步函数 `getTimestamp`，用于获取当前时间戳。

```Typescript
import axios from "axios";

export interface WorldTimeApiDto {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string | null;
  dst_offset: number;
  dst_until: string | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export async function getTimestamp() {
  const response = await axios.get("http://worldtimeapi.org/api/timezone/Asia/Shanghai");
  const dto = response.data as WorldTimeApiDto;
  return Date.parse(dto.datetime);
}
```

如果需要配置请求头，可以在 axios 实例中配置。

```Typescript
await axios.get("http://worldtimeapi.org/api/timezone/Asia/Shanghai", {
  headers: {
    "Content-Type": "application/json"
  }
});
```

### 组件库

[Ant Design] 是一个用于构建 React 应用程序的 UI 组件库。

[Ant Design]: https://ant-design.antgroup.com/index-cn

```Bash
npm install antd
```

安装完成后，即可在需要引用 Ant Design 的组件时进行引用，并参考文档进行调用。

可以参考组件 `AntDesign`。

### 图表库

[Ant Design Charts] 是一个基于 Ant Design 设计体系的图表库，是 AntV 的 React 版本。

[Ant Design Charts]: https://ant-design-charts.antgroup.com/

```Bash
npm install @ant-design/charts
```

安装完成后，即可在需要引用 Ant Design Charts 的组件时进行引用，并参考文档进行调用。

可以参考组件 `Chart`。

## 部署

发布应用程序时，需要将应用程序构建为生产版本，并将构建后的文件部署到服务器上。

### 构建

构建应用程序时，需要使用 `build` 脚本。

```Bash
npm run build
```

构建完成后，默认情况下，Vite 会在 `dist` 目录下生成一个生产版本的应用程序，该位置可以在 `vite.config.ts` 中配置。

此时，便可以通过 `preview` 脚本来预览构建后的应用程序。

### 部署

部署应用程序时，需要将构建后的文件部署到服务器上。

此处以编写 DockerFile 将应用程序部署到 Docker 容器内的 Nginx 服务器为例。

```Dockerfile
FROM node:22-alpine as build
WORKDIR /app
COPY /app/package*.json ./
RUN npm install
COPY /app/ ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

在 DockerFile 文件中，首先使用 Node 镜像作为构建环境，安装依赖并构建应用程序，
然后使用 Nginx 镜像作为运行环境，将构建后的文件复制到 Nginx 的静态文件目录中，并暴露 80 端口。
