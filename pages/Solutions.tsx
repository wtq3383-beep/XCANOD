import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const topics = [
    { id: 'modern-aesthetic', title: "Modern Aesthetics", desc: "Minimalist designs for contemporary homes." },
    { id: 'durable-pergola', title: "Durable & Easy Install", desc: "Built to last with 6063-T5 Aluminum." },
    { id: 'low-maintenance', title: "Low Maintenance", desc: "Rust-proof and fade-resistant solutions." },
  ];

  return (
    <div className="bg-slate-50 py-16 min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-brand-900 mb-8 text-center">Problem Solving Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map(topic => (
            <NavLink 
              key={topic.id} 
              to={`/solution/${topic.id}`}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
            >
              <h2 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-accent-500 transition-colors">{topic.title}</h2>
              <p className="text-slate-600 mb-4">{topic.desc}</p>
              <span className="text-sm font-bold text-brand-700 flex items-center gap-1">
                Read Guide <ArrowRight size={16} />
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;