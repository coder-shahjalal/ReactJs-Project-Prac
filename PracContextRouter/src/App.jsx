import Footer from "./components/Footer";
import Header from "./components/Header";
import { MyContextProvider } from "./contexts/MyContext";

function App() {
  return (
    <div className="text-3xl flex flex-col justify-center items-center mt-10">
      <MyContextProvider>
        <h2>App</h2>
        <Header />
        <Footer />
      </MyContextProvider>
    </div>
  );
}

export default App;
