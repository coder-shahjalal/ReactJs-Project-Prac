import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-center'>  
    <AddTodo/>
    <Todos/>
    </div>

    </>
  )
}

export default App
