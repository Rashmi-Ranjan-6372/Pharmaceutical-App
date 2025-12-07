import React, { useState } from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import SalesDiscountTable from "./SalesDiscountTable";

import { listContainer, listTopText } from "./Style";

const mockData = [
    {
        slno: 1,
        party_id: "A",
        party_name: "Alpha Traders",
        item_id: "M",
        item_name: "Medicine A",
        discount_rate: 10.5,
        discount_mode: "A",
    },
    {
        slno: 2,
        party_id: "D",
        party_name: "Delta Suppliers",
        item_id: "P",
        item_name: "Painkiller P",
        discount_rate: 5.0,
        discount_mode: "B",
    },
];

const SalesDiscountList = () => {
    const [discounts] = useState(mockData);

    return (
        <Box {...listContainer}>
            <VStack spacing={3} align="stretch" flex="1">
                <Heading size="xs">Sales Discounts</Heading>
                <Text {...listTopText}>
                    Manage all sales discounts below.
                </Text>
                <SalesDiscountTable data={discounts} />
            </VStack>
        </Box>
    );
};

export default SalesDiscountList;
