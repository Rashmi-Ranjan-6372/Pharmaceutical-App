// StockForm.js
import React, { useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ToolBar from "./ToolBar";
import TransactionDetails from "./TransactionDetails";
import ProductDetails from "./ProductDetails";
import Totals from "./Totals";
import ActionButtons from "./ActionButtons";

const availableProducts = [
  "Paracetamol 500mg", "Ibuprofen 200mg", "Vitamin C 1000mg", "Amoxicillin 250mg", "Azithromycin 500mg", "Metformin 500mg", "Atorvastatin 10mg", "Omeprazole 20mg",
];
const initialProducts = Array.from({ length: 7 }, (_, i) => ({
  sl: i + 1, productName: "", packing: "", batchNo: "", expDt: "", mrp: 0, rate: 0, qty: 0, free: 0, discount: 0, tax: 0,
}));

const StockForm = () => {
  const headerBg = useColorModeValue("gray.100", "gray.700");
  const border = useColorModeValue("gray.200", "gray.700");
  const rowHoverBg = useColorModeValue("green.50", "green.700");
  const evenRowBg = useColorModeValue("gray.50", "gray.800");
  const oddRowBg = useColorModeValue("white", "gray.700");

  const [voucherType, setVoucherType] = useState("Sales Issue");
  const [mode, setMode] = useState("Delete");
  const [paymentMode, setPaymentMode] = useState("None");
  const [products, setProducts] = useState(initialProducts);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleProductChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };
  const handleProductSelect = (index, productName) => {
    handleProductChange(index, "productName", productName);
    setOpenDropdownIndex(null);
  };
  const handleReset = () => {
    setProducts(initialProducts);
    setOpenDropdownIndex(null);
  };

  let taxExempted = 0, taxable = 0, taxPaid = 0, gTotal = 0;
  products.forEach((p) => {
    const qty = parseFloat(p.qty) || 0, free = parseFloat(p.free) || 0, discount = parseFloat(p.discount) || 0, tax = parseFloat(p.tax) || 0, rate = parseFloat(p.rate) || 0;
    const baseAmount = (qty - free) * rate - discount;
    const amount = baseAmount + tax;
    gTotal += amount;
    taxPaid += tax;
    if (tax === 0) { taxExempted += baseAmount; } else { taxable += baseAmount; }
  });
  const cgst = taxPaid / 2, sgst = taxPaid / 2;
  const totals = [
    { name: "Tax Exempted", value: taxExempted },
    { name: "Taxable", value: taxable },
    { name: "CGST", value: cgst },
    { name: "SGST", value: sgst },
    { name: "Total Tax Paid", value: taxPaid },
    { name: "G-TOTAL", value: gTotal },
  ];

  return (
    <Box width="100%" p={3} border="1px solid" borderColor={border} borderRadius="md" fontSize="sm">
      <ToolBar {...{ voucherType, setVoucherType, mode, setMode, paymentMode, setPaymentMode, border }} />
      <TransactionDetails voucherType={voucherType} />
      <ProductDetails {...{ products, setOpenDropdownIndex, openDropdownIndex, availableProducts, handleProductChange, handleProductSelect, border, headerBg, evenRowBg, oddRowBg, rowHoverBg }} />
      <Totals totals={totals} border={border} />
      <ActionButtons handleReset={handleReset} />
    </Box>
  );
};

export default StockForm;
