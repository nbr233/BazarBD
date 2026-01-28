
import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart, Share2, MapPin, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductDetailView: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'reviews' | 'specs'>('desc');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <span>Home</span>
        <span>/</span>
        {/* Fixed: product.category -> product.categoryId */}
        <span>{product.categoryId}</span>
        <span>/</span>
        <span className="text-slate-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Media */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img, i) => (
              <button 
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-24 h-24 rounded-xl border-2 overflow-hidden flex-shrink-0 ${i === selectedImage ? 'border-orange-500' : 'border-transparent'}`}
              >
                <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Actions & Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            {/* Fixed: product.category -> product.categoryId */}
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
              {product.categoryId}
            </span>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <ShieldCheck key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                ))}
                <span className="text-sm font-bold ml-1">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <button className="text-sm text-blue-600 font-medium hover:underline">{product.reviewsCount} Reviews</button>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-slate-900">
                  ৳{product.discountPrice || product.price}
                </span>
                {product.discountPrice && (
                  <span className="text-lg text-slate-400 line-through">৳{product.price}</span>
                )}
              </div>
              <p className="text-xs text-green-600 font-bold">In Stock: {product.stock} units left</p>
            </div>
          </div>

          {/* Delivery & Seller Info */}
          <div className="border border-slate-100 rounded-2xl divide-y divide-slate-100">
            <div className="p-4 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-slate-400 mt-1" />
              <div>
                <p className="text-sm font-bold">Delivery Location</p>
                <p className="text-xs text-slate-500">Dhaka, Dhanmondi 27</p>
              </div>
              <button className="ml-auto text-xs text-orange-600 font-bold">CHANGE</button>
            </div>
            <div className="p-4 flex items-start gap-4">
              <Truck className="w-5 h-5 text-slate-400 mt-1" />
              <div>
                <p className="text-sm font-bold">Standard Delivery</p>
                <p className="text-xs text-slate-500">Estimated delivery within 2-3 days</p>
              </div>
              <p className="ml-auto text-sm font-bold text-slate-900">৳60</p>
            </div>
            <div className="p-4 flex items-start gap-4">
              <RefreshCcw className="w-5 h-5 text-slate-400 mt-1" />
              <div>
                <p className="text-sm font-bold">7 Days Returns</p>
                <p className="text-xs text-slate-500">Change of mind is applicable</p>
              </div>
            </div>
          </div>

          {/* Quantity & Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 py-2 hover:bg-slate-50 text-xl font-bold"
              >-</button>
              <span className="px-4 py-2 font-bold w-12 text-center border-x border-slate-200">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="px-4 py-2 hover:bg-slate-50 text-xl font-bold"
              >+</button>
            </div>
            <button 
              onClick={onAddToCart}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 border border-slate-200 hover:bg-slate-50 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all">
              <Heart className="w-5 h-5 text-slate-400" />
              Add to Wishlist
            </button>
            <button className="p-3 border border-slate-200 hover:bg-slate-50 rounded-xl">
              <Share2 className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-100">
          {[
            { id: 'desc', label: 'Description' },
            { id: 'specs', label: 'Specifications' },
            { id: 'reviews', label: 'Customer Reviews' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-5 text-sm font-bold relative transition-colors ${activeTab === tab.id ? 'text-orange-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600"></div>
              )}
            </button>
          ))}
        </div>
        <div className="p-8">
          {activeTab === 'desc' && (
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>{product.description}</p>
              <p className="mt-4">Designed for performance and longevity, this product brings together the best of modern engineering and aesthetic appeal. Whether for daily use or special occasions, it stands out as a top-tier choice in its category.</p>
            </div>
          )}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                { label: 'Brand', value: 'BazaarPremium' },
                { label: 'Model', value: '2024 Series' },
                { label: 'Material', value: 'Mixed Composites' },
                { label: 'Warranty', value: '1 Year Local' },
                { label: 'Weight', value: '0.5 kg' },
                { label: 'Dimensions', value: '15 x 10 x 5 cm' }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-slate-50">
                  <span className="text-slate-500 text-sm">{spec.label}</span>
                  <span className="font-bold text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center gap-8 p-6 bg-slate-50 rounded-2xl mb-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-slate-900">{product.rating}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">Avg Rating</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[5,4,3,2,1].map(star => (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-xs font-bold w-3">{star}</span>
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: `${star === 5 ? '80%' : star === 4 ? '15%' : '5%'}` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-500 text-sm text-center italic">No individual comments yet. Be the first to review!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;