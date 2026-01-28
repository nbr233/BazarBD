
import React, { useState } from 'react';
import { 
  Package, DollarSign, ShoppingCart, Users, Plus, 
  BarChart3, Settings, Bell, Search, MoreVertical, 
  ArrowUpRight, ArrowDownRight, Printer, CheckCircle
} from 'lucide-react';

const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-in fade-in duration-500">
      
      {/* 1. Functional Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Merchant Portal</h1>
          <p className="text-slate-500 text-sm font-medium">Store: Fashion Hub BD • Status: <span className="text-emerald-600">Active</span></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">
            <Settings className="w-4 h-4" /> Shop Setup
          </button>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-700 shadow-xl shadow-orange-600/20 transition-all active:scale-95">
            <Plus className="w-4 h-4" /> New Listing
          </button>
        </div>
      </div>

      {/* 2. Real-time Metrics (Functional Mock) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Earnings', value: '৳125,430', change: '+12%', isUp: true, icon: <DollarSign className="text-emerald-600" />, bg: 'bg-emerald-50' },
          { label: 'Open Orders', value: '18', change: '+4', isUp: true, icon: <ShoppingCart className="text-orange-600" />, bg: 'bg-orange-50' },
          { label: 'Out of Stock', value: '3', change: 'Alert', isUp: false, icon: <Package className="text-rose-600" />, bg: 'bg-rose-50' },
          { label: 'Customer Rating', value: '4.8', change: 'Top 5%', isUp: true, icon: <Users className="text-blue-600" />, bg: 'bg-blue-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.bg} p-3 rounded-2xl`}>{stat.icon}</div>
              <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-tighter ${stat.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.change}
              </div>
            </div>
            <p className="text-slate-400 text-xs font-bold mb-1 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3. Order Management (Action Mapped) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <div className="flex gap-4">
              {['Orders', 'Inventory', 'Reviews'].map(t => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t.toLowerCase())}
                  className={`text-sm font-bold pb-2 transition-all border-b-2 ${activeTab === t.toLowerCase() ? 'border-orange-600 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  <th className="px-6 py-4">Order Details</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { id: '#BD-921', customer: 'Tanvir Hossain', amount: '৳4,500', status: 'Pending' },
                  { id: '#BD-920', customer: 'Sumi Akter', amount: '৳1,200', status: 'Processing' },
                  { id: '#BD-919', customer: 'Rakib Ahmed', amount: '৳8,900', status: 'Shipped' }
                ].map((order, i) => (
                  <tr key={i} className="group hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-900">{order.id}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{order.customer}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-black text-slate-900">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-tighter ${
                        order.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-orange-600 hover:border-orange-200 shadow-sm transition-all" title="Print Invoice">
                          <Printer className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-emerald-600 hover:border-emerald-200 shadow-sm transition-all" title="Confirm Shipment">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Financial Ledger / Wallet */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-8 shadow-2xl shadow-slate-900/40">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Withdrawable Balance</p>
            <h2 className="text-4xl font-black">৳42,850</h2>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-orange-600/20">
              Transfer to Bank / bKash
            </button>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold transition-all border border-white/10">
              View Sales History
            </button>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Commission Logic</h4>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Platform Fee</span>
              <span className="font-bold">5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Payment Processing</span>
              <span className="font-bold">2.5%</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl">
              <p className="text-[10px] text-slate-500 italic">Funds are released 48 hours after customer delivery confirmation to prevent fraud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
