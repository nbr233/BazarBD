
import React from 'react';
import { 
  Database, Server, Smartphone, Lock, CreditCard, 
  Table as TableIcon, Workflow, ShieldCheck, Zap 
} from 'lucide-react';

const ArchitectureView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* 1. High Level Specs */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">System Specification</h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
          Technical breakdown of the BazaarBD Multi-Vendor Platform.
        </p>
      </section>

      {/* 2. Database Schema Definition */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Database className="w-8 h-8 text-orange-600" />
          <h2 className="text-3xl font-bold">Relational Data Model (PostgreSQL)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-slate-400" /> Core Entities
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">users</span>
                <span className="text-slate-500">UUID, Email(UK), Password, Role, Active_Bit</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">sellers</span>
                <span className="text-slate-500">ID, User_ID(FK), Shop_Name, Balance, Rating</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">products</span>
                <span className="text-slate-500">ID, Seller_ID(FK), Category_ID(FK), Price, Stock</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">orders</span>
                <span className="text-slate-500">ID, Customer_ID(FK), Total, Status, Tracking_No</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-slate-400" /> Finance & Logistics
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">payments</span>
                <span className="text-slate-500">ID, Order_ID(FK), Gateway, Txn_ID, Status</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">seller_wallet_ledger</span>
                <span className="text-slate-500">ID, Seller_ID(FK), Type, Amount, Order_Ref</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">payouts</span>
                <span className="text-slate-500">ID, Seller_ID(FK), Amount, Method, Status</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-mono text-orange-600">support_tickets</span>
                <span className="text-slate-500">ID, User_ID(FK), Priority, Subject, Status</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. API Design Table */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Zap className="w-8 h-8 text-orange-600" />
          <h2 className="text-3xl font-bold">RESTful API Endpoints</h2>
        </div>
        
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase text-slate-400">
                <th className="px-6 py-4">Module</th>
                <th className="px-6 py-4">Endpoint</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Permission</th>
                <th className="px-6 py-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Auth</td>
                <td className="px-6 py-4 font-mono text-blue-600">/api/auth/login/</td>
                <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">POST</span></td>
                <td className="px-6 py-4 text-slate-500">Public</td>
                <td className="px-6 py-4 text-slate-600">JWT Token exchange</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Product</td>
                <td className="px-6 py-4 font-mono text-blue-600">/api/products/create/</td>
                <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">POST</span></td>
                <td className="px-6 py-4 text-slate-500">Seller</td>
                <td className="px-6 py-4 text-slate-600">Add item with images</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Order</td>
                <td className="px-6 py-4 font-mono text-blue-600">/api/orders/checkout/</td>
                <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">POST</span></td>
                <td className="px-6 py-4 text-slate-500">Customer</td>
                <td className="px-6 py-4 text-slate-600">Place order + Start payment</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Admin</td>
                <td className="px-6 py-4 font-mono text-blue-600">/api/admin/sellers/approve/</td>
                <td className="px-6 py-4"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">PATCH</span></td>
                <td className="px-6 py-4 text-slate-500">Admin</td>
                <td className="px-6 py-4 text-slate-600">Verify seller docs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Action Mapping Table */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <Workflow className="w-8 h-8 text-orange-600" />
          <h2 className="text-3xl font-bold">UI-to-Logic Mapping</h2>
        </div>
        
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase text-slate-400">
                <th className="px-6 py-4">Page</th>
                <th className="px-6 py-4">UI Trigger</th>
                <th className="px-6 py-4">API Action</th>
                <th className="px-6 py-4">Logic Flow</th>
                <th className="px-6 py-4">DB Update</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Cart</td>
                <td className="px-6 py-4 text-slate-600">"Checkout" Button</td>
                <td className="px-6 py-4 font-mono text-rose-600">POST /orders/</td>
                <td className="px-6 py-4 text-slate-600">Validate stock → Calculate Total → Create Order</td>
                <td className="px-6 py-4 text-slate-500">Orders, OrderItems</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Seller Dashboard</td>
                <td className="px-6 py-4 text-slate-600">"Ship Now" Action</td>
                <td className="px-6 py-4 font-mono text-rose-600">PATCH /orders/id/</td>
                <td className="px-6 py-4 text-slate-600">Generate AWB → Notify Customer → Update Status</td>
                <td className="px-6 py-4 text-slate-500">Orders (status)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-slate-900">Product Page</td>
                <td className="px-6 py-4 text-slate-600">"Add to Cart"</td>
                <td className="px-6 py-4 font-mono text-rose-600">POST /cart/add/</td>
                <td className="px-6 py-4 text-slate-600">Verify SKU availability → Add to persistent cart</td>
                <td className="px-6 py-4 text-slate-500">CartItems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Security & Flow Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <ShieldCheck className="text-emerald-600" /> Security Implementation
          </h3>
          <div className="prose prose-slate max-w-none text-slate-600 text-sm">
            <p><strong>Authentication:</strong> Using <code>SimpleJWT</code> for Django. Refresh tokens stored in HTTP-only cookies to prevent XSS.</p>
            <p><strong>Permissions:</strong> Custom DRF classes (<code>IsSellerOwner</code>, <code>IsAdminUser</code>) applied per view.</p>
            <p><strong>Financial Integrity:</strong> Double-entry bookkeeping for the <code>seller_wallet_ledger</code> to ensure no balance leaks.</p>
            <p><strong>Image Uploads:</strong> Cloudinary unsigned uploads with backend-signed metadata for security.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Workflow className="text-blue-600" /> Core Business Flow
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-slate-600 font-medium">
            <li>Seller registers → Admin reviews NID/Trade License → Approved.</li>
            <li>Seller uploads product → AI generates SEO description → Published.</li>
            <li>Customer buys via bKash → SSLCommerz notifies Webhook.</li>
            <li>Backend verifies payment → Status: <code>PROCESSING</code>.</li>
            <li>Seller prints invoice → Marks: <code>SHIPPED</code>.</li>
            <li>Customer confirms receipt → Funds released to Seller Wallet.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ArchitectureView;
