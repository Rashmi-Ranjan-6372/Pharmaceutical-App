// src/Components/Master/Product/AddProduct/ProductForm.js
import React from "react";
import { VStack, Button, HStack, Box } from "@chakra-ui/react";

import BasicInfo from "./FormSections/BasicInfo";
import CategoryStatus from "./FormSections/CategoryStatus";
import CodesInfo from "./FormSections/CodesInfo";
import TaxDiscountInfo from "./FormSections/TaxDiscountInfo";
import AdditionalCodes from "./FormSections/AdditionalCodes";
import MetaInfo from "./FormSections/MetaInfo";

import {
    formButtonResetStyle,
    formButtonSubmitStyle,
} from "./Style";

const ProductForm = ({
    formData,
    handleChange,
    selectedManufacturer,
    handleAddProduct,
    handleReset,
}) => {
    // Disable flag - true if no manufacturer selected
    const isDisabled = !selectedManufacturer;

    return (
        <Box>
            <VStack spacing={4} align="stretch">
                {/* Form Sections */}
                <BasicInfo
                    formData={formData}
                    handleChange={handleChange}
                    isDisabled={isDisabled}
                />
                <CategoryStatus
                    formData={formData}
                    handleChange={handleChange}
                    isDisabled={isDisabled}
                />
                <CodesInfo
                    formData={formData}
                    handleChange={handleChange}
                    isDisabled={isDisabled}
                />
                <TaxDiscountInfo
                    formData={formData}
                    handleChange={handleChange}
                    isDisabled={isDisabled}
                />
                <AdditionalCodes
                    formData={formData}
                    handleChange={handleChange}
                    isDisabled={isDisabled}
                />
                <MetaInfo
                    formData={formData}
                    handleChange={handleChange}
                    isDisabled={isDisabled}
                />

                {/* Action Buttons */}
                <HStack justify="space-between" mt={3}>
                    <Button
                        {...formButtonResetStyle}
                        onClick={handleReset}
                        isDisabled={isDisabled}
                    >
                        Reset
                    </Button>
                    <Button
                        {...formButtonSubmitStyle}
                        onClick={handleAddProduct}
                        isDisabled={isDisabled}
                    >
                        Add Medicine
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default ProductForm;
