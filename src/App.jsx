import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
const coffees = useLoaderData()

  return (
    <>
      <h1 className='text-3xl font-semibold'>Welcome Coffee Shop</h1>
      <p>{coffees.length}</p>
      <div>
        
      </div>
    </>
  )
}

export default App
