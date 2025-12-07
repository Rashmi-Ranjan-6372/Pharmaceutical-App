import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    Input,
    Button,
    VStack,
    useColorModeValue,
    HStack,
    Badge,
    Divider,
} from "@chakra-ui/react";

function PaymentEntry({ receipts, paymentDate, setPaymentDate, totalAmount, onSubmit }) {
    const borderColor = useColorModeValue("gray.300", "gray.600");
    const inputBg = useColorModeValue("white", "gray.700");
    const readOnlyBg = useColorModeValue("gray.100", "gray.600");

    const [payableAmount, setPayableAmount] = useState(totalAmount || 0);
    const [restAmount, setRestAmount] = useState(0);
    const [status, setStatus] = useState("Pending");

    useEffect(() => {
        setPayableAmount(totalAmount || 0);
        setRestAmount(0);
        setStatus("Pending");
    }, [totalAmount]);

    useEffect(() => {
        const total = Number(totalAmount) || 0;
        const pay = Number(payableAmount) || 0;
        const rest = total - pay;
        setRestAmount(rest > 0 ? rest : 0);
        setStatus(pay >= total && total > 0 ? "Success" : "Pending");
    }, [payableAmount, totalAmount]);

    const handleSubmit = () => {
        onSubmit({
            receipts,
            payableAmount: Number(payableAmount),
            restAmount,
            status,
        });
    };

    return (
        <Box p={3} border="1px solid" borderColor={borderColor} borderRadius="md">
            <Heading size="sm" mb={2} textAlign="center">
                Payment Entry
            </Heading>
            <Divider mb={3} />

            <VStack spacing={3} align="stretch">
                <Box>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>
                        Invoices Selected:
                    </Text>
                    <Text fontSize="sm">
                        {receipts && receipts.length > 0
                            ? receipts.map((r) => r.id).join(", ")
                            : "None"}
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>
                        Payment Date:
                    </Text>
                    <Input
                        type="date"
                        value={paymentDate || ""}
                        onChange={(e) => setPaymentDate(e.target.value)}
                        bg={inputBg}
                        size="sm"
                    />
                </Box>

                <Box>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>
                        Total Amount:
                    </Text>
                    <Input
                        type="text"
                        value={`₹${totalAmount || "0.00"}`}
                        isReadOnly
                        bg={readOnlyBg}
                        size="sm"
                        fontWeight="bold"
                    />
                </Box>

                <Box>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>
                        Payable Amount:
                    </Text>
                    <Input
                        type="number"
                        value={payableAmount}
                        onChange={(e) => setPayableAmount(e.target.value)}
                        bg={inputBg}
                        size="sm"
                        placeholder="Enter Payment Amount"
                    />
                </Box>

                <HStack justify="space-between">
                    <Text fontSize="sm" fontWeight="bold">
                        Rest Amount:
                    </Text>
                    <Text fontSize="sm" color={restAmount > 0 ? "red.500" : "green.500"}>
                        ₹{restAmount.toFixed(2)}
                    </Text>
                </HStack>

                <HStack justify="space-between">
                    <Text fontSize="sm" fontWeight="bold">
                        Status:
                    </Text>
                    <Badge colorScheme={status === "Success" ? "green" : "orange"}>{status}</Badge>
                </HStack>

                <Button colorScheme="green" size="sm" onClick={handleSubmit}>
                    Submit Payment
                </Button>
            </VStack>
        </Box>
    );
}

export default PaymentEntry;
