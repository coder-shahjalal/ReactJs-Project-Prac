import { useState } from 'react'
import './App.css'
import { MyContextProvider, ThemeProvider } from './context/CreateContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextProvider>
        <ThemeProvider>
              <h2 className='flex justify-center text-3xl text-white bg-slate-500'> tailwindcss </h2>
        </ThemeProvider>
    </MyContextProvider>
  )
}

export default App
