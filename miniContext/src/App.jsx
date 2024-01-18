import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvied";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>share shahjalal project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
