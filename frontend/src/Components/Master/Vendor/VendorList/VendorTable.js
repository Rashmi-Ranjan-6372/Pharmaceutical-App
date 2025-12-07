import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

// Import shared styles
import {
    tableContainerStyle,
    tableStyle,
    theadStyle,
    trStyle,
    tdStyle,
    thStyle,
    glCodeStyle,           // Use this instead of idStyle
    tableActionButtonStyle,
    statusActiveStyle,
    statusInactiveStyle,
    actionMenuButtonStyle,
    actionMenuItemStyle,
} from "./Style";

const VendorTable = ({ vendors, onDelete }) => {
    const sortedVendors = [...vendors].sort((a, b) => a.id - b.id);

    return (
        <TableContainer {...tableContainerStyle}>
            <Table {...tableStyle}>
                <Thead {...theadStyle}>
                    <Tr {...trStyle}>
                        <Th {...thStyle}>ID</Th>
                        <Th {...thStyle}>Vendor</Th>
                        <Th {...thStyle}>Contact</Th>
                        <Th {...thStyle}>Mobile</Th>
                        <Th {...thStyle}>Email</Th>
                        <Th {...thStyle}>Address</Th>
                        <Th {...thStyle}>DL No.</Th>
                        <Th {...thStyle}>PAN</Th>
                        <Th {...thStyle}>Status</Th>
                        <Th {...thStyle} textAlign="center">
                            Actions
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {sortedVendors.length > 0 ? (
                        sortedVendors.map((vendor) => (
                            <Tr key={vendor.id} {...trStyle}>
                                <Td {...tdStyle} {...glCodeStyle}>
                                    {vendor.gl_code}
                                </Td>
                                <Td {...tdStyle} fontWeight="semibold">
                                    {vendor.vendorName}
                                </Td>
                                <Td {...tdStyle}>{vendor.contactPerson}</Td>
                                <Td {...tdStyle}>{vendor.contactNumber}</Td>
                                <Td {...tdStyle}>{vendor.email}</Td>
                                <Td {...tdStyle}>{vendor.address}</Td>
                                <Td {...tdStyle}>{vendor.drugLicense}</Td>
                                <Td {...tdStyle}>{vendor.pan}</Td>
                                <Td
                                    {...tdStyle}
                                    {...(vendor.status === "Active"
                                        ? statusActiveStyle
                                        : statusInactiveStyle)}
                                >
                                    {vendor.status}
                                </Td>
                                <Td {...tdStyle} textAlign="center">
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            icon={<BsThreeDotsVertical />}
                                            {...tableActionButtonStyle}
                                            {...actionMenuButtonStyle}
                                        />
                                        <MenuList {...actionMenuItemStyle}>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                onClick={() =>
                                                    alert(`Viewing details of ${vendor.vendorName}`)
                                                }
                                            >
                                                View
                                            </MenuItem>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                onClick={() =>
                                                    alert(`Edit ${vendor.vendorName}`)
                                                }
                                            >
                                                Edit
                                            </MenuItem>
                                            <MenuItem
                                                {...actionMenuItemStyle}
                                                onClick={() => onDelete(vendor.id)}
                                            >
                                                Delete
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan={10} textAlign="center" py={2}>
                                No vendors found.
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default VendorTable;
