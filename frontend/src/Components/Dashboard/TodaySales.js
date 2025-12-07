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
import { TrendingUp, TrendingDown } from "lucide-react"; // graph arrows

const TodaySales = () => {
    // Example sales data
    const salesAmount = 10945;
    const salesChange = 4.63; // percentage change (positive = increase, negative = decrease)

    // Format amount as Indian Rupees
    const formattedAmount = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0, // removes decimals
    }).format(salesAmount);

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={{ base: 3, md: 4 }}
            bg="white"
            boxShadow="sm"
        >
            <Flex justify="space-between" align="center">
                {/* Sales Stats */}
                <Stat>
                    <StatLabel
                        fontSize={{ base: "md", md: "xl" }}
                        fontWeight="bold"
                        color="gray.600"
                    >
                        Today's Sales
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
                        color={salesChange >= 0 ? "green.500" : "red.500"}
                    >
                        <StatArrow type={salesChange >= 0 ? "increase" : "decrease"} />
                        {Math.abs(salesChange)}% vs. last week
                    </StatHelpText>
                </Stat>

                {/* Graph Arrow in Ellipse */}
                <Box
                    w="50px"
                    h="30px"
                    bg={salesChange >= 0 ? "green.100" : "red.100"}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {salesChange >= 0 ? (
                        <TrendingUp color="green" size={20} />
                    ) : (
                        <TrendingDown color="red" size={20} />
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default TodaySales;
