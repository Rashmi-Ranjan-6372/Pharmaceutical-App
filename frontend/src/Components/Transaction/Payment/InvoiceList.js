// src/Components/Transaction/Invoice/InvoiceList.js
import React from "react";
import {
    Box,
    VStack,
    HStack,
    Heading,
    Checkbox,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CheckCircleIcon } from "@chakra-ui/icons";

function InvoiceList({
    invoices = [],
    selectedForPayment = [],
    onToggleInvoice,
    onCheckAll,
    onViewInvoice,
    onPrintInvoice,
    paidInvoices = [],
    selectedVendor
}) {
    const border = useColorModeValue("gray.200", "gray.700");
    const bgHover = useColorModeValue("gray.100", "gray.600");

    // calculate invoice total (sum of qty * rate)
    const getInvoiceTotal = (invoice) =>
        invoice.items.reduce((sum, item) => sum + item.qty * item.rate, 0).toFixed(2);

    return (
        <Box>
            <HStack justify="space-between" mb={1}>
                <Heading size="xs">
                    {selectedVendor ? `${selectedVendor.name}'s Invoices` : "Invoices"}
                </Heading>
                {invoices?.length > 0 && (
                    <Checkbox
                        size="sm"
                        isChecked={invoices.every((r) =>
                            selectedForPayment.find((sel) => sel.id === r.id)
                        )}
                        onChange={onCheckAll}
                    >
                        Check All
                    </Checkbox>
                )}
            </HStack>
            <VStack align="stretch" spacing={1}>
                {invoices?.length ? (
                    invoices.map((inv) => {
                        const isSelected = !!selectedForPayment.find((r) => r.id === inv.id);
                        const isPaid = paidInvoices.includes(inv.id);
                        const total = getInvoiceTotal(inv);
                        const displayAmount = isPaid ? total : (inv.restAmount ?? total);

                        return (
                            <HStack
                                key={inv.id}
                                p={2}
                                border="1px solid"
                                borderColor={border}
                                borderRadius="md"
                                justify="space-between"
                            >
                                <Checkbox
                                    isChecked={isSelected}
                                    onChange={() => onToggleInvoice(inv)}
                                />
                                <Box
                                    flex="1"
                                    ml={2}
                                    p={1}
                                    borderRadius="md"
                                    _hover={{ bg: bgHover, cursor: "pointer" }}
                                    onClick={() => onViewInvoice(inv)}
                                >
                                    <HStack justify="space-between">
                                        <Text fontSize="xs">{inv.date}</Text>
                                        <Text fontSize="xs" fontWeight="bold">{inv.id}</Text>
                                        <Text
                                            fontSize="xs"
                                            color={isPaid ? "green.500" : "red.500"}
                                        >
                                            ₹{displayAmount}
                                        </Text>
                                    </HStack>
                                </Box>
                                {isPaid && (
                                    <CheckCircleIcon color="green.400" boxSize={4} title="Paid" />
                                )}
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        icon={<BsThreeDotsVertical />}
                                        size="sm"
                                        variant="ghost"
                                    />
                                    <MenuList>
                                        <MenuItem onClick={() => onViewInvoice(inv)}>View</MenuItem>
                                        <MenuItem onClick={() => onPrintInvoice(inv)}>Print</MenuItem>
                                    </MenuList>
                                </Menu>
                            </HStack>
                        );
                    })
                ) : (
                    <Text fontSize="sm" color="gray.500">
                        {selectedVendor
                            ? "No invoices found for this vendor"
                            : "Select a vendor to see invoices"}
                    </Text>
                )}
            </VStack>
        </Box>
    );
}

export default InvoiceList;
