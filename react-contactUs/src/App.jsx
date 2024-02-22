import "./App.css";
import ContactForm from "./components/Navigation/ContactForm/ContactForm";
import ContactHeader from "./components/Navigation/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <ContactHeader />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
