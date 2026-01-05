import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronRight, Search, Menu, X, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'All', name: 'All Products' },
    { id: 'Pergola', name: 'Bioclimatic Pergolas' },
    { id: 'Retractable', name: 'Retractable Roofs' },
    { id: 'Carport', name: 'Aluminum Carports' },
    { id: 'Blinds', name: 'Zip Screen Blinds' },
    { id: 'Furniture', name: 'Outdoor Furniture' },
  ];

  const products: Product[] = [
    {
      id: 'p1',
      name: 'HV-8001 Bio-Climate Pergola',
      category: 'Pergola',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/12/800/800',
      features: ['Motorized Louvers', 'Rain Sensor', 'LED Lighting'],
      description: 'Modern aluminum pergola with adjustable louvers for perfect climate control.'
    },
    {
      id: 'p2',
      name: 'HV-8002 Wall-Mounted Pergola',
      category: 'Pergola',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/16/800/800',
      features: ['Space Saving', 'Seamless Integration', 'Waterproof'],
      description: 'Extension model perfect for patios and terrace connections.'
    },
    {
      id: 'p3',
      name: 'HV-9001 Retractable Roof System',
      category: 'Retractable',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/29/800/800',
      features: ['PVC Fabric', 'Heavy Duty Motor', 'Large Span'],
      description: 'Full retraction capabilities for maximum sky visibility.'
    },
    {
      id: 'p4',
      name: 'HV-7001 Modern Carport',
      category: 'Carport',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/56/800/800',
      features: ['Polycarbonate Roof', 'UV Protection', 'High Snow Load'],
      description: 'Protect your vehicle with our stylish aluminum carport structures.'
    },
    {
      id: 'p5',
      name: 'HV-6001 Zip Screen',
      category: 'Blinds',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/88/800/800',
      features: ['Windproof Grade 6', 'Privacy', 'Insect Protection'],
      description: 'Vertical side screens compatible with all pergola models.'
    },
    {
      id: 'p6',
      name: 'HV-5001 Lounge Set',
      category: 'Furniture',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/102/800/800',
      features: ['Quick Dry Foam', 'Teak Accents', 'Sunbrella Fabric'],
      description: 'Luxury outdoor sofa set for hotel and resort projects.'
    },
    {
      id: 'p7',
      name: 'HV-8003 Free Standing Pergola',
      category: 'Pergola',
      priceRange: 'Factory Quote',
      image: 'https://picsum.photos/id/128/800/800',
      features: ['Modular Design', 'Integrated Drainage', 'Custom Sizes'],
      description: 'The flagship freestanding model for gardens and poolsides.'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory || (activeCategory === 'Pergola' && p.category === 'Pergola')); // Simple filter logic

  return (
    <div className="bg-white min-h-screen">
      {/* Page Banner */}
      <div className="relative h-[300px] md:h-[400px] bg-slate-900">
        <img 
          src="https://picsum.photos/id/193/1920/600" 
          alt="Product Category" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">Our Products</h1>
          <div className="flex items-center gap-2 text-sm md:text-base text-slate-300">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <ChevronRight size={14} />
            <span>Products</span>
            {activeCategory !== 'All' && (
              <>
                <ChevronRight size={14} />
                <span>{categories.find(c => c.id === activeCategory)?.name}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-1/4 shrink-0">
            <div className="bg-slate-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold text-brand-900 mb-6 border-b border-slate-200 pb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left flex justify-between items-center group ${
                        activeCategory === cat.id ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-brand-600'
                      }`}
                    >
                      <span className="py-1">{cat.name}</span>
                      {activeCategory === cat.id && <ChevronRight size={16} />}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-12 bg-brand-900 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-2">Need a Catalog?</h4>
                <p className="text-sm text-slate-300 mb-4">Download our latest 2024 PDF brochure with full specifications.</p>
                <button className="bg-white text-brand-900 px-4 py-2 text-sm font-bold rounded w-full hover:bg-slate-100 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </aside>

          {/* Mobile Categories Filter */}
          <div className="lg:hidden mb-8">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex justify-between items-center bg-slate-50 p-4 rounded-lg border border-slate-200 text-brand-900 font-semibold"
            >
              <span>{categories.find(c => c.id === activeCategory)?.name || 'Categories'}</span>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            
            {isMobileMenuOpen && (
              <div className="mt-2 bg-white border border-slate-100 rounded-lg shadow-xl overflow-hidden">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 border-b border-slate-50 last:border-0 ${
                      activeCategory === cat.id ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-500 text-sm">Showing {filteredProducts.length} results</p>
              <div className="flex items-center gap-2 border border-slate-200 rounded px-3 py-1.5">
                <Search size={16} className="text-slate-400" />
                <input type="text" placeholder="Search..." className="outline-none text-sm text-slate-700 w-32 md:w-48" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-slate-100 aspect-[4/3] mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <NavLink 
                        to="/contact" 
                        className="bg-white text-brand-900 px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-accent-500 hover:text-white"
                      >
                        Inquire Now
                      </NavLink>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{product.category} Series</div>
                    <h3 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <NavLink to="/contact" className="mt-auto flex items-center gap-1 text-sm font-bold text-brand-700 hover:gap-2 transition-all">
                      View Details <ArrowRight size={14} />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-brand-900 bg-brand-900 text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-brand-900 hover:text-brand-900 transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-brand-900 hover:text-brand-900 transition-colors">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-brand-900 hover:text-brand-900 transition-colors"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
