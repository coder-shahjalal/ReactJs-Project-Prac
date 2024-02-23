import "./App.css";
import ContactForm from "./components/Navigation/ContactForm/ContactForm";
import ContactHeader from "./components/Navigation/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />
       <main className="main_container">
       <ContactHeader />
        <ContactForm />
       </main>
      </div>
    </>
  );
}

export default App;
