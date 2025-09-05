import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoproivder } from './Context'
import TodoForm from './Componets/TodoForm'
import TodoItem from './Componets/TodoItem'

function App() {
  const [Todos, SetTodos] = useState([])

  const addTodo = (todo) => {
    SetTodos((p) => [{ id: Date.now(), ...todo }, ...p])
  }

  const updatedTodo = (id, todo) => {
    SetTodos((p) => p.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    SetTodos((p) => p.filter((todo) => todo.id !== id))
  }

  const togglecompelete = (id) => {
    SetTodos((p) => p.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todos"))
    if (todos && todos.length > 0) {
      SetTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  }, [Todos])



  return (
    <Todoproivder value={{ Todos, deleteTodo, togglecompelete, addTodo, updatedTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
                >
                  <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoproivder>
  )
}

export default App
