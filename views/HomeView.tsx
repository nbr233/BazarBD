
import React from 'react';
import { CATEGORIES, MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';
import { Star, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
  onProductClick: (product: Product) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onProductClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-700">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-16">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-600/20 text-orange-500 text-xs font-bold mb-4 uppercase tracking-widest">
            Eid Specials Now Live
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            The Biggest Market in <span className="text-orange-500">Bangladesh</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-lg">
            Shop from verified sellers with 100% genuine products. Experience super-fast delivery with 
            Cash on Delivery across the country.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-600/20">
              Shop Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur px-8 py-3 rounded-xl font-bold transition-all">
              See Offers
            </button>
          </div>
        </div>
        
        {/* Background blobs for visual flair */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/20 to-transparent"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {[
          { icon: <Zap className="text-orange-500" />, title: 'Fast Delivery', desc: 'Across 64 districts' },
          { icon: <ShieldCheck className="text-green-500" />, title: 'Buyer Protection', desc: '100% money back' },
          { icon: <Star className="text-yellow-500" />, title: 'Top Rated', desc: 'Verified vendors' },
          { icon: <TrendingUp className="text-blue-500" />, title: 'Easy Returns', desc: '7 days return' }
        ].map((badge, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            {badge.icon}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-sm">{badge.title}</h4>
              <p className="text-xs text-slate-500">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <p className="text-slate-500">Find what you need in seconds</p>
          </div>
          <button className="text-orange-600 font-semibold text-sm hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <p className="font-bold text-slate-700 group-hover:text-orange-600">{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Flash Sale / Featured Products */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Flash Sale</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-slate-500">Ending in:</span>
              <div className="flex gap-1">
                {['02', '14', '59'].map((t, i) => (
                  <span key={i} className="bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-bold text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <button className="text-orange-600 font-semibold text-sm hover:underline">See All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map(product => (
            <div 
              key={product.id}
              onClick={() => onProductClick(product)}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.discountPrice && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                {/* Fixed: product.category -> product.categoryId */}
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{product.categoryId}</p>
                <h3 className="font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <div className="mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-slate-900">
                      ৳{product.discountPrice || product.price}
                    </span>
                    {product.discountPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ৳{product.price}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">({product.reviewsCount})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeView;