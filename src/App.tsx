import { Routes, Route } from "react-router-dom";
import Client1 from "./pages/Client no-1/Client no-1";
import Client2 from "./pages/Client no-2/Client no-2";
import Client3 from "./pages/Client no-3/Client no-3";
import NavbarBS from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavbarBS />
      <Routes>
        <Route path="/2GTBRS8DBV" element={<Client1 />} />
        <Route path="/4DBGTR9MNB" element={<Client2 />} />
        <Route path="/1MJKIF2BVN" element={<Client3 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
