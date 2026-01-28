
import React from 'react';
import { CartItem } from '../types';
import { MOCK_PRODUCTS } from '../constants';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

interface CartViewProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdate: (id: string, qty: number) => void;
  onCheckout: () => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, onRemove, onUpdate, onCheckout }) => {
  const cartProducts = cart.map(item => ({
    ...item,
    product: MOCK_PRODUCTS.find(p => p.id === item.productId)!
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + (item.product.discountPrice || item.product.price) * item.quantity, 0);
  const shipping = subtotal > 0 ? 60 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20 px-4">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Your Shopping Cart ({cart.length})</h1>
        
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-50">
            {cartProducts.map((item, i) => (
              <div key={item.productId} className="p-6 flex flex-col sm:flex-row gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-slate-900 line-clamp-1">{item.product.name}</h3>
                    <button onClick={() => onRemove(item.productId)} className="text-slate-400 hover:text-rose-600"><Trash2 className="w-5 h-5" /></button>
                  </div>
                  <p className="text-xs text-slate-500">Seller: Fashion Hub BD</p>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button onClick={() => onUpdate(item.productId, item.quantity - 1)} className="px-3 py-1 hover:bg-slate-50">-</button>
                      <span className="px-3 py-1 font-bold text-sm border-x border-slate-200">{item.quantity}</span>
                      <button onClick={() => onUpdate(item.productId, item.quantity + 1)} className="px-3 py-1 hover:bg-slate-50">+</button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-slate-900">৳{(item.product.discountPrice || item.product.price) * item.quantity}</p>
                      <p className="text-[10px] text-slate-400 font-bold">৳{item.product.discountPrice || item.product.price} each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6 sticky top-24">
          <h3 className="font-bold text-lg text-slate-900">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Shipping Fee</span>
              <span className="font-bold text-slate-900">৳{shipping}</span>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
              <span className="text-lg font-bold text-slate-900">Total</span>
              <span className="text-2xl font-black text-orange-600">৳{total}</span>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-emerald-800 leading-tight">
              Genuine Products • Secure Payments • Easy Returns. Your purchase is protected by <strong>BazaarSafe</strong>.
            </p>
          </div>

          <button 
            onClick={onCheckout}
            className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-900/10"
          >
            Checkout Now
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="pt-2">
            <p className="text-[10px] text-center text-slate-400 uppercase font-bold tracking-widest mb-3">Accepted Payments</p>
            <div className="flex justify-center gap-4 opacity-50 grayscale">
              {['bKash', 'Nagad', 'Rocket', 'VISA', 'CoD'].map(m => (
                <span key={m} className="text-[10px] font-black border border-slate-300 px-1.5 py-0.5 rounded">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
