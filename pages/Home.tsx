import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Settings, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/124/1920/1080" 
            alt="Luxury Pergola" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <span className="text-accent-500 font-bold uppercase tracking-[0.2em] mb-4 block text-sm md:text-base">
              Premium Outdoor Living Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Crafting The Perfect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Outdoor Space</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              XCANOD brings you factory-direct precision, blending European design with durable engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NavLink 
                to="/products" 
                className="bg-white text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-accent-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
              >
                Explore Collection <ArrowRight size={20} />
              </NavLink>
              <NavLink 
                to="/contact" 
                className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brand-900 transition-all duration-300"
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About Snippet */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img src="https://picsum.photos/id/433/600/700" alt="Factory Craftsmanship" className="rounded-lg shadow-2xl" />
                <div className="absolute -bottom-10 -right-10 bg-brand-900 text-white p-8 rounded-lg shadow-xl hidden lg:block">
                  <p className="text-4xl font-bold text-accent-500 mb-1">25+</p>
                  <p className="text-sm tracking-widest uppercase">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h4 className="text-brand-500 font-bold uppercase tracking-wider mb-2">Who We Are</h4>
              <h2 className="text-4xl font-bold text-brand-900 mb-6 leading-tight">Professional Manufacturer of High-End Outdoor Structures</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                We specialize in bioclimatic pergolas, retractable roofs, and outdoor shading systems. 
                As a dedicated OEM/ODM partner for global brands, we offer the same premium quality directly to project managers and distributors.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "ISO 9001:2015 Certified Manufacturing",
                  "15,000 sqm Production Facility",
                  "Automated CNC & Powder Coating Lines",
                  "Exporting to 40+ Countries"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-900 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                      <Star size={14} fill="currentColor" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink to="/factory" className="text-brand-600 font-bold border-b-2 border-brand-600 pb-1 hover:text-brand-800 hover:border-brand-800 transition-colors">
                Learn More About Our Factory
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Grid Style */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Core Series</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NavLink to="/products" className="group block">
              <div className="relative h-[450px] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://picsum.photos/id/152/800/1000" 
                  alt="Bioclimatic Pergola" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors">Bioclimatic Pergolas</h3>
                  <p className="text-slate-300 text-sm">Motorized louver systems for all-weather control.</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/products" className="group block">
              <div className="relative h-[450px] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://picsum.photos/id/29/800/1000" 
                  alt="Retractable Roof" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors">Retractable Roofs</h3>
                  <p className="text-slate-300 text-sm">PVC fabric systems for large commercial spans.</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/products" className="group block">
              <div className="relative h-[450px] overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://picsum.photos/id/433/800/1000" 
                  alt="Outdoor Blinds" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-500 transition-colors">Outdoor Blinds</h3>
                  <p className="text-slate-300 text-sm">Windproof zip screens for privacy and shade.</p>
                </div>
              </div>
            </NavLink>
          </div>
          
          <div className="text-center mt-12">
            <NavLink to="/products" className="inline-block border border-brand-900 text-brand-900 px-8 py-3 rounded hover:bg-brand-900 hover:text-white transition-colors font-semibold tracking-wide uppercase text-sm">
              View Full Catalog
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us Icons */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="text-center group">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 transition-colors">
                 <Shield className="text-brand-900 group-hover:text-accent-500 transition-colors" size={32} />
               </div>
               <h3 className="font-bold text-brand-900 mb-2">10-Year Warranty</h3>
               <p className="text-sm text-slate-500">On all aluminum structures</p>
             </div>
             <div className="text-center group">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 transition-colors">
                 <Truck className="text-brand-900 group-hover:text-accent-500 transition-colors" size={32} />
               </div>
               <h3 className="font-bold text-brand-900 mb-2">Global Shipping</h3>
               <p className="text-sm text-slate-500">Door-to-door delivery</p>
             </div>
             <div className="text-center group">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 transition-colors">
                 <Settings className="text-brand-900 group-hover:text-accent-500 transition-colors" size={32} />
               </div>
               <h3 className="font-bold text-brand-900 mb-2">Custom Engineering</h3>
               <p className="text-sm text-slate-500">Tailored to your site</p>
             </div>
             <div className="text-center group">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-50 transition-colors">
                 <Users className="text-brand-900 group-hover:text-accent-500 transition-colors" size={32} />
               </div>
               <h3 className="font-bold text-brand-900 mb-2">Factory Direct</h3>
               <p className="text-sm text-slate-500">No middleman markup</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
