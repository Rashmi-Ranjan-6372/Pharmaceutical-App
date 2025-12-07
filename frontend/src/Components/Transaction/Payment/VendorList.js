// src/Components/Transaction/Invoice/VendorList.js
import React from "react";
import {
    Box,
    Heading,
    Input,
    Text,
    VStack,
    useColorModeValue
} from "@chakra-ui/react";

function VendorList({
    vendors = [],             // ✅ default empty array
    searchTerm = "",
    onSearch,
    selectedVendor,
    onSelectVendor
}) {
    const border = useColorModeValue("gray.200", "gray.700");
    const bgHover = useColorModeValue("gray.100", "gray.600");

    return (
        <Box>
            <Heading size="sm" mb={2}>
                Vendors
            </Heading>

            {/* Search box */}
            <Input
                placeholder="Search vendor..."
                size="sm"
                mb={2}
                value={searchTerm}
                onChange={(e) => onSearch?.(e.target.value)}
            />

            {/* Vendor list */}
            <Box flex="1" overflowY="auto" mb={2} maxH="250px">
                <VStack align="stretch" spacing={1}>
                    {vendors.length > 0 ? (
                        vendors.map((vendor) => (
                            <Box
                                key={vendor.id}
                                py={1}
                                px={2}
                                border="1px solid"
                                borderColor={border}
                                borderRadius="md"
                                _hover={{ bg: bgHover, cursor: "pointer" }}
                                bg={selectedVendor?.id === vendor.id ? "green.50" : "transparent"} // ✅ highlight row
                                onClick={() => onSelectVendor?.(vendor)}
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight={
                                        selectedVendor?.id === vendor.id ? "bold" : "normal"
                                    }
                                    color={
                                        selectedVendor?.id === vendor.id
                                            ? "green.600"
                                            : "inherit"
                                    }
                                >
                                    {vendor.name}
                                </Text>
                            </Box>
                        ))
                    ) : (
                        <Text fontSize="sm" color="gray.500">
                            No vendors found
                        </Text>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default VendorList;
