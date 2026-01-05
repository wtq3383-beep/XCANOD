import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 max-w-2xl mx-auto my-12">
      <h2 className="text-2xl font-bold text-brand-900 mb-2 text-center">Get a Factory Quote</h2>
      <p className="text-center text-slate-500 mb-8">Response within 24 hours. B2B & B2C inquiries welcome.</p>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="john@example.com" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Interest</label>
          <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none">
            <option>Residential Purchase (1-5 units)</option>
            <option>Commercial Project</option>
            <option>Wholesale / Distribution</option>
            <option>OEM Manufacturing</option>
          </select>
        </div>

        <div>
           <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
           <textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none h-32" placeholder="Tell us about your project requirements..."></textarea>
        </div>

        <button className="w-full bg-brand-900 text-white py-4 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-900/20">
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;