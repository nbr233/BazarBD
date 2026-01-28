
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const productService = {
  getAll: (params?: any) => api.get('/products/', { params }),
  getById: (id: string) => api.get(`/products/${id}/`),
  create: (data: any) => api.post('/products/', data),
  update: (id: string, data: any) => api.patch(`/products/${id}/`, data),
};

export const orderService = {
  create: (data: any) => api.post('/orders/checkout/', data),
  getUserOrders: () => api.get('/orders/my-orders/'),
  updateStatus: (id: string, status: string) => api.patch(`/orders/${id}/status/`, { status }),
};

export const sellerService = {
  getStats: () => api.get('/seller/dashboard/stats/'),
  getWallet: () => api.get('/seller/wallet/'),
  requestPayout: (amount: number) => api.post('/seller/payouts/', { amount }),
};

export default api;
