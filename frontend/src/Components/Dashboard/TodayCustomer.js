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
import { TrendingUp, TrendingDown } from "lucide-react"; // Import icons

const TodayCustomer = () => {
    const customerCount = 208;
    const customerChange = 4.63; // Positive means increase

    return (
        <Box borderWidth="1px" borderRadius="lg" p={{ base: 3, md: 4 }} bg="white" boxShadow="sm">
            <Flex justify="space-between" align="center">
                <Stat>
                    <StatLabel
                        fontSize={{ base: "md", md: "xl" }}
                        fontWeight="bold"
                        color="gray.600"
                    >
                        Today's Customer
                    </StatLabel>

                    <StatNumber
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        color="gray.800"
                    >
                        {customerCount}
                    </StatNumber>

                    <StatHelpText
                        fontWeight="medium"
                        color={customerChange >= 0 ? "green.500" : "red.500"}
                    >
                        <StatArrow type={customerChange >= 0 ? "increase" : "decrease"} />
                        {Math.abs(customerChange)}% vs. last week
                    </StatHelpText>
                </Stat>

                {/* Elliptical Icon Box */}
                <Box
                    w="50px"
                    h="30px"
                    bg={customerChange >= 0 ? "green.100" : "red.100"}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {customerChange >= 0 ? (
                        <TrendingUp color="green" size={20} />
                    ) : (
                        <TrendingDown color="red" size={20} />
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default TodayCustomer;
