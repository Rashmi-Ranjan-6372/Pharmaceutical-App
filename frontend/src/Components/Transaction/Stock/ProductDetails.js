// ProductDetails.js
import React from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    NumberInput,
    NumberInputField,
    List,
    ListItem,
    Heading,
    Text
} from "@chakra-ui/react";

const ProductDetails = ({
    products,
    setOpenDropdownIndex,
    openDropdownIndex,
    availableProducts,
    handleProductChange,
    handleProductSelect,
    border,
    headerBg,
    evenRowBg,
    oddRowBg,
    rowHoverBg
}) => {
    const narrowCol = { maxW: "80px", minW: "60px", p: 1, textAlign: "center" };
    const wideCol = { maxW: "90px", minW: "75px", p: 1, textAlign: "center" };

    return (
        <>
            <Heading as="h3" size="xs" mb={1} color="black">
                Product Details
            </Heading>
            <TableContainer
                border="1px"
                borderColor={border}
                mb={2}
                borderRadius="md"
                maxH="220px"
                overflowY="auto"
                overflowX="auto"
            >
                <Table size="xs">
                    <Thead bg={headerBg} position="sticky" top="0" zIndex="1">
                        <Tr>
                            <Th fontSize="xs" textAlign="center">SL</Th>
                            <Th fontSize="xs" textAlign="center">Product</Th>
                            <Th fontSize="xs" {...narrowCol}>Pack</Th>
                            <Th fontSize="xs" {...narrowCol}>Batch</Th>
                            <Th fontSize="xs" {...narrowCol}>Exp</Th>
                            {["MRP", "Rate", "Qty", "Free", "Disc", "Tax", "Amt"].map((name) => (
                                <Th key={name} fontSize="xs" {...wideCol}>{name}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((p, idx) => {
                            const qty = parseFloat(p.qty) || 0;
                            const free = parseFloat(p.free) || 0;
                            const discount = parseFloat(p.discount) || 0;
                            const tax = parseFloat(p.tax) || 0;
                            const rate = parseFloat(p.rate) || 0;
                            const amount = (qty - free) * rate - discount + tax;

                            const bgColor = idx % 2 === 1 ? evenRowBg : oddRowBg;
                            const filteredProducts = availableProducts.filter((prod) =>
                                prod.toLowerCase().includes(p.productName.toLowerCase())
                            );

                            return (
                                <Tr key={p.sl} bg={bgColor} _hover={{ bg: rowHoverBg }}>
                                    <Td textAlign="center">{p.sl}</Td>
                                    <Td position="relative">
                                        <Input
                                            size="xs"
                                            placeholder="Search product"
                                            value={p.productName}
                                            onChange={(e) => {
                                                handleProductChange(idx, "productName", e.target.value);
                                                setOpenDropdownIndex(idx);
                                            }}
                                            onFocus={() => setOpenDropdownIndex(idx)}
                                        />
                                        {openDropdownIndex === idx &&
                                            p.productName &&
                                            filteredProducts.length > 0 && (
                                                <Box
                                                    position="absolute"
                                                    zIndex="2"
                                                    bg="white"
                                                    border="1px solid"
                                                    borderColor="gray.200"
                                                    borderRadius="md"
                                                    mt={1}
                                                    w="200px"
                                                    maxH="120px"
                                                    overflowY="auto"
                                                    boxShadow="md"
                                                >
                                                    <List spacing={0}>
                                                        {filteredProducts.map((prod) => (
                                                            <ListItem
                                                                key={prod}
                                                                px={2}
                                                                py={1}
                                                                _hover={{ bg: "gray.100", cursor: "pointer" }}
                                                                onClick={() => handleProductSelect(idx, prod)}
                                                            >
                                                                {prod}
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Box>
                                            )}
                                    </Td>
                                    <Td {...narrowCol}>
                                        <Input size="xs" value={p.packing} onChange={(e) => handleProductChange(idx, "packing", e.target.value)} />
                                    </Td>
                                    <Td {...narrowCol}>
                                        <Input size="xs" value={p.batchNo} onChange={(e) => handleProductChange(idx, "batchNo", e.target.value)} />
                                    </Td>
                                    <Td {...narrowCol}>
                                        <Input size="xs" value={p.expDt} onChange={(e) => handleProductChange(idx, "expDt", e.target.value)} />
                                    </Td>
                                    {["mrp", "rate", "qty", "free", "discount", "tax"].map((field) => (
                                        <Td key={field} {...wideCol}>
                                            <NumberInput size="xs" min={0} value={p[field]} onChange={(v) => handleProductChange(idx, field, v)}>
                                                <NumberInputField textAlign="center" />
                                            </NumberInput>
                                        </Td>
                                    ))}
                                    <Td {...wideCol}>
                                        <Text fontWeight="semibold" fontSize="xs">
                                            {amount.toFixed(2)}
                                        </Text>
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ProductDetails;
