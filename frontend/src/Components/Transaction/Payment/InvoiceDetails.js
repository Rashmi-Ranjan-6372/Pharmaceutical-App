// src/Components/Transaction/Invoice/InvoiceDetails.js
import React from "react";
import {
    Box,
    Heading,
    HStack,
    Text,
    Divider,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";

function InvoiceDetails({ invoice, vendorName, onPrint }) {
    const border = useColorModeValue("gray.200", "gray.700");

    if (!invoice) {
        return (
            <Box>
                <Text>No invoice selected.</Text>
            </Box>
        );
    }

    // Calculate totals
    const subtotal = invoice.items?.reduce((sum, i) => sum + i.qty * i.rate, 0) || 0;
    const tax = subtotal * 0.05;
    const grandTotal = subtotal + tax;

    return (
        <>
            <Box id="printable-invoice" flex="1">
                <Heading size="sm" textAlign="center" mb={3}>
                    Invoice Details
                </Heading>

                <HStack justify="space-between" mb={2}>
                    <Text>Date: {invoice.date}</Text>
                    <Text>Invoice No: {invoice.id}</Text>
                </HStack>

                <Text mb={2}>Vendor: {vendorName}</Text>
                <Text mb={2}>Payment Mode: {invoice.paymentMode || "N/A"}</Text>

                <Divider mb={2} />

                <Heading size="xs" mb={1}>
                    Items
                </Heading>

                <Box as="table" width="100%" border="1px solid" borderColor={border}>
                    <thead>
                        <tr>
                            <th style={{ border: `1px solid ${border}`, padding: "4px" }}>SL</th>
                            <th style={{ border: `1px solid ${border}`, padding: "4px" }}>
                                Description
                            </th>
                            <th style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                Qty
                            </th>
                            <th style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                Rate
                            </th>
                            <th style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.items?.map((item, idx) => (
                            <tr key={idx}>
                                <td style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                    {idx + 1}
                                </td>
                                <td style={{ border: `1px solid ${border}`, padding: "4px" }}>
                                    {item.description}
                                </td>
                                <td style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                    {item.qty}
                                </td>
                                <td style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                    {item.rate}
                                </td>
                                <td style={{ border: `1px solid ${border}`, padding: "4px", textAlign: "center" }}>
                                    {(item.qty * item.rate).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Box>

                <Divider my={2} />

                <Box textAlign="right">
                    <Text>Subtotal: ₹{subtotal.toFixed(2)}</Text>
                    <Text>Tax (5%): ₹{tax.toFixed(2)}</Text>
                    <Text fontWeight="bold">Grand Total: ₹{grandTotal.toFixed(2)}</Text>
                </Box>
            </Box>

            <Box textAlign="right" mt={3}>
                <Button colorScheme="blue" onClick={onPrint}>
                    Print Invoice
                </Button>
            </Box>
        </>
    );
}

export default InvoiceDetails;
