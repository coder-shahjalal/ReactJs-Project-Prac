import React, { useState } from "react";

function Login() {
const [user, setUsername] = useState("");
const [password, setPassword] = useState("");

    const handleSubmit =(){

    }

  return (
    <div>
      <h2>Login</h2>
      <input value={username}
      onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" />
      <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
