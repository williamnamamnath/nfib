import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import './index.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-load pages for better initial load performance
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const NF1 = lazy(() => import('./pages/NF1'));
const NF1Team = lazy(() => import('./pages/NF1Team'));
const PastProjects = lazy(() => import('./pages/PastProjects'));
const NewsAndEvents = lazy(() => import('./pages/NewsAndEvents'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="page-content">
        <Suspense fallback={<div style={{padding: '2rem', textAlign: 'center'}}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-nfib" element={<NF1 />} />
            <Route path="/nf1-team" element={<NF1Team />} />
            <Route path="/projects" element={<PastProjects />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
