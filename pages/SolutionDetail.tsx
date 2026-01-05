import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { CheckCircle, Star } from 'lucide-react';

// This acts as a database for the dynamic pages based on the prompt's strategy
const contentDB: Record<string, any> = {
  'modern-aesthetic': {
    title: "Modern Aesthetic Pergola Designs",
    subtitle: "Direct from XCANOD Factory",
    content: "Minimalist lines, neutral tones, and integrated lighting define our modern aesthetic collection. Perfect for contemporary villas.",
    points: ["Hidden gutter systems", "Matte powder coating finish", "Integrated LED strips"],
    image: "https://picsum.photos/id/13/1200/600",
    recommendation: "Bauhaus Series"
  },
  'durable-pergola': {
    title: "Durable & Easy-to-Install Pergolas",
    subtitle: "15-Year Warranty Promise",
    content: "Engineered with 6063-T5 Aluminum and stainless steel components. Our patented 'Quick-Lock' system allows for 50% faster installation.",
    points: ["Wind resistance up to 120km/h", "Salt spray tested for coastal use", "DIY-friendly assembly"],
    image: "https://picsum.photos/id/16/1200/600",
    recommendation: "X-Line Standard"
  },
  'low-maintenance': {
    title: "Top Rated Low-Maintenance Pergolas",
    subtitle: "Zero-Maintenance Aluminum Solutions",
    content: "Forget about sanding, staining, or painting. Our powder-coated aluminum pergolas require only a simple wash with water once a year.",
    points: ["Rust-proof construction", "Fade-resistant coating", "No rot or termite issues"],
    image: "https://picsum.photos/id/28/1200/600",
    recommendation: "Garden Series 3x4"
  }
};

const SolutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = contentDB[id || ''] || contentDB['modern-aesthetic'];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-96">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-xl text-accent-500 font-semibold">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-brand-900 mb-6">Why Choose XCANOD for {data.title}?</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {data.content}
            </p>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-8">
              <h3 className="font-bold text-brand-900 mb-4">Key Technical Advantages</h3>
              <ul className="space-y-4">
                {data.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-accent-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 mb-2">
               <Star className="text-yellow-400 fill-current" size={20} />
               <Star className="text-yellow-400 fill-current" size={20} />
               <Star className="text-yellow-400 fill-current" size={20} />
               <Star className="text-yellow-400 fill-current" size={20} />
               <Star className="text-yellow-400 fill-current" size={20} />
               <span className="text-slate-500 text-sm ml-2">(154 Factory Reviews)</span>
            </div>
            <p className="italic text-slate-500 border-l-4 border-slate-200 pl-4">
              "We installed the {data.recommendation} for our client in Munich. The installation speed was incredible compared to other suppliers." — Hans M., Contractor
            </p>
          </div>

          <div className="md:w-1/3">
            <div className="sticky top-24 bg-white shadow-lg rounded-xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-brand-900 mb-4">Recommended Product</h3>
              <div className="bg-slate-100 h-40 rounded-lg mb-4 overflow-hidden">
                <img src="https://picsum.photos/id/250/400/300" alt="Product" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-brand-700 mb-2">{data.recommendation}</h4>
              <p className="text-sm text-slate-500 mb-6">Factory direct pricing available.</p>
              <NavLink to="/configurator" className="block w-full text-center bg-brand-900 text-white py-3 rounded hover:bg-brand-700 transition-colors font-medium">
                Customize This Model
              </NavLink>
              <NavLink to="/contact" className="block w-full text-center text-brand-900 py-3 mt-2 hover:bg-slate-50 rounded transition-colors text-sm font-medium">
                Download Spec Sheet
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;