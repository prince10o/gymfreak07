import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Offer } from "./components/Offer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </>
  );
}

export default App;
