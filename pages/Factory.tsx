import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle, Zap, ShieldCheck, Box } from 'lucide-react';

const Factory: React.FC = () => {
  const data = [
    { name: '2020', production: 3500, capacity: 4000 },
    { name: '2021', production: 4200, capacity: 4500 },
    { name: '2022', production: 4800, capacity: 5500 },
    { name: '2023', production: 5000, capacity: 6000 },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-brand-900 mb-4">Inside Our Facility</h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            State-of-the-art manufacturing across 15,000 sqm. We combine automated precision with artisanal craftsmanship.
          </p>
        </div>
      </div>

      {/* Production Stats */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-900 mb-6">Growing Capacity, Consistent Quality</h2>
            <p className="text-slate-600 mb-8">
              Our continuous investment in CNC machinery and automated welding lines has allowed us to increase production capacity by 40% over the last 3 years while maintaining a defect rate below 0.1%.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-4 rounded border-l-4 border-brand-500">
                <div className="text-3xl font-bold text-brand-900">5000+</div>
                <div className="text-sm text-slate-500">Sets/Year</div>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-accent-500">
                <div className="text-3xl font-bold text-brand-900">150+</div>
                <div className="text-sm text-slate-500">Skilled Workers</div>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-brand-500">
                <div className="text-3xl font-bold text-brand-900">100%</div>
                <div className="text-sm text-slate-500">Material QC</div>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-accent-500">
                <div className="text-3xl font-bold text-brand-900">ISO</div>
                <div className="text-sm text-slate-500">9001:2015</div>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-full bg-white shadow-lg p-6 rounded-xl border border-slate-100">
             <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase">Annual Production Output</h3>
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="production" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Actual Output" />
                  <Bar dataKey="capacity" fill="#e2e8f0" radius={[4, 4, 0, 0]} name="Max Capacity" />
                </BarChart>
             </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-brand-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Production Process</h2>
          <div className="relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-700 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: <CheckCircle size={32} />, step: "01", title: "Raw Material QC", desc: "Every batch of 6063-T5 aluminum is tested for hardness and composition." },
                { icon: <Zap size={32} />, step: "02", title: "CNC Machining", desc: "Automated cutting and drilling with ±0.5mm precision tolerance." },
                { icon: <ShieldCheck size={32} />, step: "03", title: "Powder Coating", desc: "80μm+ thickness AkzoNobel coating for extreme weather resistance." },
                { icon: <Box size={32} />, step: "04", title: "Pre-Assembly", desc: "Random sampling assembly test before customized packaging." }
              ].map((item, i) => (
                <div key={i} className="bg-brand-800 p-8 rounded-xl border border-brand-700 hover:border-accent-500 transition-colors">
                  <div className="text-accent-500 font-bold text-4xl mb-4 opacity-30">{item.step}</div>
                  <div className="mb-4 text-white">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Factory Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://picsum.photos/id/1/400/400" alt="Factory Machine" className="rounded-lg w-full h-full object-cover hover:opacity-90 transition-opacity" />
          <img src="https://picsum.photos/id/201/400/400" alt="Factory Worker" className="rounded-lg w-full h-full object-cover hover:opacity-90 transition-opacity" />
          <img src="https://picsum.photos/id/119/400/400" alt="Welding" className="rounded-lg w-full h-full object-cover hover:opacity-90 transition-opacity" />
          <img src="https://picsum.photos/id/180/400/400" alt="Inventory" className="rounded-lg w-full h-full object-cover hover:opacity-90 transition-opacity" />
        </div>
      </section>
    </div>
  );
};

export default Factory;