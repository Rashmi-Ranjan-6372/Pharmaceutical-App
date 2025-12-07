import React, { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import SalesAreaSearchbar from "./SalesAreaSearchbar";
import SalesAreaTable from "./SalesAreaTable"; // Your table component

// Import styles
import {
    listContainer,
    listTopText,
    addButtonStyle,
} from "./Style";

function SaleAreaDataTable() {
    // Sample data representing SaleArea records
    const saleAreas = [
        {
            area_name: "North Zone",
            parent_code: "0",
            sales_discount_rate: 5.5,
            sales_discount_mode: "A",
            modify_allowed: "Y",
            comp_code: "101",
            user_code: "501",
            del: " ",
        },
        {
            area_name: "South Zone",
            parent_code: "0",
            sales_discount_rate: 3.0,
            sales_discount_mode: "B",
            modify_allowed: "Y",
            comp_code: "102",
            user_code: "502",
            del: " ",
        },
        {
            area_name: "East Zone",
            parent_code: "1",
            sales_discount_rate: 2.5,
            sales_discount_mode: "A",
            modify_allowed: "N",
            comp_code: "101",
            user_code: "503",
            del: "*",
        },
        {
            area_name: "West Zone",
            parent_code: "2",
            sales_discount_rate: 4.0,
            sales_discount_mode: "B",
            modify_allowed: "Y",
            comp_code: "103",
            user_code: "504",
            del: " ",
        },
    ];

    // State for search
    const [searchQuery, setSearchQuery] = useState("");

    // Filter data based on search
    const filteredAreas = saleAreas.filter((area) =>
        area.area_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box {...listContainer}>
            {/* Total Count on Top */}
            {/* <Text {...listTopText}>Total Areas: {filteredAreas.length}</Text> */}
            <Text
                fontSize={listTopText.fontSize}
                mb={listTopText.mb}
                color={listTopText.color}
            >
                You have total <b>{filteredAreas.length} Sales Area(s)</b> for Pharmacy.
            </Text>
            {/* Search bar and Add button */}
            <Flex mb={3} align="center" justify="space-between" gap={3}>
                {/* Search bar with constrained width */}
                <Box flex="1" maxW="250px">
                    <SalesAreaSearchbar
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Area..."
                    />
                </Box>

                {/* Add button aligned right */}
                <Button
                    {...addButtonStyle}
                    onClick={() => alert("Add Sales Area clicked!")}
                >
                    + Add Sales Area
                </Button>
            </Flex>

            {/* Render the SalesAreaTable with filtered data */}
            <SalesAreaTable data={filteredAreas} />
        </Box>
    );
}

export default SaleAreaDataTable;
