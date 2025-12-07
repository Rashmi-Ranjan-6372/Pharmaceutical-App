// src/Components/Master/Product/ProductList/ProductList.js
import React, { useState, useRef } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SelectManufacturer from "./SelectManufacturer";
import ProductSearchbar from "./ProductSearchbar";
import ProductFilter from "./ProductFilter";
import ProductTable from "./ProductTable";
import DeleteConfirmDialog from "./DeleteConfirmDialog";

// ✅ Import styles
import {
    listContainer,
    listTopText,
    addButtonStyle,
    toolbarFlexStyle,
    selectBoxStyle,
    searchBoxStyle,
    filterBoxStyle,
} from "./Style";

// ---------------- Sample product data ----------------
const medicinesData = [
    { name: "Zimax", generic: "Azithromycin", sku: "SKU-001", weight: "500mg", category: "Tablet", price: 20.55, unit: "INR", status: "Low", manufacturer: "Pfizer", purchaseDiscount: "5%", salesDiscount: "2%", rack: "R1" },
    { name: "Oxidon", generic: "Domperidon", sku: "SKU-002", weight: "10mg", category: "Tablet", price: 15.0, unit: "INR", status: "Low", manufacturer: "Cipla", purchaseDiscount: "10%", salesDiscount: "5%", rack: "R2" },
    { name: "MED-1008", generic: "Hydrazine", sku: "SKU-003", weight: "200 Doses", category: "Inhaler", price: 12.45, unit: "INR", status: "Low", manufacturer: "Sun Pharma", purchaseDiscount: "8%", salesDiscount: "3%", rack: "R3" },
    { name: "Ceevit", generic: "Vitamin C", sku: "SKU-004", weight: "250mg", category: "Vitamin", price: 5.0, unit: "INR", status: "Available", manufacturer: "Pfizer", purchaseDiscount: "2%", salesDiscount: "1%", rack: "R1" },
    { name: "DON A", generic: "Domperidon", sku: "SKU-005", weight: "10mg", category: "Tablet", price: 50.0, unit: "INR", status: "Available", manufacturer: "Cipla", purchaseDiscount: "12%", salesDiscount: "6%", rack: "R4" },
    { name: "Pantonix", generic: "Pantoprazol", sku: "SKU-006", weight: "20mg", category: "Tablet", price: 10.0, unit: "INR", status: "Low", manufacturer: "Sun Pharma", purchaseDiscount: "7%", salesDiscount: "3%", rack: "R2" },
    { name: "Isoniazid", generic: "Hydrazine", sku: "SKU-007", weight: "1.5ml", category: "Syrup", price: 25.55, unit: "INR", status: "Low", manufacturer: "Pfizer", purchaseDiscount: "9%", salesDiscount: "4%", rack: "R3" },
];

// ---------------- Manufacturer options ----------------
const manufacturerOptions = [...new Set(medicinesData.map((m) => m.manufacturer))].map(
    (m) => ({ label: m, value: m })
);

const ProductList = () => {
    const [search, setSearch] = useState("");
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
    const [medicines, setMedicines] = useState(medicinesData);
    const [sortOrder, setSortOrder] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const cancelRef = useRef();
    const navigate = useNavigate();

    // ---------------- Delete handlers ----------------
    const handleDeleteClick = (item) => {
        setSelectedItem(item);
        setIsDeleteOpen(true);
    };

    const confirmDelete = () => {
        setMedicines((prev) => prev.filter((m) => m !== selectedItem));
        setIsDeleteOpen(false);
        setSelectedItem(null);
    };

    const onCloseDelete = () => {
        setIsDeleteOpen(false);
        setSelectedItem(null);
    };

    // ---------------- Filtering & Sorting ----------------
    const filteredMedicines = medicines
        .filter((m) =>
            selectedManufacturer ? m.manufacturer === selectedManufacturer.value : true
        )
        .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
        .filter((m) =>
            selectedCategories.length ? selectedCategories.includes(m.category) : true
        )
        .filter((m) =>
            selectedStatuses.length ? selectedStatuses.includes(m.status) : true
        )
        .sort((a, b) => {
            if (sortOrder === "A-Z") return a.name.localeCompare(b.name);
            if (sortOrder === "Z-A") return b.name.localeCompare(a.name);
            return 0;
        });

    return (
        <Box {...listContainer}>
            {/* <Text {...listTopText}>Total Products: {filteredMedicines.length}</Text> */}
            <Text
                fontSize={listTopText.fontSize}
                mb={listTopText.mb}
                color={listTopText.color}
            >
                You have total <b>{filteredMedicines.length} Product(s)</b> for Pharmacy.
            </Text>

            {/* 🔹 Top Controls */}
            <Flex {...toolbarFlexStyle}>
                <Flex gap={3} align="center">
                    {/* Select Manufacturer */}
                    <Box {...selectBoxStyle}>
                        <SelectManufacturer
                            manufacturerOptions={manufacturerOptions}
                            selectedManufacturer={selectedManufacturer}
                            setSelectedManufacturer={setSelectedManufacturer}
                        />
                    </Box>

                    {/* Search */}
                    <Box {...searchBoxStyle}>
                        <ProductSearchbar search={search} setSearch={setSearch} />
                    </Box>

                    {/* Filter */}
                    <Box {...filterBoxStyle}>
                        <ProductFilter
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                            selectedStatuses={selectedStatuses}
                            setSelectedStatuses={setSelectedStatuses}
                        />
                    </Box>
                </Flex>

                {/* Add Medicine */}
                <Button ml="auto" {...addButtonStyle} onClick={() => navigate("/add-product")}>
                    + Add Medicine
                </Button>
            </Flex>

            {/* 🔹 Table */}
            <ProductTable medicines={filteredMedicines} handleDeleteClick={handleDeleteClick} />

            {/* 🔹 Delete Confirmation Dialog */}
            <DeleteConfirmDialog
                isOpen={isDeleteOpen}
                cancelRef={cancelRef}
                onClose={onCloseDelete}
                confirmDelete={confirmDelete}
                selectedItem={selectedItem}
            />
        </Box>
    );
};

export default ProductList;
