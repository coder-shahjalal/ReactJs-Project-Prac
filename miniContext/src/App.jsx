import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvied";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>share shahjalal project</h1>
    </UserContextProvider>
  );
}

export default App;
