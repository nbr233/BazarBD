
import React, { useState } from 'react';
import { 
  Store, 
  MapPin, 
  CreditCard, 
  Truck, 
  FileText, 
  ShieldCheck, 
  ArrowLeft, 
  Camera, 
  Upload, 
  Save,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ShopSetupViewProps {
  onBack: () => void;
}

const ShopSetupView: React.FC<ShopSetupViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success'>('idle');

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }, 1500);
  };

  const tabs = [
    { id: 'general', label: 'General Info', icon: <Store className="w-4 h-4" /> },
    { id: 'business', label: 'Business Verification', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'payouts', label: 'Payout Settings', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'logistics', label: 'Logistics & Shipping', icon: <Truck className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Shop Configuration</h1>
            <p className="text-sm text-slate-500">Manage your brand presence and business details</p>
          </div>
        </div>
        <button 
          onClick={handleSave}
          disabled={saveStatus !== 'idle'}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg ${
            saveStatus === 'success' 
              ? 'bg-emerald-600 text-white shadow-emerald-600/20' 
              : 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-600/20'
          }`}
        >
          {saveStatus === 'idle' && <><Save className="w-4 h-4" /> Save Changes</>}
          {saveStatus === 'saving' && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
          {saveStatus === 'success' && <><CheckCircle2 className="w-4 h-4" /> Saved Successfully</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Tabs */}
        <aside className="lg:col-span-3 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 space-y-6">
          
          {activeTab === 'general' && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 space-y-8">
                {/* Logo & Cover */}
                <div className="relative">
                  <div className="h-40 w-full bg-slate-100 rounded-3xl overflow-hidden relative">
                    <img src="https://picsum.photos/seed/shop-cover/1200/400" className="w-full h-full object-cover opacity-50" alt="Cover" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors">
                      <Camera className="w-8 h-8 text-slate-400" />
                    </button>
                  </div>
                  <div className="absolute -bottom-10 left-8">
                    <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-xl relative">
                      <div className="w-full h-full bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-100">
                        <img src="https://picsum.photos/seed/shop-logo/200/200" alt="Logo" />
                        <button className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors group">
                          <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Shop Display Name</label>
                    <input type="text" defaultValue="Fashion Hub BD" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Support Email</label>
                    <input type="email" defaultValue="support@fashionhub.com" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Shop Description / Bio</label>
                    <textarea rows={4} defaultValue="Premium quality clothing and accessories for the modern Bangladeshi lifestyle." className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-medium text-sm" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-8">
              <div className="p-4 bg-emerald-50 rounded-2xl flex gap-4 items-start border border-emerald-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">Verified Seller Status</h4>
                  <p className="text-xs text-emerald-700">Your documents were verified on Jan 10, 2024. You have full platform access.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Trade License ID</label>
                    <input type="text" defaultValue="TR-99210-BD" disabled className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-bold cursor-not-allowed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">NID / Smart Card</label>
                    <input type="text" defaultValue="552 109 2911" disabled className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-bold cursor-not-allowed" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Uploaded Documents</p>
                  {['Trade_License_FashionHub.pdf', 'NID_Back_Front.png'].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold text-slate-600">{doc}</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                  ))}
                  <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-bold hover:border-orange-200 hover:text-orange-500 transition-all flex items-center justify-center gap-2">
                    <Upload className="w-4 h-4" /> Replace Documents
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payouts' && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-600" /> Receiving Account
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'bkash', label: 'bKash Merchant', color: 'bg-pink-50 border-pink-100 text-pink-700' },
                    { id: 'bank', label: 'Bank Transfer', color: 'bg-blue-50 border-blue-100 text-blue-700' },
                    { id: 'nagad', label: 'Nagad Business', color: 'bg-orange-50 border-orange-100 text-orange-700' }
                  ].map(method => (
                    <button 
                      key={method.id}
                      className={`p-4 rounded-2xl border text-center font-black text-[10px] uppercase tracking-widest transition-all ${
                        method.id === 'bkash' ? method.color + ' ring-2 ring-pink-500 ring-offset-2' : 'bg-slate-50 border-slate-100 text-slate-400'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">bKash Account Number</label>
                      <input type="text" defaultValue="01712-XXXXXX" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Account Holder Name</label>
                      <input type="text" defaultValue="Fashion Hub BD" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-500 leading-tight italic">
                        All payouts are processed on a weekly basis (Sunday morning). Minimum withdrawable amount is ৳1,000.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logistics' && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-8">
              <div className="space-y-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" /> Pickup Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Warehouse Address</label>
                    <input type="text" defaultValue="Block D, Road 4, Mirpur 12" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">City / District</label>
                    <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold appearance-none">
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Sylhet</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-600" /> Shipping Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Base Shipping Rate</p>
                    <div className="flex items-center gap-4">
                      <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">৳</span>
                        <input type="number" defaultValue="60" className="w-full p-3 pl-8 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                      </div>
                      <span className="text-xs text-slate-500">Standard</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Free Shipping Threshold</p>
                    <div className="flex items-center gap-4">
                      <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">৳</span>
                        <input type="number" defaultValue="2000" className="w-full p-3 pl-8 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                      </div>
                      <span className="text-xs text-slate-500 italic">Off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default ShopSetupView;
