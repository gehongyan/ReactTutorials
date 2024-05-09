import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './Home.module.css'

function Home() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className={styles.buttonLine}>
        <button onClick={() => navigate('/about')}>About</button>
      </div>
      <div className={styles.buttonLine}>
        <button onClick={() => navigate('/hook/effect')}>useEffect</button>
        <button onClick={() => navigate('/hook/context')}>useContext</button>
        <button onClick={() => navigate('/hook/reducer')}>useReducer</button>
        <button onClick={() => navigate('/hook/memo')}>useMemo</button>
        <button onClick={() => navigate('/hook/callback')}>useCallback</button>
        <button onClick={() => navigate('/hook/ref')}>useRef</button>
      </div>
      <div className={styles.buttonLine}>
        <button onClick={() => navigate('/counter')}>Counter (Redux)</button>
        <button onClick={() => navigate('/timestamp')}>Timestamp (Axios)</button>
        <button onClick={() => navigate('/antd')}>Ant Design</button>
        <button onClick={() => navigate('/chart')}>Ant Design Charts</button>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
