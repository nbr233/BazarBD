
import React from 'react';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">BazaarBD</span>
          </div>
          <p className="text-sm leading-relaxed">
            The leading e-commerce platform in Bangladesh, bringing millions of products to your doorstep.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Customer Care</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-white cursor-pointer transition-colors">How to Buy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Earn with Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Sell on BazaarBD</li>
            <li className="hover:text-white cursor-pointer transition-colors">Code of Conduct</li>
            <li className="hover:text-white cursor-pointer transition-colors">Join the Affiliate Program</li>
            <li className="hover:text-white cursor-pointer transition-colors">Our Delivery Partners</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold mb-4">Download Our App</h4>
          <p className="text-sm">Experience the best shopping app in Bangladesh.</p>
          <div className="space-y-3">
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex items-center gap-3 cursor-pointer hover:bg-slate-700 transition-all">
              <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Get it on</p>
                <p className="text-white font-bold leading-none">Google Play</p>
              </div>
            </div>
            <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex items-center gap-3 cursor-pointer hover:bg-slate-700 transition-all">
              <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest leading-none mb-1">Download on the</p>
                <p className="text-white font-bold leading-none">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-slate-800 text-center text-xs">
        <p>&copy; 2024 BazaarBD Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
