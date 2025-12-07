import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import Today_Sales from "./TodaySales";
import Today_Revenue from "./TodayRevenue";
import Today_Customer from "./TodayCustomer";
import Today_Expense from "./TodayExpense";
import Total_Sales from "./TotalSales";
import Store_Visitors from "./StoreVisitors";
import Store_Statistics from "./StoreStatistics";
import New_Customers from "./NewCustomers";
import Transaction from "./Transaction";

const Dashboard = () => {
    return (
        <Box p={0} m={0}>
            {/* Top Cards */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={1}>
                <Today_Sales />
                <Today_Revenue />
                <Today_Customer />
                <Today_Expense />
            </SimpleGrid>

            {/* Middle Cards */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1} mt={1}>
                <Total_Sales />
                <Store_Visitors />
            </SimpleGrid>

            {/* Bottom Section */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1} mt={1}>
                <Store_Statistics />
                <New_Customers />
            </SimpleGrid>

            {/* Transaction Table Full Width */}
            <Box mt={1}>
                <Transaction />
            </Box>
        </Box>
    );
};

export default Dashboard;
