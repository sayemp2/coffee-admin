import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee'
import { useState } from 'react'

function App() {
const loadCoffees = useLoaderData()
const [coffees, setCoffees]= useState(loadCoffees)


  return (
    <>
      <h1 className='text-3xl font-semibold'>Welcome Coffee Shop</h1>
      <p>{coffees.length}</p>
      <div className='grid md:grid-cols-2 gap-3'>
          {
            coffees.map(coffee=> <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffee>)
          }
      </div>
    </>
  )
}

export default App
