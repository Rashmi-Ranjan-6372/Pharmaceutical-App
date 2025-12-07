import React from "react";
import {
    Box,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Flex,
} from "@chakra-ui/react";
import { TrendingUp, TrendingDown } from "lucide-react"; // arrow icons

const TodayRevenue = () => {
    const revenueAmount = 12338; // Today's revenue
    const revenueChange = -2.34; // Negative means decrease

    // Format amount as Indian Rupees
    const formattedAmount = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0, // No decimals
    }).format(revenueAmount);

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={{ base: 3, md: 4 }}
            bg="white"
            boxShadow="sm"
        >
            <Flex justify="space-between" align="center">
                {/* Revenue Stats */}
                <Stat>
                    <StatLabel
                        fontSize={{ base: "md", md: "xl" }}
                        fontWeight="bold"
                        color="gray.600"
                    >
                        Today's Revenue
                    </StatLabel>

                    <StatNumber
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        color="gray.800"
                    >
                        {formattedAmount}
                    </StatNumber>

                    <StatHelpText
                        fontWeight="medium"
                        color={revenueChange < 0 ? "red.500" : "green.500"}
                    >
                        <StatArrow type={revenueChange < 0 ? "decrease" : "increase"} />
                        {Math.abs(revenueChange)}% vs. last week
                    </StatHelpText>
                </Stat>

                {/* Elliptical Arrow Icon */}
                <Box
                    w="50px"
                    h="30px"
                    bg={revenueChange < 0 ? "red.100" : "green.100"}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {revenueChange < 0 ? (
                        <TrendingDown color="red" size={20} />
                    ) : (
                        <TrendingUp color="green" size={20} />
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default TodayRevenue;
