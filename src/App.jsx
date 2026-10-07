import TodoItem from './TodoItem'
import { useState } from 'react'
import './App.css'

function app () {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedText = inputText.trim()
    if (trimmedText === '') return

    const newTodo = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    }

    setTodos((currentTodos) => [...currentTodos, newTodo])
    setInputText('')
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

      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Ny uppgift</label>
        <input
          id="todo-input"
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button type="submit">Lägg till</button>
      </form>

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

export default app