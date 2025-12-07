// src/Components/Master/SalesArea/SalesAreaTable.js
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Badge,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

// ✅ Import styles from shared style file
import {
    tableStyle,
    theadStyle,
    trStyle,
    thStyle,
    tdStyle,
    tableActionButtonStyle,
    statusActiveStyle,
    statusInactiveStyle,
} from "./Style";

const SalesAreaTable = ({ data }) => {
    return (
        <Table {...tableStyle}>
            <Thead {...theadStyle}>
                <Tr {...trStyle}>
                    <Th {...thStyle}>Sl. No</Th>
                    <Th {...thStyle}>Area Name</Th>
                    <Th {...thStyle}>Discount Rate (%)</Th>
                    <Th {...thStyle}>Discount Mode</Th>
                    <Th {...thStyle}>Modify Allowed</Th>
                    <Th {...thStyle} textAlign="left">
                        Status
                    </Th>
                    <Th {...thStyle} textAlign="center">
                        Action
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.length ? (
                    data.map((area, index) => (
                        <Tr key={index} {...trStyle}>
                            <Td {...tdStyle}>{index + 1}</Td>
                            <Td {...tdStyle} fontWeight="semibold">
                                {area.area_name}
                            </Td>
                            <Td {...tdStyle}>{area.sales_discount_rate}</Td>
                            <Td {...tdStyle}>
                                {area.sales_discount_mode === "A" ? "Flat" : "Percentage"}
                            </Td>
                            <Td {...tdStyle}>
                                {area.modify_allowed === "Y" ? "Yes" : "No"}
                            </Td>
                            <Td {...tdStyle} textAlign="left">
                                <Badge
                                    fontSize="xs"
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                    variant="subtle"
                                    {...(area.del === " " ? statusActiveStyle : statusInactiveStyle)}
                                    bg="transparent"
                                >
                                    {area.del === " " ? "Active" : "Inactive"}
                                </Badge>
                            </Td>
                            <Td {...tdStyle} textAlign="center">
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        icon={<FiMoreVertical />}
                                        {...tableActionButtonStyle}
                                    />
                                    <MenuList>
                                        <MenuItem>Edit</MenuItem>
                                        <MenuItem color="red.500">Delete</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Td>
                        </Tr>
                    ))
                ) : (
                    <Tr>
                        <Td colSpan={7} textAlign="center" py={5} color="gray.500">
                            No Sale Area Found.
                        </Td>
                    </Tr>
                )}
            </Tbody>
        </Table>
    );
};

export default SalesAreaTable;
