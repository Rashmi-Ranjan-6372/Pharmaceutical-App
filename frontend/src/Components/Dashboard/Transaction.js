import React, { useState } from "react";
import {
    Box,
    Flex,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    Link,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { ViewIcon } from "@chakra-ui/icons";
import { FaFileInvoice, FaPrint } from "react-icons/fa";

const transactions = [
    { id: "#95954", name: "Abu Bin Ishtiyak", date: "02/11/2020", ref: "SUB-2309232", amount: 4596.75, status: "Paid" },
    { id: "#95812", name: "Blanca Schultz", date: "02/01/2020", ref: "SUB-2309143", amount: 199.99, status: "Paid" },
    { id: "#95256", name: "Naomi Lawrence", date: "01/29/2020", ref: "SUB-2305684", amount: 1099.99, status: "Paid" },
    { id: "#95135", name: "Nina Castor", date: "01/28/2020", ref: "SUB-2305680", amount: 1099.99, status: "Due" },
];

const getStatusBadge = (status) => {
    const color = status === "Paid" ? "green.500" : "yellow.500";
    const dotColor = status === "Paid" ? "green.400" : "yellow.400";

    return (
        <HStack spacing={1}>
            <Box w="2" h="2" bg={dotColor} borderRadius="full" />
            <Text fontSize="xs" color={color} fontWeight="semibold">
                {status}
            </Text>
        </HStack>
    );
};

const Transaction = () => {
    const [filter, setFilter] = useState("All");

    const filteredTransactions = transactions.filter((tx) => {
        if (filter === "All") return true;
        if (filter === "Paid") return tx.status === "Paid";
        if (filter === "Pending") return tx.status === "Due";
        return true;
    });

    return (
        <Box p={4} borderWidth="1px" borderRadius="lg" bg="white" boxShadow="sm" overflowX="auto">
            {/* Header */}
            <Flex
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
                align={{ base: "flex-start", sm: "center" }}
                mb={4}
                gap={3}
            >
                <HStack spacing={4}>
                    <Text fontWeight="bold" fontSize="lg">Transaction</Text>
                    <Link color="green.500" fontSize="sm" fontWeight="semibold">
                        See History
                    </Link>
                </HStack>

                <HStack spacing={4}>
                    {["All", "Pending", "Paid"].map((f) => (
                        <Link
                            key={f}
                            fontSize="sm"
                            fontWeight={filter === f ? "bold" : "normal"}
                            color={filter === f ? "green.500" : "gray.500"}
                            onClick={() => setFilter(f)}
                            _hover={{ textDecoration: "underline" }}
                            cursor="pointer"
                        >
                            {f}
                        </Link>
                    ))}
                </HStack>
            </Flex>

            {/* Table */}
            <Box overflowX="auto">
                <Table variant="simple" size="sm" minW="950px">
                    <Thead>
                        <Tr>
                            <Th fontSize="sm" color="gray.600">Invoice No</Th>
                            <Th fontSize="sm" color="gray.600">Customer</Th>
                            <Th fontSize="sm" color="gray.600">Date</Th>
                            <Th fontSize="sm" color="gray.600">Ref</Th>
                            <Th fontSize="sm" color="gray.600" isNumeric>Amount</Th>
                            <Th fontSize="sm" color="gray.600">Status</Th>
                            <Th fontSize="sm" color="gray.600"></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredTransactions.map((tx) => (
                            <Tr key={tx.id} _hover={{ bg: "gray.50" }}>
                                <Td>
                                    <Link color="green.500" fontWeight="semibold" fontSize="sm">
                                        {tx.id}
                                    </Link>
                                </Td>
                                <Td><Text fontWeight="medium" fontSize="sm">{tx.name}</Text></Td>
                                <Td><Text fontSize="xs" color="gray.600">{tx.date}</Text></Td>
                                <Td><Text fontSize="xs" color="gray.600">{tx.ref}</Text></Td>
                                <Td isNumeric>
                                    <Text fontWeight="bold" fontSize="sm">
                                        {new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                            maximumFractionDigits: 2,
                                        }).format(tx.amount)}
                                    </Text>
                                </Td>
                                <Td>{getStatusBadge(tx.status)}</Td>
                                <Td>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            icon={<FiMoreVertical />}
                                            variant="ghost"
                                            size="sm"
                                            aria-label="Actions"
                                        />
                                        <MenuList fontSize="sm">
                                            <MenuItem icon={<ViewIcon />}>View</MenuItem>
                                            <MenuItem icon={<FaFileInvoice />}>Invoice</MenuItem>
                                            <MenuItem icon={<FaPrint />}>Print</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default Transaction;
