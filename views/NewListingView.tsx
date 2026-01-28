
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Sparkles, 
  Tag, 
  DollarSign, 
  Package, 
  Info,
  CheckCircle2,
  Save,
  HelpCircle,
  Eye
} from 'lucide-react';
import { CATEGORIES } from '../constants';

interface NewListingViewProps {
  onBack: () => void;
}

const NewListingView: React.FC<NewListingViewProps> = ({ onBack }) => {
  const [images, setImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountPrice: '',
    category: '1',
    stock: '',
    sku: '',
  });

  const handleAiGenerate = () => {
    if (!formData.name) return;
    setIsGenerating(true);
    // Mocking Gemini AI API Call
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        description: `Experience the premium quality of ${prev.name}. This top-tier product is designed for high performance and durability, ensuring you get the best value for your money. Perfect for everyday use and special occasions alike.\n\nKey Features:\n• Premium Materials\n• Durable Construction\n• Modern Aesthetic\n• Easy to use and maintain.`,
      }));
      setIsGenerating(false);
    }, 2000);
  };

  const handleImageUpload = () => {
    // Mock image upload
    setImages(prev => [...prev, `https://picsum.photos/seed/${Date.now()}/600/400`]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create New Listing</h1>
            <p className="text-sm text-slate-500">Add a high-quality product to your store</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 shadow-xl shadow-orange-600/20 transition-all active:scale-95">
            <Save className="w-4 h-4" /> Publish Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Form Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 1: Basic Information */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Info className="w-5 h-5 text-orange-600" /> Basic Information
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Product Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Premium Cotton Shirt"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 font-bold placeholder:font-medium transition-all" 
                />
              </div>

              <div className="space-y-2 relative">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Product Description</label>
                  <button 
                    onClick={handleAiGenerate}
                    disabled={isGenerating || !formData.name}
                    className="flex items-center gap-1.5 text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full hover:bg-orange-100 transition-colors disabled:opacity-50"
                  >
                    <Sparkles className={`w-3 h-3 ${isGenerating ? 'animate-pulse' : ''}`} />
                    {isGenerating ? 'Gemini AI writing...' : 'Write with AI Assistant'}
                  </button>
                </div>
                <textarea 
                  rows={6} 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe your product's unique features, materials, and benefits..."
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 text-sm leading-relaxed" 
                />
              </div>
            </div>
          </div>

          {/* Section 2: Media */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-orange-600" /> Media & Images
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative aspect-square group">
                  <img src={img} className="w-full h-full object-cover rounded-2xl border border-slate-100" alt="Upload" />
                  <button 
                    onClick={() => removeImage(idx)}
                    className="absolute top-2 right-2 p-1.5 bg-white shadow-lg rounded-full text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {idx === 0 && <span className="absolute bottom-2 left-2 bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter">Cover</span>}
                </div>
              ))}
              
              {images.length < 8 && (
                <button 
                  onClick={handleImageUpload}
                  className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50/30 transition-all group"
                >
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white transition-colors">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Add Image</span>
                </button>
              )}
            </div>
            <p className="text-[10px] text-slate-400 font-medium italic">Max 8 images. 800x800px or larger recommended. PNG/JPG supported.</p>
          </div>

          {/* Section 3: Pricing & Inventory */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pricing */}
              <div className="space-y-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-orange-600" /> Pricing
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Base Price (BDT)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">৳</span>
                      <input 
                        type="number" 
                        placeholder="0.00"
                        className="w-full p-4 pl-8 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Discount Price (Optional)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">৳</span>
                      <input 
                        type="number" 
                        placeholder="0.00"
                        className="w-full p-4 pl-8 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="space-y-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-orange-600" /> Inventory
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Stock Quantity</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 50"
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">SKU (Stock Keeping Unit)</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="AUTO-GENERATED"
                        className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 font-mono font-bold text-xs" 
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase">Auto</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Categorization */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Tag className="w-5 h-5 text-orange-600" /> Organization
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Category</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 font-bold appearance-none">
                  {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tags (Max 5)</label>
                <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                  {['Cotton', 'Summer', 'Casual'].map(tag => (
                    <span key={tag} className="bg-white border border-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 flex items-center gap-1 shadow-sm">
                      {tag} <button className="text-slate-400 hover:text-rose-500">×</button>
                    </span>
                  ))}
                  <input type="text" placeholder="Add..." className="bg-transparent border-none outline-none text-[10px] font-bold w-16" />
                </div>
              </div>
            </div>
          </div>

          {/* Visibility & Status */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6 shadow-2xl shadow-slate-900/40">
            <h3 className="font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-500" /> Listing Status
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold">Active Visibility</p>
                  <p className="text-[10px] text-slate-400">Publicly visible after publish</p>
                </div>
                <div className="w-12 h-6 bg-orange-600 rounded-full relative flex-shrink-0">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-orange-500" />
                  <p className="text-[10px] font-bold text-slate-300 leading-tight uppercase tracking-wide">Publishing Checklist</p>
                </div>
                <ul className="space-y-2">
                  {[
                    { label: 'Minimum 3 images uploaded', done: images.length >= 3 },
                    { label: 'SEO description generated', done: formData.description.length > 50 },
                    { label: 'Price & Stock entered', done: true },
                    { label: 'Category assigned', done: true }
                  ].map((check, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] font-medium">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${check.done ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                        {check.done && <CheckCircle2 className="w-2 h-2 text-white" />}
                      </div>
                      <span className={check.done ? 'text-slate-300' : 'text-slate-500'}>{check.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewListingView;
