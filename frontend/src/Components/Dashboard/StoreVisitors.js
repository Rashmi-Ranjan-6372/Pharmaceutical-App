import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
} from "@chakra-ui/react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Chart Data
const visitorData = [
    { date: "01 Jul", physical: 3500, online: 400 },
    { date: "05 Jul", physical: 5000, online: 700 },
    { date: "10 Jul", physical: 6000, online: 500 },
    { date: "15 Jul", physical: 6500, online: 200 },
    { date: "20 Jul", physical: 5800, online: 300 },
    { date: "25 Jul", physical: 8000, online: 500 },
    { date: "30 Jul", physical: 7200, online: 650 },
];

const StoreVisitors = () => {
    return (
        <Box
            bg="white"
            borderRadius="lg"
            p={{ base: 3, md: 4 }}
            borderWidth={1}
            boxShadow="sm"
            minH={{ base: "300px", md: "280px" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            {/* Header Section */}
            <Box>
                <Flex justify="space-between" align="center" mb={2}>
                    <Heading
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="semibold"
                        color="gray.700"
                    >
                        Store Visitors
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                        Weekly
                    </Text>
                </Flex>

                <Flex gap={4} fontSize={{ base: "xs", md: "sm" }} mb={2}>
                    <Flex align="center" gap={1}>
                        <Box w={3} h={3} bg="green.400" borderRadius="full" />
                        <Text color="gray.600">Physically</Text>
                    </Flex>
                    <Flex align="center" gap={1}>
                        <Box w={3} h={3} bg="red.400" borderRadius="full" />
                        <Text color="gray.600">Online</Text>
                    </Flex>
                </Flex>
            </Box>

            {/* Chart Section */}
            <Box height={{ base: "180px", md: "160px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visitorData}>
                        <CartesianGrid stroke="#e2e8f0" strokeDasharray="5 5" />
                        <XAxis dataKey="date" fontSize={10} tick={{ fill: "#4A5568" }} />
                        <YAxis fontSize={10} tick={{ fill: "#4A5568" }} />
                        <Tooltip
                            contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
                            formatter={(value) => `${value} visitors`}
                        />
                        <Line
                            type="monotone"
                            dataKey="physical"
                            stroke="#38A169"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="online"
                            stroke="#F56565"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default StoreVisitors;
