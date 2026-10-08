import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { useState } from 'react'
import './App.css'

function App () {
  const [todos, setTodos] = useState([])

  function handleAddTodo(text) {
  const newTodo = {
    id: crypto.randomUUID(),
    text: text,
    completed: false,
  }

  setTodos((currentTodos) => [...currentTodos, newTodo])
  }

    function handleDeleteTodo(id) {
    setTodos((currentTodos) =>
    currentTodos.filter((todo) => todo.id !== id)
    )
  }

    function handleToggleTodo(id) {
    setTodos((currentTodos) =>
    currentTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    )
  }




  return (
    <main className="app">
      <h1>Min att göra-lista</h1>

      <TodoForm onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggleTodo}
         onDelete={handleDeleteTodo}
        />
        ))}
      </ul>
    </main>
  )
}

export default App