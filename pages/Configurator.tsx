import React, { useState } from 'react';
import { PergolaSize, PergolaMaterial } from '../types';
import { Check, Info, ArrowRight } from 'lucide-react';

const Configurator: React.FC = () => {
  const [size, setSize] = useState<PergolaSize>(PergolaSize.SIZE_3X3);
  const [material, setMaterial] = useState<PergolaMaterial>(PergolaMaterial.ALUMINUM);
  const [color, setColor] = useState<'Anthracite' | 'White' | 'WoodEffect'>('Anthracite');
  const [addons, setAddons] = useState<string[]>([]);

  const toggleAddon = (addon: string) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter(a => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const getPriceEstimate = () => {
    let base = 1200;
    if (size === PergolaSize.SIZE_3X4) base = 1800;
    if (size === PergolaSize.SIZE_4X4) base = 2500;
    if (size === PergolaSize.SIZE_CUSTOM) base = 3000;

    if (material === PergolaMaterial.WOOD) base += 500;
    
    const addonsCost = addons.length * 300;
    return base + addonsCost;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Visual Preview (Left/Top) */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm p-4 h-[500px] relative overflow-hidden flex items-center justify-center border border-slate-200">
              <img 
                src={`https://picsum.photos/seed/${size}${color}/1200/800`} 
                alt="Configurator Preview" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                <h3 className="font-bold text-brand-900 mb-1">Live Preview</h3>
                <p className="text-xs text-slate-500">
                  {size} • {material} • {color}
                </p>
                {addons.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {addons.map(a => (
                      <span key={a} className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">{a}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controls (Right/Bottom) */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-brand-900 mb-6">Build Your Pergola</h2>
              
              {/* Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">Dimensions</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(PergolaSize).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                        size === s 
                          ? 'border-brand-500 bg-brand-50 text-brand-700 font-bold' 
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                 <label className="block text-sm font-medium text-slate-700 mb-3">Structure Material</label>
                 <select 
                    value={material}
                    onChange={(e) => setMaterial(e.target.value as PergolaMaterial)}
                    className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                 >
                   {Object.values(PergolaMaterial).map(m => (
                     <option key={m} value={m}>{m}</option>
                   ))}
                 </select>
              </div>

              {/* Color */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">Finish Color</label>
                <div className="flex gap-4">
                  {[
                    { name: 'Anthracite', hex: '#374151' },
                    { name: 'White', hex: '#f3f4f6' },
                    { name: 'WoodEffect', hex: '#92400e' }
                  ].map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name as any)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        color === c.name ? 'border-brand-500 scale-110' : 'border-slate-200'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {color === c.name && <Check size={16} className={c.name === 'White' ? 'text-black' : 'text-white'} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">Accessories (+ $300 ea)</label>
                <div className="space-y-2">
                  {['LED Lighting Kit', 'Motorized Zip Screens', 'Rain Sensor', 'Infrared Heater'].map(item => (
                    <label key={item} className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50">
                      <input 
                        type="checkbox" 
                        checked={addons.includes(item)}
                        onChange={() => toggleAddon(item)}
                        className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                      />
                      <span className="text-sm text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="border-t border-slate-100 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-500 text-sm">Estimated Factory Price</span>
                  <span className="text-2xl font-bold text-brand-900">${getPriceEstimate()}</span>
                </div>
                <button className="w-full bg-brand-900 text-white py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
                  Request Formal Quote <ArrowRight size={18} />
                </button>
                <p className="text-xs text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                  <Info size={12} /> Excludes shipping & VAT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;