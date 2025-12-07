// src/Components/Master/Shared/CategoryStatus.js
import React from "react";
import {
    Box,
    SimpleGrid,
    FormControl,
    FormLabel,
    Select,
    Text,
    Divider,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    labelStyles,
    inputStyles,
} from "../Style";

const CategoryStatus = ({ formData, handleChange, isDisabled }) => {
    return (
        <Box mb={4}>
            {/* Section title */}
            <Text {...sectionHeadingStyle}>Category & Status</Text>

            {/* Divider */}
            <Divider {...sectionDividerStyle} />

            {/* Form Fields */}
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Category</FormLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        {...inputStyles}
                    >
                        <option value="">Select Category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Status</FormLabel>
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        {...inputStyles}
                    >
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default CategoryStatus;
