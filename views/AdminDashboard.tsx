
import React from 'react';
import { 
  ShieldAlert, 
  Users, 
  Store, 
  CheckCircle2, 
  AlertCircle,
  BarChart3,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Platform Overview</h1>
        <p className="text-slate-500 text-sm">Real-time performance and system health across BazaarBD</p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-400 text-sm font-medium mb-1">Total Platform GMV</p>
            <h2 className="text-3xl font-black mb-4">৳2.4M</h2>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <TrendingUp className="w-4 h-4" /> +18.4% vs last month
            </div>
          </div>
          <BarChart3 className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5" />
        </div>
        
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm font-medium mb-1">Total Active Sellers</p>
          <h2 className="text-3xl font-black text-slate-900 mb-4">1,452</h2>
          <div className="flex items-center gap-2 text-blue-500 text-xs font-bold">
            <Store className="w-4 h-4" /> 12 new requests today
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm font-medium mb-1">User Base</p>
          <h2 className="text-3xl font-black text-slate-900 mb-4">84,200</h2>
          <div className="flex items-center gap-2 text-purple-500 text-xs font-bold">
            <Users className="w-4 h-4" /> 420 active right now
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Verification Queue */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-orange-600" /> Seller Verification Queue
            </h3>
            <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-[10px] font-black uppercase">12 Pending</span>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { shop: 'Dhakaiya Crafts', owner: 'Mominul Islam', time: '2h ago', risk: 'Low' },
              { shop: 'Global Gadgets', owner: 'Sarah Jabin', time: '5h ago', risk: 'Medium' },
              { shop: 'Traditional Weaves', owner: 'Rafiqul Haque', time: '1d ago', risk: 'Low' }
            ].map((req, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                    {req.shop[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{req.shop}</h4>
                    <p className="text-xs text-slate-500">{req.owner} • {req.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"><CheckCircle2 className="w-5 h-5" /></button>
                  <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"><AlertCircle className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Logs & Reports */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">System Activity</h3>
          </div>
          <div className="p-6 space-y-6">
            {[
              { icon: <FileText className="text-blue-500" />, text: 'New commission report generated for Dec 2023', time: 'Just now' },
              { icon: <ShieldAlert className="text-rose-500" />, text: 'High cancellation rate detected for Seller #S402', time: '15m ago' },
              { icon: <MessageSquare className="text-emerald-500" />, text: 'Platform feedback summary received', time: '1h ago' },
              { icon: <Users className="text-purple-500" />, text: 'Bulk payout processed for 1,200 sellers', time: '3h ago' }
            ].map((log, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">{log.icon}</div>
                <div>
                  <p className="text-sm text-slate-700 leading-snug">{log.text}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
