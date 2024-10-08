import "./App.css";
import { useRef, useState } from "react";

const EMPTY_ARRAY = [];

function App() {
  const [todos, set] = useState(EMPTY_ARRAY);
  const inputRef = useRef();

  const add = (t) => {
    console.log("added a todo");
    set((prev) => [...prev, { t, id: crypto.randomUUID() }]);
    inputRef.current.value = "";
  };

  const remove = (t) => {
    const a = todos.filter((td) => td.id !== t);
    set(a);
  };

  const submit = (e) => {
    e.preventDefault();
    add(inputRef.current.value);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <h1>Todo list</h1>
        <input ref={inputRef} placeholder="Enter a todo" />
        <input type="submit" />

        <h2>Todos</h2>
        {todos.map((item, index) => (
          <p onClick={() => remove(item.id)}>{item.t}</p>
        ))}
      </form>
    </div>
  );
}

export default App;
