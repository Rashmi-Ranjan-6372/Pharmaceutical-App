// src/Components/Master/Customer/CustomerList/CustomerList.js
import React, { useState } from "react";
import { Box, Text, Flex, Button, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CustomerToolbar from "./CustomerSearchbar";
import CustomerFilter from "./CustomerFilter";
import CustomerTable from "./CustomerTable";
import {
    listContainer,
    listTopText,
    addButtonStyle
} from "./Style";

const CustomerList = () => {
    const toast = useToast();

    // Customer master data
    const [customers, setCustomers] = useState([
        {
            id: 1,
            gl_code: "#C-1",
            drug_license_no: "DL-123456",
            name: "MediLife Distributors",
            contact_person: "Ravi Kumar",
            telephone_no: "9876543210",
            status: "Active",
            area: "Khordha",
            city: "Bhubaneswar",
            state: "Odisha",
            country: "India"
        },
        {
            id: 2,
            gl_code: "#C-2",
            drug_license_no: "DL-123456",
            name: "HealthCare Supplies",
            contact_person: "Priya Sharma",
            telephone_no: "9123456789",
            status: "Inactive",
            area: "Link Road",
            city: "Cuttack",
            state: "Odisha",
            country: "India"
        },
        {
            id: 3,
            gl_code: "#C-3",
            drug_license_no: "DL-123456",
            name: "PharmaOne",
            contact_person: "Anil Das",
            telephone_no: "9012345678",
            status: "Active",
            area: "Patia",
            city: "Bhubaneswar",
            state: "Odisha",
            country: "India"
        }
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setSelected] = useState([]);
    const [filter, setFilter] = useState({
        status: "",
        city: "",
        state: "",
        country: "",
        sort: "A-Z"
    });

    // Handle delete
    const handleDelete = (id) => {
        setCustomers((prev) => prev.filter((c) => c.id !== id));
        setSelected((prev) => prev.filter((sid) => sid !== id));
        toast({
            title: "Customer Deleted",
            description: "Customer removed successfully",
            status: "success",
            duration: 2000,
            isClosable: true
        });
    };

    // Filter + Search logic
    let filteredCustomers = [...customers];

    // Search filter
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filteredCustomers = filteredCustomers.filter(
            (c) =>
                c.name.toLowerCase().includes(q) ||
                c.contact_person.toLowerCase().includes(q)
        );
    }

    // Dropdown filters
    if (filter.status) {
        filteredCustomers = filteredCustomers.filter(
            (c) => c.status === filter.status
        );
    }

    if (filter.city) {
        filteredCustomers = filteredCustomers.filter(
            (c) => c.city === filter.city
        );
    }

    if (filter.state) {
        filteredCustomers = filteredCustomers.filter(
            (c) => c.state === filter.state
        );
    }

    if (filter.country) {
        filteredCustomers = filteredCustomers.filter(
            (c) => c.country === filter.country
        );
    }

    // Sort by name A-Z or Z-A
    filteredCustomers.sort((a, b) =>
        filter.sort === "A-Z"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    return (
        <Box {...listContainer}>
            <Text {...listTopText}>
                You have total <b>{customers.length} Customer(s)</b> for Pharmacy.
            </Text>

            <Flex mb={3} align="center" justify="space-between">
                <Flex gap={3} flex="1">
                    <CustomerToolbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <CustomerFilter filter={filter} setFilter={setFilter} />
                </Flex>
                <Button
                    {...addButtonStyle}
                    leftIcon={<AddIcon boxSize={3} />}
                >
                    Add Customer
                </Button>
            </Flex>

            <CustomerTable
                customers={filteredCustomers}
                selected={selected}
                setSelected={setSelected}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default CustomerList;
