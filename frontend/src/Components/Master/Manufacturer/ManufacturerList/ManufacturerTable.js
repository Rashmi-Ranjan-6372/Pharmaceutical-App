// src/Components/Master/Manufacturer/ManufacturerList/ManufacturerTable.js
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
    IconButton
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
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

const ManufacturerTable = ({ manufacturers, selected, setSelected, onDelete, onView, onEdit }) => {
    // Sort manufacturers by `id` ascending
    const sortedManufacturers = [...manufacturers].sort((a, b) => a.id - b.id);

    return (
        <Box {...tableContainerStyle}>
            <Table {...tableStyle}>
                <Thead>
                    <Tr {...trStyle} {...theadStyle}>
                        <Th {...thStyle}>GL Code</Th>
                        <Th {...thStyle}>Manufacturer</Th>
                        <Th {...thStyle}>Abbr.</Th>
                        <Th {...thStyle}>MR Name</Th>
                        <Th {...thStyle}>MR Mobile</Th>
                        <Th {...thStyle}>Address</Th>
                        <Th {...thStyle}>Status</Th>
                        <Th {...thStyle}>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {sortedManufacturers.length > 0 ? (
                        sortedManufacturers.map((m) => (
                            <Tr key={m.id} {...trStyle}>
                                <Td {...tdStyle} {...glCodeStyle}>{m.gl_code}</Td>
                                <Td {...tdStyle}>{m.company}</Td>
                                <Td {...tdStyle}>{m.abbreviation}</Td>
                                <Td {...tdStyle}>{m.crName}</Td>
                                <Td {...tdStyle}>{m.crPhone}</Td>
                                <Td {...tdStyle}>
                                    {`${m.city || "-"}, ${m.state || "-"}, ${m.country || "-"}`}
                                </Td>
                                <Td
                                    {...tdStyle}
                                    {...(m.status === "Active" ? statusActiveStyle : statusInactiveStyle)}
                                >
                                    {m.status}
                                </Td>
                                <Td {...tdStyle}>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            icon={<BiDotsVertical />}
                                            {...actionMenuButtonStyle}
                                        />
                                        <MenuList>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                icon={<ViewIcon />}
                                                onClick={() => onView && onView(m.id)}
                                            >
                                                View
                                            </MenuItem>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                icon={<EditIcon />}
                                                onClick={() => onEdit && onEdit(m.id)}
                                            >
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                icon={<DeleteIcon />}
                                                onClick={() => onDelete(m.id)}
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
                            <Td colSpan={8} textAlign="center" py={4}>
                                No Manufacturer Found.
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </Box>
    );
};

export default ManufacturerTable;
