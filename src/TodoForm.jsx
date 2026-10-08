import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [inputText, setInputText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedText = inputText.trim()
    if (trimmedText === '') return

    onAddTodo(trimmedText)
    setInputText('')
  }

  return (
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
  )
}

export default TodoForm