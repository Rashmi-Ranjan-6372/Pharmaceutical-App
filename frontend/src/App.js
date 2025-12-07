// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ===== LAYOUT =====
import Sidebar from "./Components/Sidebar";

// ===== DASHBOARD =====
import Dashboard from "./Components/Dashboard/Dashboard";

// ===== MASTER PAGES =====
// Vendor
import AddVendor from "./Components/Master/Vendor/AddVendor/AddVendor";
import VendorList from "./Components/Master/Vendor/VendorList/VendorList";

// Customer
import AddCustomer from "./Components/Master/Customer/AddCustomer/AddCustomer";
import CustomerList from "./Components/Master/Customer/CustomerList/CustomerList";

// Manufacturer
import AddManufacturer from "./Components/Master/Manufacturer/AddManufacturer/AddManufacturer";
import ManufacturerList from "./Components/Master/Manufacturer/ManufacturerList/ManufacturerList";

// Product
import AddProduct from "./Components/Master/Product/AddProduct/AddProduct";
import ProductList from "./Components/Master/Product/ProductList/ProductList";

// Sales Area
import AddSalesArea from "./Components/Master/SalesArea/AddSalesArea/AddSalesArea";
import SalesAreaList from "./Components/Master/SalesArea/SalesAreaList/SalesAreaList";

// ✅ Sales Discount
import AddSalesDiscount from "./Components/Master/SalesDiscount/AddSalesDiscount/AddSalesDiscount";
import SalesDiscountList from "./Components/Master/SalesDiscount/SalesDiscountList/SalesDiscountList";

// ===== TRANSACTION PAGES =====
import StockForm from "./Components/Transaction/Stock/StockForm";
import Receipt from "./Components/Transaction/Receipt/Receipt";
import Payment from "./Components/Transaction/Payment/Payment";
import DrNote from "./Components/Transaction/Dr-Note/DrNote";
import CrNote from "./Components/Transaction/Cr-Note/CrNote";

// ===== PLACEHOLDER PAGES =====
const InvoicePage = () => <div>Invoice Page</div>;
const SalesRegisterPage = () => <div>Sales Register Page</div>;
const SalesReturnPage = () => <div>Sales Return Page</div>;
const ShortExpiryPage = () => <div>Short Expiry Page</div>;
const StockReportPage = () => <div>Stock Report Page</div>;
const ProductLedgerPage = () => <div>Product Ledger Page</div>;
const PartyLedgerPage = () => <div>Party Ledger Page</div>;
const OutstandingAgeingPage = () => <div>Outstanding Ageing Page</div>;
const GeneralSettingsPage = () => <div>General Settings</div>;
const EndOfYearPage = () => <div>End of Year</div>;

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* ===== Redirect root to dashboard ===== */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* ===== DASHBOARD ===== */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* ===== MASTER MENU ===== */}

          {/* Vendor Routes */}
          <Route
            path="/master/vendor"
            element={<Navigate to="/master/vendor/list" replace />}
          />
          <Route path="/master/vendor/add" element={<AddVendor />} />
          <Route path="/master/vendor/list" element={<VendorList />} />

          {/* Customer Routes */}
          <Route
            path="/master/customer"
            element={<Navigate to="/master/customer/list" replace />}
          />
          <Route path="/master/customer/add" element={<AddCustomer />} />
          <Route path="/master/customer/list" element={<CustomerList />} />

          {/* Manufacturer Routes */}
          <Route
            path="/master/manufacturer"
            element={<Navigate to="/master/manufacturer/list" replace />}
          />
          <Route path="/master/manufacturer/add" element={<AddManufacturer />} />
          <Route path="/master/manufacturer/list" element={<ManufacturerList />} />

          {/* Product Routes */}
          <Route
            path="/master/product"
            element={<Navigate to="/master/product/list" replace />}
          />
          <Route path="/master/product/add" element={<AddProduct />} />
          <Route path="/master/product/list" element={<ProductList />} />

          {/* Sales Area Routes */}
          <Route
            path="/master/sales-area"
            element={<Navigate to="/master/sales-area/list" replace />}
          />
          <Route path="/master/sales-area/add" element={<AddSalesArea />} />
          <Route path="/master/sales-area/list" element={<SalesAreaList />} />

          {/* ✅ Sales Discount Routes */}
          <Route
            path="/master/sales-discount"
            element={<Navigate to="/master/sales-discount/list" replace />}
          />
          <Route path="/master/sales-discount/add" element={<AddSalesDiscount />} />
          <Route path="/master/sales-discount/list" element={<SalesDiscountList />} />

          {/* ===== TRANSACTION MENU ===== */}
          <Route path="/transaction/stock" element={<StockForm />} />
          <Route path="/transaction/receipt" element={<Receipt />} />
          <Route path="/transaction/payment" element={<Payment />} />
          <Route path="/transaction/dr-note" element={<DrNote />} />
          <Route path="/transaction/cr-note" element={<CrNote />} />

          {/* ===== REPORTS MENU ===== */}
          <Route path="/reports/invoice" element={<InvoicePage />} />
          <Route path="/reports/sales-register" element={<SalesRegisterPage />} />
          <Route path="/reports/sales-return" element={<SalesReturnPage />} />
          <Route path="/reports/short-expiry" element={<ShortExpiryPage />} />
          <Route path="/reports/stock-report" element={<StockReportPage />} />
          <Route path="/reports/product-ledger" element={<ProductLedgerPage />} />
          <Route path="/reports/party-ledger" element={<PartyLedgerPage />} />
          <Route path="/reports/outstanding-ageing" element={<OutstandingAgeingPage />} />

          {/* ===== SETUP MENU ===== */}
          <Route path="/setup/general" element={<GeneralSettingsPage />} />
          <Route path="/setup/end-of-year" element={<EndOfYearPage />} />

          {/* ===== Catch-All Fallback Route ===== */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
