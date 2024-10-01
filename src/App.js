import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Empresa from "./components/pages/Empresa";
import Projects from "./components/pages/Projects";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="minHeight">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/empresa" element={<Empresa />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
