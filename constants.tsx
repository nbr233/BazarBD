
import React from 'react';
import { Product, Category, UserRole, User } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Ahmed Karim',
  email: 'ahmed@example.com',
  phone: '+8801700000000',
  is_verified: true,
  role: UserRole.CUSTOMER,
  avatar: 'https://picsum.photos/seed/user/100/100'
};

export const MOCK_SELLER: User = {
  id: 's1',
  name: 'Fashion Hub BD',
  email: 'seller@fashionhub.com',
  phone: '+8801800000000',
  is_verified: true,
  role: UserRole.SELLER,
  avatar: 'https://picsum.photos/seed/shop/100/100'
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics', icon: '📱' },
  { id: '2', name: 'Fashion', icon: '👕' },
  { id: '3', name: 'Groceries', icon: '🍎' },
  { id: '4', name: 'Home & Living', icon: '🏠' },
  { id: '5', name: 'Health & Beauty', icon: '💄' }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Realme Buds Air 5',
    slug: 'realme-buds-air-5',
    description: 'Noise cancelling true wireless earbuds with deep bass and 40h battery.',
    price: 4500,
    discountPrice: 3800,
    categoryId: 'Electronics',
    stock: 25,
    sellerId: 's1',
    sku: 'EL-RMB-001',
    images: ['https://picsum.photos/seed/earbuds/600/400'],
    rating: 4.8,
    reviewsCount: 124
  },
  {
    id: 'p2',
    name: 'Premium Cotton Panjabi',
    slug: 'premium-cotton-panjabi',
    description: 'Exquisite cotton panjabi for special occasions. Traditional design with modern fit.',
    price: 2200,
    discountPrice: 1800,
    categoryId: 'Fashion',
    stock: 50,
    sellerId: 's2',
    sku: 'FA-PAN-002',
    images: ['https://picsum.photos/seed/panjabi/600/400'],
    rating: 4.5,
    reviewsCount: 89
  },
  {
    id: 'p3',
    name: 'Miniket Rice - 25kg',
    slug: 'miniket-rice-25kg',
    description: 'High quality premium miniket rice from Dinajpur.',
    price: 1650,
    categoryId: 'Groceries',
    stock: 100,
    sellerId: 's3',
    sku: 'GR-RIC-003',
    images: ['https://picsum.photos/seed/rice/600/400'],
    rating: 4.2,
    reviewsCount: 230
  },
  {
    id: 'p4',
    name: 'Smart Watch Series 9',
    slug: 'smart-watch-series-9',
    description: 'Advanced health monitoring, GPS, and seamless connectivity.',
    price: 12000,
    discountPrice: 10500,
    categoryId: 'Electronics',
    stock: 15,
    sellerId: 's1',
    sku: 'EL-SW9-004',
    images: ['https://picsum.photos/seed/watch/600/400'],
    rating: 4.9,
    reviewsCount: 45
  }
];