// DrNotePage.js
import React, { useState } from "react";
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Input,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    NumberInput,
    NumberInputField,
    useColorModeValue,
    Heading,
    Text,
    Button,
    Select,
} from "@chakra-ui/react";

const initialItems = Array.from({ length: 5 }, (_, i) => ({
    sl: i + 1,
    productName: "",
    batchNo: "",
    qty: 0,
    rate: 0,
    amount: 0,
}));

function DrNotePage() {
    const headerBg = useColorModeValue("gray.100", "gray.700");
    const border = useColorModeValue("gray.200", "gray.700");
    const rowHoverBg = useColorModeValue("green.50", "green.700");
    const evenRowBg = useColorModeValue("gray.50", "gray.800");
    const oddRowBg = useColorModeValue("white", "gray.700");

    const [noteNo, setNoteNo] = useState("DR-001");
    const [noteDate, setNoteDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [partyName, setPartyName] = useState("");
    const [invoiceRef, setInvoiceRef] = useState("");
    const [reason, setReason] = useState("");
    const [items, setItems] = useState(initialItems);

    const handleItemChange = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        if (field === "qty" || field === "rate") {
            const qty = parseFloat(updated[index].qty) || 0;
            const rate = parseFloat(updated[index].rate) || 0;
            updated[index].amount = (qty * rate).toFixed(2);
        }
        setItems(updated);
    };

    const totalAmount = items.reduce(
        (acc, i) => acc + (parseFloat(i.amount) || 0),
        0
    );

    return (
        <Box
            width="100%"
            p={3}
            border="1px solid"
            borderColor={border}
            borderRadius="md"
            fontSize="sm"
        >
            {/* Header */}
            <Heading as="h2" size="sm" mb={3} textAlign="center" color="black">
                Debit Note
            </Heading>

            {/* Debit Note Info */}
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={2}
                mb={3}
            >
                <GridItem>
                    <Text fontSize="xs" mb={1}>
                        Debit Note No.
                    </Text>
                    <Input
                        size="xs"
                        value={noteNo}
                        onChange={(e) => setNoteNo(e.target.value)}
                    />
                </GridItem>
                <GridItem>
                    <Text fontSize="xs" mb={1}>
                        Date
                    </Text>
                    <Input
                        type="date"
                        size="xs"
                        value={noteDate}
                        onChange={(e) => setNoteDate(e.target.value)}
                    />
                </GridItem>
                <GridItem>
                    <Text fontSize="xs" mb={1}>
                        Invoice Ref.
                    </Text>
                    <Input
                        size="xs"
                        placeholder="Reference invoice no."
                        value={invoiceRef}
                        onChange={(e) => setInvoiceRef(e.target.value)}
                    />
                </GridItem>
            </Grid>

            {/* Party Details */}
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={2}
                mb={3}
            >
                <GridItem>
                    <Text fontSize="xs" mb={1}>
                        Party Name
                    </Text>
                    <Input
                        size="xs"
                        placeholder="Enter party name"
                        value={partyName}
                        onChange={(e) => setPartyName(e.target.value)}
                    />
                </GridItem>
                <GridItem>
                    <Text fontSize="xs" mb={1}>
                        Reason
                    </Text>
                    <Select
                        size="xs"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    >
                        <option value="">Select Reason</option>
                        <option value="Rate Increase">Rate Increase</option>
                        <option value="Short Supply Adjustment">Short Supply Adjustment</option>
                        <option value="Freight / Additional Charges">Freight / Additional Charges</option>
                        <option value="Other">Other</option>
                    </Select>
                </GridItem>
            </Grid>

            {/* Items Table */}
            <Heading as="h3" size="xs" mb={1} color="black">
                Debited Items / Charges
            </Heading>
            <TableContainer
                border="1px"
                borderColor={border}
                mb={2}
                borderRadius="md"
                maxH="220px"
                overflowY="auto"
            >
                <Table size="xs">
                    <Thead bg={headerBg} position="sticky" top="0" zIndex="1">
                        <Tr>
                            <Th fontSize="xs" textAlign="center">
                                SL
                            </Th>
                            <Th fontSize="xs" textAlign="center">
                                Item / Product
                            </Th>
                            <Th fontSize="xs" textAlign="center">
                                Batch No.
                            </Th>
                            <Th fontSize="xs" textAlign="center">
                                Qty
                            </Th>
                            <Th fontSize="xs" textAlign="center">
                                Rate
                            </Th>
                            <Th fontSize="xs" textAlign="center">
                                Amount
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {items.map((i, idx) => {
                            const bgColor = idx % 2 === 1 ? evenRowBg : oddRowBg;
                            return (
                                <Tr key={i.sl} bg={bgColor} _hover={{ bg: rowHoverBg }}>
                                    <Td textAlign="center">{i.sl}</Td>
                                    <Td>
                                        <Input
                                            size="xs"
                                            placeholder="Item / Product"
                                            value={i.productName}
                                            onChange={(e) =>
                                                handleItemChange(idx, "productName", e.target.value)
                                            }
                                        />
                                    </Td>
                                    <Td>
                                        <Input
                                            size="xs"
                                            placeholder="Batch No."
                                            value={i.batchNo}
                                            onChange={(e) =>
                                                handleItemChange(idx, "batchNo", e.target.value)
                                            }
                                        />
                                    </Td>
                                    <Td>
                                        <NumberInput
                                            size="xs"
                                            min={0}
                                            value={i.qty}
                                            onChange={(v) => handleItemChange(idx, "qty", v)}
                                        >
                                            <NumberInputField textAlign="center" />
                                        </NumberInput>
                                    </Td>
                                    <Td>
                                        <NumberInput
                                            size="xs"
                                            min={0}
                                            value={i.rate}
                                            onChange={(v) => handleItemChange(idx, "rate", v)}
                                        >
                                            <NumberInputField textAlign="center" />
                                        </NumberInput>
                                    </Td>
                                    <Td textAlign="center">{i.amount}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>

            {/* Totals */}
            <Flex justify="flex-end" mb={3} fontSize="xs">
                <Box textAlign="right">
                    <Text fontWeight="bold">Total Amount: {totalAmount.toFixed(2)}</Text>
                </Box>
            </Flex>

            {/* Action Buttons */}
            <Flex justify="space-between">
                <Button size="sm" colorScheme="red">
                    Reset
                </Button>
                <Button size="sm" colorScheme="green">
                    Save Debit Note
                </Button>
            </Flex>
        </Box>
    );
}

export default DrNotePage;
