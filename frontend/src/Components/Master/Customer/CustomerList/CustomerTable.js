// src/Components/Master/Customer/CustomerList/CustomerTable.js
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from "@chakra-ui/react";
import { DeleteIcon, ViewIcon, EditIcon } from "@chakra-ui/icons";
import { BiDotsVertical } from "react-icons/bi";

import {
    tableContainerStyle,
    tableStyle,
    theadStyle,
    trStyle,
    thStyle,
    tdStyle,
    glCodeStyle,
    statusActiveStyle,
    statusInactiveStyle,
    actionMenuButtonStyle,
    actionMenuItemStyle
} from "./Style";

const CustomerTable = ({ customers, onDelete }) => {
    // Sort customers by `id` ascending
    const sortedCustomers = [...customers].sort((a, b) => a.id - b.id);

    return (
        <Box {...tableContainerStyle}>
            <Table {...tableStyle}>
                <Thead>
                    <Tr {...trStyle} {...theadStyle}>
                        <Th {...thStyle}>GL Code</Th>
                        <Th {...thStyle}>DL No.</Th>
                        <Th {...thStyle}>Name</Th>
                        <Th {...thStyle}>Contact Person</Th>
                        <Th {...thStyle}>Mobile</Th>
                        <Th {...thStyle}>Area</Th>
                        <Th {...thStyle}>Address</Th>
                        <Th {...thStyle}>Status</Th>
                        <Th {...thStyle}>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {sortedCustomers.length > 0 ? (
                        sortedCustomers.map((c) => (
                            <Tr key={c.id} {...trStyle}>
                                <Td {...tdStyle} {...glCodeStyle}>{c.gl_code}</Td>
                                <Td {...tdStyle}>{c.drug_license_no || "-"}</Td>
                                <Td {...tdStyle}>{c.name}</Td>
                                <Td {...tdStyle}>{c.contact_person}</Td>
                                <Td {...tdStyle}>{c.telephone_no}</Td>
                                <Td {...tdStyle}>{c.area || "-"}</Td>
                                <Td {...tdStyle}>
                                    {`${c.city || "-"}, ${c.state || "-"}, ${c.country || "-"}`}
                                </Td>
                                <Td
                                    {...tdStyle}
                                    {...(c.status === "Active" ? statusActiveStyle : statusInactiveStyle)}
                                >
                                    {c.status}
                                </Td>
                                <Td {...tdStyle}>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            icon={<BiDotsVertical />}
                                            {...actionMenuButtonStyle}
                                        />
                                        <MenuList>

                                            <MenuItem {...actionMenuItemStyle} icon={<ViewIcon />}>
                                                View
                                            </MenuItem>
                                            <MenuItem {...actionMenuItemStyle} icon={<EditIcon />}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                onClick={() => onDelete(c.id)}
                                                icon={<DeleteIcon />}
                                            >
                                                Delete
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr {...trStyle}>
                            <Td colSpan={9} textAlign="center" py={4}>
                                No Customer Found.
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default CustomerTable;
