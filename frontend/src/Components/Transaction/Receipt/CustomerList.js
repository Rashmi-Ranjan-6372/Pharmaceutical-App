// src/Components/Transaction/Invoice/CustomerList.js
import React from "react";
import {
    Box,
    Heading,
    Input,
    Text,
    VStack,
    useColorModeValue
} from "@chakra-ui/react";

function CustomerList({
    customers = [],           // ✅ default empty array
    searchTerm = "",
    onSearch,
    selectedCustomer,
    onSelectCustomer
}) {
    const border = useColorModeValue("gray.200", "gray.700");
    const bgHover = useColorModeValue("gray.100", "gray.600");

    return (
        <Box>
            <Heading size="sm" mb={2}>
                Customers
            </Heading>

            {/* Search box */}
            <Input
                placeholder="Search customer..."
                size="sm"
                mb={2}
                value={searchTerm}
                onChange={(e) => onSearch?.(e.target.value)}
            />

            {/* Customer list */}
            <Box flex="1" overflowY="auto" mb={2} maxH="250px">
                <VStack align="stretch" spacing={1}>
                    {customers.length > 0 ? (
                        customers.map((cust) => (
                            <Box
                                key={cust.id}
                                py={1}
                                px={2}
                                border="1px solid"
                                borderColor={border}
                                borderRadius="md"
                                _hover={{ bg: bgHover, cursor: "pointer" }}
                                bg={selectedCustomer?.id === cust.id ? "green.50" : "transparent"} // ✅ highlight row
                                onClick={() => onSelectCustomer?.(cust)}
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight={
                                        selectedCustomer?.id === cust.id ? "bold" : "normal"
                                    }
                                    color={
                                        selectedCustomer?.id === cust.id
                                            ? "green.600"
                                            : "inherit"
                                    }
                                >
                                    {cust.name}
                                </Text>
                            </Box>
                        ))
                    ) : (
                        <Text fontSize="sm" color="gray.500">
                            No customers found
                        </Text>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default CustomerList;
