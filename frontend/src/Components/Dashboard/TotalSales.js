import React from "react";
import {
    Box,
    Text,
    Stat,
    StatHelpText,
    StatArrow,
    Flex,
    Link,
    Heading,
} from "@chakra-ui/react";
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

// Sample sales data
const salesChartData = [
    { date: "01 Jan", sales: 90 },
    { date: "02 Jan", sales: 100 },
    { date: "03 Jan", sales: 95 },
    { date: "04 Jan", sales: 80 },
    { date: "05 Jan", sales: 120 },
    { date: "06 Jan", sales: 100 },
    { date: "07 Jan", sales: 90 },
    { date: "08 Jan", sales: 110 },
    { date: "09 Jan", sales: 95 },
    { date: "10 Jan", sales: 130 },
];

const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(amount);

const TotalSales = () => {
    return (
        <Box
            p={{ base: 3, md: 4 }}
            borderRadius="lg"
            boxShadow="md"
            bg="white"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            borderWidth="1px"
            h={{ base: "auto", md: "280px" }}
        >
            {/* Header & Stats */}
            <Flex
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
                align={{ base: "flex-start", sm: "flex-start" }}
                mb={4}
                gap={4}
            >
                {/* Sales Info */}
                <Box>
                    <Heading
                        fontSize={{ base: "md", md: "lg" }}
                        color="gray.700"
                        fontWeight="semibold"
                    >
                        Total Sales
                    </Heading>

                    <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="bold"
                        mt={1}
                        color="gray.800"
                    >
                        {formatINR(74958.49)}
                    </Text>

                    <Text fontSize="xs" color="gray.600">
                        {formatINR(7395.37)} in last month
                    </Text>

                    <Box mt={4}>
                        <Text fontSize="xs" color="gray.600">
                            This week so far
                        </Text>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="semibold"
                            mt={0.5}
                            color="gray.800"
                        >
                            {formatINR(1338.72)}
                        </Text>
                    </Box>
                </Box>

                {/* Stat Comparison */}
                <Box>
                    <Stat textAlign="right">
                        <StatHelpText fontSize="xs" color="green.500">
                            <StatArrow type="increase" />
                            4.63%
                        </StatHelpText>
                        <Text fontSize="xs" color="gray.600" mt={1}>
                            vs. last week
                        </Text>
                        <Link
                            fontSize="xs"
                            color="blue.500"
                            fontWeight="medium"
                            mt={4}
                            display="inline-block"
                        >
                            View Report
                        </Link>
                    </Stat>
                </Box>
            </Flex>

            {/* Chart */}
            <Box h={{ base: "120px", md: "80px" }} mt={2}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesChartData}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#38A169" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#38A169" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Tooltip
                            content={({ active, payload }) =>
                                active && payload && payload.length ? (
                                    <Box
                                        bg="blackAlpha.800"
                                        color="white"
                                        p="2"
                                        borderRadius="md"
                                        fontSize="xs"
                                    >
                                        <Text>{payload[0].payload.date}</Text>
                                        <Text>{payload[0].value} Sales</Text>
                                    </Box>
                                ) : null
                            }
                        />

                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#38A169"
                            fillOpacity={1}
                            fill="url(#colorSales)"
                            strokeWidth={2}
                            dot={{ stroke: "white", strokeWidth: 2, r: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default TotalSales;
