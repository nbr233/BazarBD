
import React, { useState, useEffect } from 'react';
import { UserRole, User, Product, CartItem } from './types';
import { MOCK_USER, MOCK_SELLER } from './constants';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import ProductDetailView from './views/ProductDetailView';
import SellerDashboard from './views/SellerDashboard';
import AdminDashboard from './views/AdminDashboard';
import CartView from './views/CartView';
import ArchitectureView from './views/ArchitectureView';
import CustomerAccountView from './views/CustomerAccountView';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(MOCK_USER);
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id: `cart-${Date.now()}-${productId}`, productId, quantity: 1 }];
    });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.productId === productId ? { ...item, quantity } : item));
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onProductClick={navigateToProduct} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailView 
            product={selectedProduct} 
            onAddToCart={() => addToCart(selectedProduct.id)} 
          />
        ) : <HomeView onProductClick={navigateToProduct} />;
      case 'seller':
        return <SellerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'cart':
        return <CartView cart={cart} onRemove={removeFromCart} onUpdate={updateCartQuantity} onCheckout={() => setCurrentView('checkout')} />;
      case 'account':
        return <CustomerAccountView wishlist={wishlist} onAddToCart={addToCart} onRemoveFromWishlist={toggleWishlist} />;
      case 'architecture':
        return <ArchitectureView />;
      default:
        return <HomeView onProductClick={navigateToProduct} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        currentUser={currentUser} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onNavigate={setCurrentView}
        onSwitchRole={(role) => {
          if (role === UserRole.CUSTOMER) setCurrentUser(MOCK_USER);
          else if (role === UserRole.SELLER) setCurrentUser(MOCK_SELLER);
          else setCurrentUser({ ...MOCK_USER, role: UserRole.ADMIN, name: 'Main Admin' } as User);
          setCurrentView(role === UserRole.CUSTOMER ? 'home' : (role === UserRole.SELLER ? 'seller' : 'admin'));
        }}
      />
      
      <main className="flex-grow pt-20 pb-12">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
