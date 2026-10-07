function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </span>
      </label>

      <button type="button" onClick={() => onDelete(todo.id)}>
        Ta bort
      </button>
    </li>
  )
}

export default TodoItem