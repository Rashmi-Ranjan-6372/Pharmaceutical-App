// src/Components/Layout/Sidebar.js
import React, { useState } from "react";
import {
    Box, Flex, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
    VStack, Icon, useDisclosure, Collapse, Text, useColorModeValue
} from "@chakra-ui/react";

import {
    FaTachometerAlt, FaUserFriends, FaCapsules, FaTruck, FaUndo, FaDollarSign,
    FaChevronDown, FaChevronUp, FaCogs, FaFileInvoice, FaRegClipboard, FaClock,
    FaWarehouse, FaBook, FaUserTie, FaHourglassHalf, FaCog,
    FaCalendarCheck, FaBoxes, FaFileInvoiceDollar, FaArrowDown, FaArrowUp,
    FaMoneyCheckAlt, FaIndustry, FaMapMarkedAlt
} from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "./Topbar";

// ✅ Sidebar structure with Sales Discount added
const sidebarStructure = [
    {
        label: "Dashboard",
        icon: FaTachometerAlt,
        path: "/dashboard",
    },
    {
        label: "Master",
        icon: FaUserFriends,
        items: [
            {
                label: "Sales Area",
                icon: FaMapMarkedAlt,
                items: [
                    { label: "Add Sales Area", path: "/master/sales-area/add" },
                    { label: "Sales Area List", path: "/master/sales-area/list" },
                ],
            },
            {
                label: "Sales Discount", // ✅ Added Sales Discount menu
                icon: FaDollarSign,
                items: [
                    { label: "Add Discount", path: "/master/sales-discount/add" },
                    { label: "Discount List", path: "/master/sales-discount/list" },
                ],
            },
            {
                label: "Manufacturer",
                icon: FaIndustry,
                items: [
                    { label: "Add Mfr.", path: "/master/manufacturer/add" },
                    { label: "Mfr. List", path: "/master/manufacturer/list" },
                ],
            },
            {
                label: "Product",
                icon: FaCapsules,
                items: [
                    { label: "Add Product", path: "/master/product/add" },
                    { label: "Product List", path: "/master/product/list" },
                ],
            },
            {
                label: "Vendor",
                icon: FaTruck,
                items: [
                    { label: "Add Vendor", path: "/master/vendor/add" },
                    { label: "Vendor List", path: "/master/vendor/list" },
                ],
            },
            {
                label: "Customer",
                icon: FaUserFriends,
                items: [
                    { label: "Add Customer", path: "/master/customer/add" },
                    { label: "Customer List", path: "/master/customer/list" },
                ],
            },
        ],
    },
    {
        label: "Transaction",
        icon: FaDollarSign,
        items: [
            { label: "Stock", icon: FaBoxes, path: "/transaction/stock" },
            { label: "Receipt", icon: FaFileInvoiceDollar, path: "/transaction/receipt" },
            { label: "Payment", icon: FaMoneyCheckAlt, path: "/transaction/payment" },
            { label: "Dr-Note", icon: FaArrowDown, path: "/transaction/dr-note" },
            { label: "Cr-Note", icon: FaArrowUp, path: "/transaction/cr-note" },
        ],
    },
    {
        label: "Reports",
        icon: FaChartColumn,
        items: [
            { label: "Invoice", icon: FaFileInvoice, path: "/reports/invoice" },
            { label: "Sales Register", icon: FaRegClipboard, path: "/reports/sales-register" },
            { label: "Sales Return", icon: FaUndo, path: "/reports/sales-return" },
            { label: "Short Expiry", icon: FaClock, path: "/reports/short-expiry" },
            { label: "Stock Report", icon: FaWarehouse, path: "/reports/stock-report" },
            { label: "Product Ledger", icon: FaBook, path: "/reports/product-ledger" },
            { label: "Party Ledger", icon: FaUserTie, path: "/reports/party-ledger" },
            { label: "Outstanding Ageing", icon: FaHourglassHalf, path: "/reports/outstanding-ageing" },
        ],
    },
    {
        label: "Setup",
        icon: FaCogs,
        items: [
            { label: "General", icon: FaCog, path: "/setup/general" },
            { label: "End-of-year", icon: FaCalendarCheck, path: "/setup/end-of-year" },
        ],
    },
];

function SidebarContent({ onClose }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [openMain, setOpenMain] = useState(null);
    const [openSub, setOpenSub] = useState(null);

    const activeText = useColorModeValue("green.600", "green.300");
    const hoverText = useColorModeValue("green.500", "green.200");
    const defaultText = useColorModeValue("gray.700", "gray.300");

    const toggleMain = (label) => {
        setOpenMain((prev) => (prev === label ? null : label));
        setOpenSub(null);
    };

    const toggleSub = (label) => {
        setOpenSub((prev) => (prev === label ? null : label));
    };

    const handleClickLeaf = (path) => {
        navigate(path);
        if (onClose) onClose();
    };

    const renderItems = (items, level = 0, parentLabel = "") =>
        items.map((item, idx) => {
            const hasChildren = item.items && item.items.length > 0;
            const isMain = level === 0;
            const parentKey = parentLabel ? `${parentLabel}-${item.label}` : item.label;
            const isOpen = isMain ? openMain === item.label : openSub === parentKey;
            const isActive = item.path && location.pathname === item.path;
            const isDropdownActive = hasChildren && isOpen;
            const paddingLeft = 4 + level * 4;

            const handleClick = () => {
                if (hasChildren) {
                    if (isMain) toggleMain(item.label);
                    else toggleSub(parentKey);
                } else {
                    handleClickLeaf(item.path);
                }
            };

            return (
                <Box key={`${item.label}-${idx}`}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        px={paddingLeft}
                        py={1.5}
                        fontWeight={isMain ? "semibold" : "normal"}
                        fontSize="sm"
                        cursor="pointer"
                        borderRadius="md"
                        bg="transparent"
                        color={isActive || isDropdownActive ? activeText : defaultText}
                        _hover={{ color: hoverText }}
                        onClick={handleClick}
                    >
                        <Box display="flex" alignItems="center">
                            {item.icon && <Icon as={item.icon} boxSize="4" mr="2" />}
                            <Text>{item.label}</Text>
                        </Box>
                        {hasChildren && (
                            <Icon as={isOpen ? FaChevronUp : FaChevronDown} boxSize="3" color="gray.500" />
                        )}
                    </Box>
                    {hasChildren && (
                        <Collapse in={isOpen} animateOpacity>
                            <VStack align="stretch" spacing={0} ml={2}>
                                {renderItems(item.items, level + 1, parentKey)}
                            </VStack>
                        </Collapse>
                    )}
                </Box>
            );
        });

    return <VStack align="stretch" spacing={1}>{renderItems(sidebarStructure)}</VStack>;
}

function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex>
            {/* Desktop Sidebar */}
            <Box
                display={{ base: "none", md: "block" }}
                w="250px"
                bg="white"
                p={4}
                boxShadow="md"
                position="fixed"
                left={0}
                top={0}
                bottom={0}
                zIndex="100"
                overflowY="auto"
            >
                <Text fontSize="2xl" fontWeight="bold" mb="5" color="green.600">
                    🧪 Pharmacy
                </Text>
                <SidebarContent />
            </Box>

            {/* Mobile Drawer */}
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px" fontWeight="bold">
                        🧪 Pharmacy
                    </DrawerHeader>
                    <DrawerBody>
                        <SidebarContent onClose={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Main Content */}
            <Box ml={{ base: 0, md: "250px" }} w="100%" minH="100vh" bg="white">
                <Topbar onOpenSidebar={onOpen} />
                <Box p={4}>{children}</Box>
            </Box>
        </Flex>
    );
}

export default Sidebar;
