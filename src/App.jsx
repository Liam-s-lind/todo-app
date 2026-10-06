import { useState } from 'react'
import './app.css'

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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  )
}

export default app