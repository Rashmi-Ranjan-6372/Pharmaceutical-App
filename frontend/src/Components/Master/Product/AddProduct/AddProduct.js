// src/Components/Master/Product/AddProduct/AddProduct.js
import React, { useState } from "react";
import {
    Box,
    VStack,
    Heading,
    Text,
    useToast,
} from "@chakra-ui/react";

import ManufacturerSelect from "./FormSections/ManufacturerSelect";
import ProductForm from "./ProductForm";

import {
    containerBoxStyle,
    containerHeaderBoxStyle,
    containerHeadingStyle,
    containerSubTextStyle,
} from "./Style";

const AddProduct = () => {
    const toast = useToast();

    const [manufacturers] = useState(["Mfr A", "Mfr B"]);
    const [selectedManufacturer, setSelectedManufacturer] = useState("");

    const initialFormData = {
        name: "",
        genericName: "",
        sku: "",
        weight: "",
        category: "",
        status: "",
        mfg_code: "",
        rack_code: "",
        packing_code: "",
        purchase_tax_code: "",
        purchase_discount_rate: "",
        purchase_discount_mode: "",
        sales_tax_code: "",
        sales_discount_rate: "",
        sales_discount_mode: "",
        comp_code: "",
        mod_code: "",
        user_code: "",
        last_update: "",
        del: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = () => {
        if (!selectedManufacturer) {
            toast({
                title: "Please select a manufacturer first",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        toast({
            title: "Medicine added successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        setFormData(initialFormData);
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setSelectedManufacturer("");
    };

    return (
        <Box {...containerBoxStyle}>
            <VStack spacing={4} align="stretch" flex="1">
                {/* Header Section */}
                <Box {...containerHeaderBoxStyle}>
                    <Heading {...containerHeadingStyle}>Add Medicine</Heading>
                    <Text {...containerSubTextStyle}>
                        Select a manufacturer first, then fill in the details below.
                    </Text>
                </Box>

                {/* Manufacturer dropdown */}
                <ManufacturerSelect
                    manufacturers={manufacturers}
                    selectedManufacturer={selectedManufacturer}
                    setSelectedManufacturer={setSelectedManufacturer}
                />

                {/* Product form */}
                <ProductForm
                    formData={formData}
                    handleChange={handleChange}
                    handleAddProduct={handleAddProduct}
                    handleReset={handleReset}
                    selectedManufacturer={selectedManufacturer}
                />
            </VStack>
        </Box>
    );
};

export default AddProduct;
