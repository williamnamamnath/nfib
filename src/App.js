import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NF1 from "./pages/NF1";
import NF1Team from "./pages/NF1Team";
import PastProjects from "./pages/PastProjects";
import NewsAndEvents from "./pages/NewsAndEvents";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-nfib" element={<NF1 />} />
            <Route path="/nf1-team" element={<NF1Team />} />
            <Route path="/projects" element={<PastProjects />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
          <Footer />
    </Router>
  );
}; 

export default App;
