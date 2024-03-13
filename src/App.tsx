import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SolanaDappBot from "./page/SolanaDappBot";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-2">
        <SolanaDappBot />
      </div>
      <Footer />
    </>
  );
}

export default App;
