
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { 
  ShoppingBag, 
  Search, 
  ShoppingCart, 
  User as UserIcon, 
  LayoutDashboard, 
  ShieldCheck,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  currentUser: User | null;
  cartCount: number;
  onNavigate: (view: string) => void;
  onSwitchRole: (role: UserRole) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, cartCount, onNavigate, onSwitchRole }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              BazaarBD
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for products, brands..." 
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('architecture')} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">
              System Design
            </button>
            
            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-slate-600 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Role/Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 pl-2 border-l border-slate-200"
              >
                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-transparent hover:ring-orange-200 transition-all">
                  <img src={currentUser?.avatar || 'https://picsum.photos/seed/user/100/100'} alt="Profile" />
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-xs font-bold leading-tight">{currentUser?.name}</p>
                  <p className="text-[10px] text-slate-500">{currentUser?.role}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                  <div className="px-4 py-2 border-b border-slate-50">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Switch Role</p>
                  </div>
                  <button onClick={() => { onSwitchRole(UserRole.CUSTOMER); onNavigate('account'); setIsProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors text-left">
                    <UserIcon className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">Buyer Account</span>
                  </button>
                  <button onClick={() => { onSwitchRole(UserRole.SELLER); onNavigate('seller'); setIsProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors text-left">
                    <LayoutDashboard className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">Seller Center</span>
                  </button>
                  <button onClick={() => { onSwitchRole(UserRole.ADMIN); onNavigate('admin'); setIsProfileOpen(false); }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors text-left">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span className="text-sm">Admin Panel</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 outline-none"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm font-medium">
              <ShoppingBag className="w-4 h-4" /> Home
            </button>
            <button onClick={() => { onNavigate('account'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm font-medium">
              <UserIcon className="w-4 h-4" /> Profile
            </button>
            <button onClick={() => { onNavigate('cart'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm font-medium">
              <ShoppingCart className="w-4 h-4" /> Cart ({cartCount})
            </button>
            <button onClick={() => { onNavigate('seller'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-sm font-medium">
              <LayoutDashboard className="w-4 h-4" /> Seller
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
