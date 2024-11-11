import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Preloader from './components/Preloader';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

library.add(fas, far, fab);

const App = () => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Preloader onLoaded={() => setLoaded(true)} />;
  }

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/services/:serviceId" element={<Pricing />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;