import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RouteProgress from "./components/RouteProgress/RouteProgress";

import Home from "./pages/Home/Home";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import ServiceDetail from "./pages/Services/ServiceDetail";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Privacy from "./pages/Legal/Privacy";
import Terms from "./pages/Legal/Terms";
import ComingSoon from "./pages/ComingSoon/ComingSoon";



function App() {
  return (
    <>
      <div className="app app-bg">
        <RouteProgress />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Home />
              </>
            }
          />
          <Route path="/coming-soon/:feature" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />


        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
