import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/counter'
import LoginPage from './pages/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage />
    </>
  )
}

export default App
