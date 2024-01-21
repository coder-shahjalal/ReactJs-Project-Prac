import Home from "./components/Home";
import { MyContextProvider } from "./contexts/MyContext";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 text-3xl">
      <MyContextProvider>
        <Home/>
        
      </MyContextProvider>
    </div>
  );
}

export default App;
