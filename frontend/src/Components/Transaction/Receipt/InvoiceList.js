// InvoiceList.js
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
    invoices,
    selectedForPayment,
    onToggleInvoice,
    onCheckAll,
    onViewInvoice,
    onPrintInvoice,
    paidInvoices
}) {
    const border = useColorModeValue("gray.200", "gray.700");
    const bgHover = useColorModeValue("gray.100", "gray.600");

    // calculate invoice total (no tax shown here, just sum)
    const getInvoiceTotal = (invoice) =>
        invoice.items.reduce((sum, item) => sum + item.qty * item.rate, 0).toFixed(2);

    return (
        <Box>
            <HStack justify="space-between" mb={1}>
                <Heading size="xs">Invoices</Heading>
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
                    invoices.map((inv) => (
                        <HStack
                            key={inv.id}
                            p={2}
                            border="1px solid"
                            borderColor={border}
                            borderRadius="md"
                            justify="space-between"
                        >
                            <Checkbox
                                isChecked={!!selectedForPayment.find((r) => r.id === inv.id)}
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
                                    {/* Order: Date → Invoice ID → Amount */}
                                    <Text fontSize="xs">{inv.date}</Text>
                                    <Text fontSize="xs" fontWeight="bold">
                                        {inv.id}
                                    </Text>
                                    <Text fontSize="xs" color="blue.500">
                                        ₹{getInvoiceTotal(inv)}
                                    </Text>
                                </HStack>
                            </Box>
                            {paidInvoices.includes(inv.id) && (
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
                    ))
                ) : (
                    <Text fontSize="sm" color="gray.500">
                        Select a customer to see invoices
                    </Text>
                )}
            </VStack>
        </Box>
    );
}

export default InvoiceList;
