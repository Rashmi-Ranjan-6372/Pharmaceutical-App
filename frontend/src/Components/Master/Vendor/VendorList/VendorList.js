import React, { useState } from "react";
import { Box, Text, Flex, Button, useToast } from "@chakra-ui/react";
import VendorSearchbar from "./VendorSearchbar";
import VendorFilter from "./VendorFilter";
import VendorTable from "./VendorTable";

// ✅ Exact style props used from Style.js
import {
    listContainer,
    listTopText,
    addButtonStyle
} from "./Style";

const VendorList = () => {
    const toast = useToast();

    const [vendors, setVendors] = useState([
        {
            id: 1,
            gl_code: "#V-1",
            vendorName: "MediLife Distributors",
            contactPerson: "Rajesh Kumar",
            contactNumber: "9876543210",
            email: "medilife@gmail.com",
            address: "Bhubaneswar, Odisha",
            city: "Bhubaneswar",
            state: "Odisha",
            country: "India",
            drugLicense: "DL98765",
            pan: "ABCDE1234F",
            status: "Active",
        },
        {
            id: 2,
            gl_code: "#V-2",
            vendorName: "HealthCare Supplies",
            contactPerson: "Suman Sharma",
            contactNumber: "9123456780",
            email: "healthcare@gmail.com",
            address: "Cuttack, Odisha",
            city: "Cuttack",
            state: "Odisha",
            country: "India",
            drugLicense: "DL54321",
            pan: "XYZAB6789P",
            status: "Inactive",
        },
        {
            id: 3,
            gl_code: "#V-3",
            vendorName: "PharmaOne",
            contactPerson: "Anil Das",
            contactNumber: "9012345678",
            email: "pharmaone@gmail.com",
            address: "Bhubaneswar, Odisha",
            city: "Bhubaneswar",
            state: "Odisha",
            country: "India",
            drugLicense: "DL11223",
            pan: "QWERT5678Y",
            status: "Active",
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setSelected] = useState([]);
    const [filter, setFilter] = useState({
        city: "",
        state: "",
        country: "",
        sort: "A-Z",
    });

    const handleDelete = (id) => {
        setVendors((prev) => prev.filter((v) => v.id !== id));
        setSelected((prev) => prev.filter((sid) => sid !== id));
        toast({
            title: "Vendor Deleted",
            description: "Vendor removed successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    // --- Filter + Search ---
    let filteredVendors = vendors.filter(
        (v) =>
            v.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            v.contactPerson.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filter.city) {
        filteredVendors = filteredVendors.filter((v) => v.city === filter.city);
    }
    if (filter.state) {
        filteredVendors = filteredVendors.filter((v) => v.state === filter.state);
    }
    if (filter.country) {
        filteredVendors = filteredVendors.filter((v) => v.country === filter.country);
    }

    filteredVendors.sort((a, b) =>
        filter.sort === "A-Z"
            ? a.vendorName.localeCompare(b.vendorName)
            : b.vendorName.localeCompare(a.vendorName)
    );

    // --- JSX Return ---
    return (
        <Box
            width={listContainer.width}
            p={listContainer.p}
            bg={listContainer.bg}
            border={listContainer.border}
            borderColor={listContainer.borderColor}
            borderRadius={listContainer.borderRadius}
            fontSize={listContainer.fontSize}
        >
            {/* Top Info Text */}
            <Text
                fontSize={listTopText.fontSize}
                mb={listTopText.mb}
                color={listTopText.color}
            >
                You have total <b>{vendors.length} Vendor(s)</b> for Pharmacy.
            </Text>

            {/* Toolbar Section */}
            <Flex mb={3} align="center" justify="space-between">
                <Flex gap={3} flex="1">
                    <VendorSearchbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <VendorFilter
                        filter={filter}
                        setFilter={setFilter}
                    />
                </Flex>

                <Button
                    colorScheme={addButtonStyle.colorScheme}
                    size={addButtonStyle.size}
                    borderRadius={addButtonStyle.borderRadius}
                    leftIcon={<span>+</span>}
                >
                    Add Vendor
                </Button>
            </Flex>

            {/* Vendor Table */}
            <VendorTable
                vendors={filteredVendors}
                selected={selected}
                setSelected={setSelected}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default VendorList;
