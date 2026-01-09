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
  IconButton,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { DeleteIcon, ViewIcon, EditIcon } from "@chakra-ui/icons";
import { BiDotsVertical } from "react-icons/bi";

import HighlightText from "./HighlightText";

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
  actionMenuItemStyle,
} from "./Style";

const ManufacturerTable = ({
  manufacturers,
  searchQuery,
  onDelete,
  onView,
  onEdit,
  isLoading,
}) => {
  const formatDiscount = (mode, rate) => {
    if (!rate || Number(rate) === 0) return "-";
    return mode === "flat" ? `Flat ${rate}` : `${rate}%`;
  };

  return (
    <Box {...tableContainerStyle}>
      <Table {...tableStyle}>
        <Thead>
          <Tr {...trStyle} {...theadStyle}>
            <Th {...thStyle}>MFG Code</Th>
            <Th {...thStyle}>Manufacturer</Th>
            <Th {...thStyle}>Abbr.</Th>
            <Th {...thStyle}>MR Name</Th>
            <Th {...thStyle}>MR Mobile</Th>
            <Th {...thStyle}>City</Th>
            <Th {...thStyle}>Purchase Disc.</Th>
            <Th {...thStyle}>Sales Disc.</Th>
            <Th {...thStyle}>Status</Th>
            <Th {...thStyle}>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {/* ✅ CENTERED LOADER */}
          {isLoading ? (
            <Tr>
              <Td colSpan={10}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minH="220px"
                >
                  <Spinner size="xl" thickness="4px" />
                </Box>
              </Td>
            </Tr>
          ) : manufacturers.length ? (
            manufacturers.map((m) => (
              <Tr key={m.id} {...trStyle}>
                <Td {...tdStyle} {...glCodeStyle}>
                  {m.mfg_code}
                </Td>

                <Td {...tdStyle}>
                  <HighlightText
                    text={m.mfg_name}
                    highlight={searchQuery}
                  />
                </Td>

                <Td {...tdStyle}>{m.mfg_short || "-"}</Td>

                <Td {...tdStyle}>
                  <HighlightText
                    text={m.mr_name || "-"}
                    highlight={searchQuery}
                  />
                </Td>

                <Td {...tdStyle}>{m.mr_phone || "-"}</Td>
                <Td {...tdStyle}>{m.city || "-"}</Td>

                <Td {...tdStyle}>
                  {formatDiscount(
                    m.purchase_discount_mode,
                    m.purchase_discount_rate
                  )}
                </Td>

                <Td {...tdStyle}>
                  {formatDiscount(
                    m.sales_discount_mode,
                    m.sales_discount_rate
                  )}
                </Td>

                <Td
                  {...tdStyle}
                  {...(m.is_active
                    ? statusActiveStyle
                    : statusInactiveStyle)}
                >
                  {m.is_active ? "Active" : "Inactive"}
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
                        icon={<ViewIcon />}
                        onClick={() => onView(m)}
                        {...actionMenuItemStyle}
                      >
                        View
                      </MenuItem>

                      <MenuItem
                        icon={<EditIcon />}
                        onClick={() => onEdit(m)}
                        {...actionMenuItemStyle}
                      >
                        Edit
                      </MenuItem>

                      <MenuItem
                        icon={<DeleteIcon />}
                        onClick={() => onDelete(m.mfg_code)}
                        {...actionMenuItemStyle}
                        color="red.500"
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
              <Td colSpan={10}>
                <Box textAlign="center" py={10} color="gray.500">
                  <Text fontSize="lg" fontWeight="600">
                    No Manufacturer Found
                  </Text>
                  <Text fontSize="sm">
                    Try adjusting your search or add a new manufacturer
                  </Text>
                </Box>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ManufacturerTable;
