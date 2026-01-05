import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Phone, Mail, MapPin, ChevronRight, Facebook, Linkedin, Instagram } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Factory Tour', path: '/factory' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Configurator', path: '/configurator' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top Bar */}
      <div className="bg-brand-900 text-slate-300 py-2 text-xs md:text-sm px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +86 571 8888 8888</span>
            <span className="flex items-center gap-1"><Mail size={14} /> sales@xcanod-factory.com</span>
          </div>
          <div className="hidden md:flex gap-4">
            <span>OEM/ODM Available</span>
            <span>15-Day Fast Delivery</span>
            <span>ISO 9001 Certified</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="bg-brand-900 text-white p-2 rounded-lg group-hover:bg-accent-500 transition-colors">
              <Hammer size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-brand-900 leading-none">XCANOD</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Factory Direct</p>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent-500 ${
                    isActive ? 'text-brand-900 font-bold' : 'text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="bg-brand-900 text-white px-5 py-2.5 rounded hover:bg-brand-700 transition-colors text-sm font-medium">
              Get Quote
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-6 py-3 text-slate-700 hover:bg-brand-50 hover:text-brand-900 font-medium border-l-4 border-transparent hover:border-brand-900"
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="p-6">
              <NavLink 
                to="/contact" 
                className="block w-full text-center bg-brand-900 text-white px-5 py-3 rounded hover:bg-brand-700 font-medium"
                onClick={closeMenu}
              >
                Get Quote
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Hammer size={24} />
              <span className="text-xl font-bold">XCANOD</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Professional pergola manufacturer with 25 years of outdoor structure experience. 
              European standard quality, factory direct pricing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/products" className="hover:text-accent-500 transition-colors">Residential Garden</NavLink></li>
              <li><NavLink to="/products" className="hover:text-accent-500 transition-colors">Commercial HORECA</NavLink></li>
              <li><NavLink to="/products" className="hover:text-accent-500 transition-colors">Custom Projects</NavLink></li>
              <li><NavLink to="/solutions" className="hover:text-accent-500 transition-colors">Durable Pergolas</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Factory</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/factory" className="hover:text-accent-500 transition-colors">Production Process</NavLink></li>
              <li><NavLink to="/factory" className="hover:text-accent-500 transition-colors">Quality Control</NavLink></li>
              <li><NavLink to="/factory" className="hover:text-accent-500 transition-colors">OEM/ODM Service</NavLink></li>
              <li><NavLink to="/factory" className="hover:text-accent-500 transition-colors">Certifications</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Factory</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent-500" />
                <span>No. 123 Industrial Zone, Foshan City, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-500" />
                <span>+86 571 8888 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-500" />
                <span>sales@xcanod-factory.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; 2024 XCANOD Outdoor Structures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;