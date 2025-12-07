// src/Components/Master/Manufacturer/ManufacturerList/ManufacturerList.js
import React, { useState } from "react";
import { Box, Text, Flex, Button, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import ManufacturerSearchbar from "./ManufacturerSearchbar"; // ✅ Corrected
import ManufacturerFilter from "./ManufacturerFilter";
import ManufacturerTable from "./ManufacturerTable";

import {
    listContainer,
    listTopText,
    addButtonStyle
} from "./Style";

// ---------------- Dummy Data ----------------
const initialManufacturers = [
    {
        id: 1,
        gl_code: "#M-101",
        company: "Healthcare Pharma",
        abbreviation: "HCP",
        crName: "John Smith",
        crPhone: "+1 416-555-0199",
        city: "Toronto",
        state: "Ontario",
        country: "Canada",
        status: "Active"
    },
    {
        id: 2,
        gl_code: "#M-102",
        company: "Sun Pharma",
        abbreviation: "SP",
        crName: "Amit Kumar",
        crPhone: "+91 9876543210",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        status: "Inactive"
    },
    {
        id: 3,
        gl_code: "#M-103",
        company: "Pfizer",
        abbreviation: "PFZ",
        crName: "Emily Davis",
        crPhone: "+44 20 7946 0958",
        city: "London",
        state: "England",
        country: "UK",
        status: "Active"
    },
    {
        id: 4,
        gl_code: "#M-104",
        company: "Cipla",
        abbreviation: "CPL",
        crName: "Rahul Mehta",
        crPhone: "+91 9811122233",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        status: "Active"
    }
];

// ---------------- Main Component ----------------
const ManufacturerList = () => {
    const toast = useToast();

    const [manufacturers, setManufacturers] = useState(initialManufacturers);
    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setSelected] = useState([]);
    const [filter, setFilter] = useState({
        status: "",
        city: "",
        state: "",
        country: "",
        sort: "A-Z"
    });

    // ✅ Delete Manufacturer
    const handleDelete = (id) => {
        setManufacturers((prev) => prev.filter((m) => m.id !== id));
        setSelected((prev) => prev.filter((sid) => sid !== id));
        toast({
            title: "Manufacturer Deleted",
            description: "Manufacturer removed successfully",
            status: "success",
            duration: 2000,
            isClosable: true
        });
    };

    // ✅ Filter + Search logic
    let filteredManufacturers = [...manufacturers];

    // Search filter
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filteredManufacturers = filteredManufacturers.filter(
            (m) =>
                m.company.toLowerCase().includes(q) ||
                m.crName.toLowerCase().includes(q)
        );
    }

    // Dropdown filters
    if (filter.status) {
        filteredManufacturers = filteredManufacturers.filter(
            (m) => m.status === filter.status
        );
    }
    if (filter.city) {
        filteredManufacturers = filteredManufacturers.filter(
            (m) => m.city === filter.city
        );
    }
    if (filter.state) {
        filteredManufacturers = filteredManufacturers.filter(
            (m) => m.state === filter.state
        );
    }
    if (filter.country) {
        filteredManufacturers = filteredManufacturers.filter(
            (m) => m.country === filter.country
        );
    }

    // Sort by company name A-Z or Z-A
    filteredManufacturers.sort((a, b) =>
        filter.sort === "A-Z"
            ? a.company.localeCompare(b.company)
            : b.company.localeCompare(a.company)
    );

    return (
        <Box {...listContainer}>
            <Text {...listTopText}>
                You have total <b>{manufacturers.length} Manufacturer(s)</b> for Pharmacy.
            </Text>

            {/* Toolbar + Filters */}
            <Flex mb={3} align="center" justify="space-between">
                <Flex gap={3} flex="1">
                    <ManufacturerSearchbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <ManufacturerFilter filter={filter} setFilter={setFilter} />
                </Flex>
                <Button
                    {...addButtonStyle}
                    leftIcon={<AddIcon boxSize={3} />}
                >
                    Add Manufacturer
                </Button>
            </Flex>

            {/* Data Table */}
            <ManufacturerTable
                manufacturers={filteredManufacturers}
                selected={selected}
                setSelected={setSelected}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default ManufacturerList;
