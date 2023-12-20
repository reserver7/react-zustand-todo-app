import "./App.css";
import Counter from "./components/useCounterStore";
import TodoList from "./components/TodoList";
import { useUserStore } from "./store/useUserStore";
import { useEffect } from "react";

function App() {
  const { fetch, user } = useUserStore();
  console.log(user);

  useEffect(() => {
    fetch(1);
  }, [fetch]);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </header>
    </div>
  );
}

export default App;
