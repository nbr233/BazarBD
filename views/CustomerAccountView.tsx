
import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Package, 
  Heart, 
  MapPin, 
  Settings, 
  LogOut, 
  ChevronRight, 
  CreditCard, 
  ShieldCheck,
  ExternalLink,
  Plus,
  Trash2,
  ShoppingCart
} from 'lucide-react';
import { MOCK_USER, MOCK_PRODUCTS } from '../constants';
import { OrderStatus } from '../types';

interface CustomerAccountViewProps {
  wishlist: string[];
  onAddToCart: (id: string) => void;
  onRemoveFromWishlist: (id: string) => void;
}

const CustomerAccountView: React.FC<CustomerAccountViewProps> = ({ wishlist, onAddToCart, onRemoveFromWishlist }) => {
  const [activeTab, setActiveTab] = useState('orders');

  const wishlistProducts = MOCK_PRODUCTS.filter(p => wishlist.includes(p.id));

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: <UserIcon className="w-5 h-5" /> },
    { id: 'orders', label: 'My Orders', icon: <Package className="w-5 h-5" /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart className="w-5 h-5" /> },
    { id: 'addresses', label: 'Address Book', icon: <MapPin className="w-5 h-5" /> },
    { id: 'payment', label: 'Saved Cards', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'security', label: 'Privacy & Security', icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="lg:w-72 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
              <img src={MOCK_USER.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 leading-tight">{MOCK_USER.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{MOCK_USER.email}</p>
            </div>
          </div>

          <nav className="bg-white rounded-3xl border border-slate-100 overflow-hidden py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-6 py-4 transition-all ${
                  activeTab === item.id 
                    ? 'text-orange-600 bg-orange-50 font-bold' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === item.id ? 'translate-x-1' : ''}`} />
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-50">
              <button className="w-full flex items-center gap-3 px-6 py-4 text-rose-600 hover:bg-rose-50 transition-all text-sm font-bold">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 space-y-6">
          
          {/* Dashboard Header */}
          <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 capitalize tracking-tight">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h2>
            {activeTab === 'addresses' && (
              <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add New Address
              </button>
            )}
          </div>

          {/* Dynamic Tabs */}
          <div className="space-y-6">
            
            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl border border-slate-100 p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                    <input type="text" defaultValue={MOCK_USER.name} className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Phone Number</label>
                    <input type="text" defaultValue={MOCK_USER.phone} className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                    <input type="email" defaultValue={MOCK_USER.email} className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                </div>
                <div className="pt-4 flex gap-4">
                  <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">Save Changes</button>
                  <button className="text-slate-500 font-bold px-8 py-3">Cancel</button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-4">
                {[
                  { id: '#ORD-2024-991', date: 'Jan 15, 2024', status: OrderStatus.PROCESSING, total: '৳12,500', items: 3 },
                  { id: '#ORD-2024-882', date: 'Dec 28, 2023', status: OrderStatus.DELIVERED, total: '৳4,200', items: 1 },
                  { id: '#ORD-2024-773', date: 'Dec 12, 2023', status: OrderStatus.CANCELLED, total: '৳2,450', items: 2 },
                ].map((order, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="flex gap-4 items-center">
                      <div className="p-4 bg-slate-50 rounded-2xl">
                        <Package className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{order.id}</h4>
                        <p className="text-xs text-slate-500">{order.date} • {order.items} Items</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter ${
                        order.status === OrderStatus.DELIVERED ? 'bg-emerald-100 text-emerald-700' :
                        order.status === OrderStatus.CANCELLED ? 'bg-rose-100 text-rose-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                      <p className="text-lg font-black text-slate-900">{order.total}</p>
                    </div>
                    <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-600">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistProducts.length > 0 ? wishlistProducts.map(p => (
                  <div key={p.id} className="bg-white p-4 rounded-3xl border border-slate-100 flex gap-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{p.name}</h4>
                        <p className="text-xs text-orange-600 font-black mt-1">৳{p.discountPrice || p.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => onAddToCart(p.id)}
                          className="flex-1 bg-slate-900 text-white text-[10px] font-bold py-2 rounded-lg flex items-center justify-center gap-1.5"
                        >
                          <ShoppingCart className="w-3 h-3" /> Add
                        </button>
                        <button 
                          onClick={() => onRemoveFromWishlist(p.id)}
                          className="p-2 border border-slate-100 hover:bg-rose-50 hover:text-rose-600 rounded-lg text-slate-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-2 py-12 text-center space-y-4">
                    <Heart className="w-12 h-12 text-slate-200 mx-auto" />
                    <p className="text-slate-400 font-medium">Your wishlist is empty.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { type: 'Home', address: 'Apartment 4B, Road 27, Dhanmondi', district: 'Dhaka', zip: '1209' },
                  { type: 'Work', address: 'Level 12, Banani Tower, 11th Street', district: 'Dhaka', zip: '1213' }
                ].map((addr, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 space-y-4 relative group">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{addr.type}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{addr.address}</p>
                      <p className="text-xs text-slate-500 mt-1">{addr.district}, {addr.zip}</p>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <button className="text-xs font-bold text-blue-600 hover:underline">Edit</button>
                      <button className="text-xs font-bold text-rose-600 hover:underline">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerAccountView;
