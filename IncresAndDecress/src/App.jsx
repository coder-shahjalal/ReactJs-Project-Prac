import { useState } from "react";

const App = () => {
  const [data, setData] = useState(0);

  const increaseHandle = () => {
    setData((prev) => (prev < 100 ? prev + 1 : prev));
  };

  const decreaseHandle = () => {
    setData((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <h1>{data}</h1>
        <button
          onClick={increaseHandle}
          style={{
            background: "green",
            marginLeft: "20px",
            padding: "5px 30px",
            color: "white",
            fontWeight: "semibold",
          }}
        >
          <p>Increase</p>
        </button>
        <button
          onClick={decreaseHandle}
          style={{
            background: "red",
            marginLeft: "20px",
            padding: "5px 30px",
            color: "white",
            fontWeight: "semibold",
          }}
        >
          <p>Decrease</p>
        </button>
      </div>
    </>
  );
};

export default App;
