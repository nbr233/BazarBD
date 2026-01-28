
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  RETURN_REQUESTED = 'RETURN_REQUESTED',
  RETURNED = 'RETURNED'
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  is_verified: boolean;
}

export interface SellerProfile {
  id: string;
  userId: string;
  shopName: string;
  tradeLicense: string;
  status: 'PENDING' | 'APPROVED' | 'SUSPENDED';
  balance: number;
}

// Added Category interface which was missing
export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  categoryId: string;
  sellerId: string;
  images: string[];
  stock: number;
  sku: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: 'COD' | 'BKASH' | 'NAGAD' | 'SSLCOMMERZ';
  paymentStatus: 'PAID' | 'UNPAID' | 'REFUNDED';
  createdAt: string;
}