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
import { TrendingUp, TrendingDown } from "lucide-react";

const TodayExpense = () => {
    const expenseAmount = 23485;
    const expenseChange = 1.34; // Positive means expenses increased (bad)

    const formattedAmount = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(expenseAmount);

    const isExpenseUp = expenseChange >= 0;

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={{ base: 3, md: 4 }}
            bg="white"
            boxShadow="sm"
        >
            <Flex justify="space-between" align="center">
                <Stat>
                    <StatLabel
                        fontSize={{ base: "md", md: "xl" }}
                        fontWeight="bold"
                        color="gray.600"
                    >
                        Today's Expense
                    </StatLabel>

                    <StatNumber
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        color="gray.800"
                    >
                        {formattedAmount}
                    </StatNumber>

                    <StatHelpText fontWeight="medium" color="red.500">
                        <StatArrow type="increase" color="green.500" />
                        {Math.abs(expenseChange)}% vs. last week
                    </StatHelpText>
                </Stat>

                <Box
                    w="50px"
                    h="30px"
                    bg={isExpenseUp ? "red.100" : "green.100"}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {isExpenseUp ? (
                        <TrendingUp color="red" size={20} />
                    ) : (
                        <TrendingDown color="green" size={20} />
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default TodayExpense;
