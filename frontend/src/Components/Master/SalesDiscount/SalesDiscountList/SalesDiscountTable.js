// src/Components/Master/SalesDiscount/SalesDiscountTable.js
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";

import {
    tableContainerStyle,
    tableStyle,
    theadStyle,
    trStyle,
    tdStyle,
    thStyle,
    actionMenuButtonStyle,
    actionMenuItemStyle,
} from "./Style";

// Mapping for readable values
const partyTypeMap = {
    A: "Area",
    C: "Sundry Creditors",
    D: "Sundry Debtors",
};

const itemTypeMap = {
    M: "Manufacturer",
    P: "Product",
};

const discountModeMap = {
    A: "After-Tax",
    B: "Before-Tax",
};

const SalesDiscountTable = ({ data = [] }) => {
    return (
        <Box {...tableContainerStyle}>
            <Table {...tableStyle}>
                <Thead {...theadStyle}>
                    <Tr {...trStyle}>
                        <Th {...thStyle}>Sl. No</Th>
                        <Th {...thStyle}>Party Type</Th>
                        <Th {...thStyle}>Party Name</Th>
                        <Th {...thStyle}>Item Type</Th>
                        <Th {...thStyle}>Item Name</Th>
                        <Th {...thStyle} isNumeric>
                            Discount Rate
                        </Th>
                        <Th {...thStyle}>Discount Mode</Th>
                        <Th {...thStyle}>Action</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {data.map((row) => (
                        <Tr key={row.slno} {...trStyle}>
                            <Td {...tdStyle}>{row.slno}</Td>
                            <Td {...tdStyle}>{partyTypeMap[row.party_id]}</Td>
                            <Td {...tdStyle}>{row.party_name}</Td>
                            <Td {...tdStyle}>{itemTypeMap[row.item_id]}</Td>
                            <Td {...tdStyle}>{row.item_name}</Td>
                            <Td {...tdStyle} isNumeric>
                                {row.discount_rate}%
                            </Td>
                            <Td {...tdStyle}>{discountModeMap[row.discount_mode]}</Td>
                            <Td {...tdStyle}>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        icon={<BiDotsVerticalRounded />}
                                        {...actionMenuButtonStyle}
                                    />
                                    <MenuList>
                                        <MenuItem {...actionMenuItemStyle}>Edit</MenuItem>
                                        <MenuItem {...actionMenuItemStyle}>Delete</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default SalesDiscountTable;
