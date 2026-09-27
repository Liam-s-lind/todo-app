import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Koka te",
    "Jogga",
    "Äta",
    "Träna",
  ]); /* useState används eftersom värdet bevaras mellan renderingar och setTodos uppdaterar gränssnittet, medan [todos, setTodos] packar upp hookens värde och uppdateringsfunktion och en vanlig let varken bevaras eller orsakar omrendering.  */

  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function CleaarList(){
    setTodos([]);
  }

  function handleClear() {
    setDraft("");
  }

   function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, text]);
    setDraft("");
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>

      <ul>
      {todos.map(function (todo) { return <li key={todo}>{todo}</li>; })}
      </ul>
      
      <button type="button" onClick={CleaarList}>Clear</button>
      <input type="text" value={draft} onChange={handleChange} placeholder="Skriv uppgift..." />
      <button type="button" onClick={handleClear}>Rensa</button>
      <p>Kladd just nu: {draft}</p>
      <button type="button" onClick={handleAdd}>Lägg till</button>
    </main>
  );
}

export default App;
