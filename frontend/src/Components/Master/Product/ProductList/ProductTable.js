// src/Components/Master/Product/ProductList/ProductTable.js
import React from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { FiMoreVertical } from "react-icons/fi";

import {
    tableContainerStyle,
    tableStyle,
    theadStyle,
    trStyle,
    thStyle,
    tdStyle,
    priceCellStyle,
    actionCellStyle,
    actionMenuButtonStyle,
    actionMenuListStyle,
    actionMenuItemStyle,
    noDataStyle,
    statusActiveStyle,
    statusInactiveStyle,
} from "./Style";

const ProductTable = ({ medicines, handleDeleteClick }) => {
    return (
        <Box {...tableContainerStyle}>
            <Table {...tableStyle}>
                <Thead {...theadStyle}>
                    <Tr {...trStyle}>
                        <Th {...thStyle}>Sl. No</Th>
                        <Th {...thStyle}>Name</Th>
                        <Th {...thStyle}>Generic Name</Th>
                        <Th {...thStyle}>SKU</Th>
                        <Th {...thStyle}>Weight</Th>
                        <Th {...thStyle}>Category</Th>
                        <Th {...thStyle}>Rack</Th>
                        <Th {...thStyle}>Price</Th>
                        <Th {...thStyle}>Purchase Disc</Th>
                        <Th {...thStyle}>Sales Disc</Th>
                        <Th {...thStyle}>Status</Th>
                        <Th {...thStyle} textAlign="center">
                            Actions
                        </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {medicines.length ? (
                        medicines.map((m, i) => (
                            <Tr key={i} {...trStyle}>
                                <Td {...tdStyle} textAlign="center">
                                    {i + 1}
                                </Td>
                                <Td {...tdStyle} fontWeight="semibold">
                                    {m.name}
                                </Td>
                                <Td {...tdStyle}>{m.generic}</Td>
                                <Td {...tdStyle}>{m.sku}</Td>
                                <Td {...tdStyle}>{m.weight}</Td>
                                <Td {...tdStyle}>{m.category}</Td>
                                <Td {...tdStyle}>{m.rack}</Td>
                                <Td {...tdStyle} {...priceCellStyle}>
                                    {m.unit ? `${m.unit} ${m.price.toFixed(2)}` : m.price.toFixed(2)}
                                </Td>
                                <Td {...tdStyle}>{m.purchaseDiscount}</Td>
                                <Td {...tdStyle}>{m.salesDiscount}</Td>
                                <Td
                                    {...tdStyle}
                                    {...(m.status === "Available"
                                        ? statusActiveStyle
                                        : statusInactiveStyle)}
                                >
                                    {m.status}
                                </Td>
                                <Td {...actionCellStyle}>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            icon={<FiMoreVertical />}
                                            {...actionMenuButtonStyle}
                                        />
                                        <MenuList {...actionMenuListStyle}>
                                            <MenuItem icon={<EditIcon />} {...actionMenuItemStyle}>
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                icon={<DeleteIcon />}
                                                {...actionMenuItemStyle}
                                                onClick={() => handleDeleteClick(m)}
                                            >
                                                Remove
                                            </MenuItem>
                                            <MenuItem icon={<ViewIcon />} {...actionMenuItemStyle}>
                                                View Details
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            {/* 12 columns total (Sl. No + 10 fields + Actions) */}
                            <Td {...noDataStyle} colSpan={12}>
                                No Product Found.
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default ProductTable;
