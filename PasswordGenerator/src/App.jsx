

import { useCallback, useState } from "react";


const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [caratorAllowed, setcaratorAllowed] = useState(false);
  const [password, setpassword] = useState();
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (caratorAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, caratorAllowed, setpassword]);
  return (
    <>

    <h1 className='text-4xl text-center text-white bg-zinc-800'>
    Password Generator
    </h1>
    =======
      <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-md">
        <h1 className="my-3 text-center text-white">Password Generator</h1>
        <div className="flex mb-4 overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={caratorAllowed}
              id="caraInput"
              onChange={() => {
                caratorAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="caraInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
