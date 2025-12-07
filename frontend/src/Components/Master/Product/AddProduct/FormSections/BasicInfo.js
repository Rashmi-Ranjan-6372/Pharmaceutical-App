// src/Components/Master/Shared/BasicInfo.js
import React from "react";
import {
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Text,
    Divider,
    Box,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    inputStyles,
    labelStyles,
} from "../Style";

const BasicInfo = ({ formData, handleChange, isDisabled }) => {
    return (
        <Box mb={4}>
            {/* Section Title */}
            <Text {...sectionHeadingStyle}>Basic Information</Text>

            {/* Divider */}
            <Divider {...sectionDividerStyle} />

            {/* Form Fields */}
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Medicine Name</FormLabel>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. Paracetamol"
                        {...inputStyles}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Generic Name</FormLabel>
                    <Input
                        name="genericName"
                        value={formData.genericName}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. Acetaminophen"
                        {...inputStyles}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>SKU</FormLabel>
                    <Input
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. SKU-12345"
                        {...inputStyles}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Weight</FormLabel>
                    <Input
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. 500 mg"
                        {...inputStyles}
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default BasicInfo;
