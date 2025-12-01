import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";


function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Banner />
              <Services />

            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
