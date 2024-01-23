import { useEffect, useState } from "react";
import Card from "./components/Card";
import Home from "./components/Home";
import ThemeBtn from "./components/ThemeBtn";
import { MyContextProvider } from "./contexts/MyContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <MyContextProvider>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap items-center min-h-screen">
          <div className="w-full">
            <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
              <div>
                <Home />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </MyContextProvider>
  );
}

export default App;
