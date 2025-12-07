// src/Components/Transaction/Payment/Payment.js
import React, { useState } from "react";
import { Flex, Box, Divider, Text, useColorModeValue } from "@chakra-ui/react";
import VendorList from "./VendorList";
import InvoiceList from "./InvoiceList";
import PaymentEntry from "./PaymentEntry";
import InvoiceDetails from "./InvoiceDetails";

// Dummy vendor & invoice data
const dummyVendors = [
    {
        id: 1,
        name: "ABC Pharmacy",
        invoices: [
            {
                id: "INV-001",
                date: "2025-09-04",
                paymentMode: "Credit",
                items: [
                    { description: "Paracetamol 500mg", qty: 10, rate: 2.5 },
                    { description: "Vitamin C 1000mg", qty: 5, rate: 8 },
                ],
            },
            {
                id: "INV-002",
                date: "2025-09-02",
                paymentMode: "Cash",
                items: [
                    { description: "Ibuprofen 200mg", qty: 20, rate: 3.0 },
                    { description: "Amoxicillin 500mg", qty: 8, rate: 4.5 },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "XYZ Medicals",
        invoices: [
            {
                id: "INV-101",
                date: "2025-09-03",
                paymentMode: "Credit",
                items: [
                    { description: "Omeprazole 20mg", qty: 15, rate: 5.0 },
                    { description: "Cough Syrup 100ml", qty: 10, rate: 6.5 },
                ],
            },
            {
                id: "INV-102",
                date: "2025-09-01",
                paymentMode: "Cash",
                items: [
                    { description: "Vitamin D 60000IU", qty: 8, rate: 12.0 },
                    { description: "ORS Pack", qty: 25, rate: 0.75 },
                ],
            },
        ],
    },
    {
        id: 3,
        name: "HealthPlus Chemist",
        invoices: [
            {
                id: "INV-201",
                date: "2025-09-04",
                paymentMode: "Credit",
                items: [
                    { description: "Amoxicillin 500mg", qty: 12, rate: 4.0 },
                    { description: "Cetirizine 10mg", qty: 25, rate: 1.5 },
                ],
            },
            {
                id: "INV-202",
                date: "2025-09-03",
                paymentMode: "Cash",
                items: [
                    { description: "ORS Pack", qty: 30, rate: 0.75 },
                    { description: "Zinc Tablets", qty: 15, rate: 3.0 },
                ],
            },
        ],
    },
];

function Payment() {
    const border = useColorModeValue("gray.200", "gray.700");
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedForPayment, setSelectedForPayment] = useState([]);
    const [paymentDate, setPaymentDate] = useState("");
    const [paidInvoices, setPaidInvoices] = useState([]);

    // Filter vendors by search term
    const filteredVendors = dummyVendors.filter((v) =>
        v.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Toggle a single invoice selection for payment
    const handleToggleInvoice = (inv) => {
        if (selectedForPayment.find((r) => r.id === inv.id)) {
            setSelectedForPayment(selectedForPayment.filter((r) => r.id !== inv.id));
        } else {
            setSelectedForPayment([...selectedForPayment, inv]);
            setSelectedInvoice(null);
            setPaymentDate(new Date().toISOString().split("T")[0]);
        }
    };

    // Toggle all invoices for a vendor
    const handleCheckAll = () => {
        if (!selectedVendor) return;
        const allSelected = selectedVendor.invoices.every((r) =>
            selectedForPayment.find((sel) => sel.id === r.id)
        );
        if (allSelected) {
            setSelectedForPayment(
                selectedForPayment.filter(
                    (sel) => !selectedVendor.invoices.find((r) => r.id === sel.id)
                )
            );
        } else {
            const newOnes = selectedVendor.invoices.filter(
                (r) => !selectedForPayment.find((sel) => sel.id === r.id)
            );
            setSelectedForPayment([...selectedForPayment, ...newOnes]);
            setSelectedInvoice(null);
            setPaymentDate(new Date().toISOString().split("T")[0]);
        }
    };

    // Compute total with 5% tax
    const totalAmount = selectedForPayment
        .reduce(
            (sum, inv) =>
                sum + inv.items.reduce((s, i) => s + i.qty * i.rate, 0) * 1.05,
            0
        )
        .toFixed(2);

    // Submit payment
    const handlePaymentSubmit = () => {
        if (!selectedForPayment.length) return;
        setPaidInvoices((prev) => [...prev, ...selectedForPayment.map((r) => r.id)]);
        alert(`Payment of ₹${totalAmount} done on ${paymentDate}`);
        setSelectedForPayment([]);
        setPaymentDate("");
    };

    const handlePrint = () => window.print();

    return (
        <Flex height="80vh" border="1px solid" borderColor={border} borderRadius="md">
            {/* Left Panel */}
            <Box
                width="30%"
                borderRight="1px solid"
                borderColor={border}
                p={3}
                display="flex"
                flexDirection="column"
            >
                <VendorList
                    vendors={filteredVendors}
                    searchTerm={searchTerm}
                    onSearch={setSearchTerm}
                    selectedVendor={selectedVendor}
                    onSelectVendor={(vendor) => {
                        setSelectedVendor(vendor);
                        setSelectedInvoice(null);
                        setSelectedForPayment([]);
                    }}
                />
                <Divider my={2} />
                <InvoiceList
                    invoices={selectedVendor?.invoices || []}
                    selectedForPayment={selectedForPayment}
                    onToggleInvoice={handleToggleInvoice}
                    onCheckAll={handleCheckAll}
                    onViewInvoice={setSelectedInvoice}
                    onPrintInvoice={(inv) => {
                        setSelectedInvoice(inv);
                        handlePrint();
                    }}
                    paidInvoices={paidInvoices}
                />
            </Box>

            {/* Right Panel */}
            <Flex flex="1" p={3} overflowY="auto" direction="column">
                {selectedForPayment.length > 0 ? (
                    <PaymentEntry
                        receipts={selectedForPayment}
                        paymentDate={paymentDate}
                        setPaymentDate={setPaymentDate}
                        totalAmount={totalAmount}
                        onSubmit={handlePaymentSubmit}
                    />
                ) : selectedInvoice ? (
                    <InvoiceDetails
                        invoice={selectedInvoice}
                        vendorName={selectedVendor?.name || ""}
                        onPrint={handlePrint}
                    />
                ) : (
                    <Text>Select a vendor and an invoice to view details or select for payment.</Text>
                )}
            </Flex>
        </Flex>
    );
}

export default Payment;
