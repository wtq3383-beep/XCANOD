import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Factory from './pages/Factory';
import Configurator from './pages/Configurator';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="factory" element={<Factory />} />
          <Route path="configurator" element={<Configurator />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solution/:id" element={<SolutionDetail />} />
          <Route path="contact" element={<div className="container mx-auto px-4"><ContactForm /></div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;