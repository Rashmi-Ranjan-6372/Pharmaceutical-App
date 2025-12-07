// src/Components/Master/Shared/TaxDiscountInfo.js
import React from "react";
import {
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    Box,
    Divider,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridThreeColumnStyle,
    labelStyles,
    inputStyles,
} from "../Style";

const TaxDiscountInfo = ({ formData, handleChange, isDisabled }) => {
    return (
        <Box mb={6}>
            {/* Section title */}
            <Text {...sectionHeadingStyle}>Tax and Discount Information</Text>
            <Divider {...sectionDividerStyle} />

            {/* Grid layout */}
            <SimpleGrid {...gridThreeColumnStyle}>
                {/* Purchase Tax and Discounts */}
                <FormControl>
                    <FormLabel {...labelStyles}>Purchase Tax Code</FormLabel>
                    <Input
                        name="purchase_tax_code"
                        value={formData.purchase_tax_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. TAX-PUR-001"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Purchase Discount Rate</FormLabel>
                    <Input
                        name="purchase_discount_rate"
                        type="number"
                        value={formData.purchase_discount_rate}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. 10"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Purchase Discount Mode</FormLabel>
                    <Select
                        name="purchase_discount_mode"
                        value={formData.purchase_discount_mode}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="Select mode"
                        {...inputStyles}
                    >
                        <option value="percentage">Percentage</option>
                        <option value="flat">Flat</option>
                    </Select>
                </FormControl>

                {/* Sales Tax and Discounts */}
                <FormControl>
                    <FormLabel {...labelStyles}>Sales Tax Code</FormLabel>
                    <Input
                        name="sales_tax_code"
                        value={formData.sales_tax_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. TAX-SAL-001"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Sales Discount Rate</FormLabel>
                    <Input
                        name="sales_discount_rate"
                        type="number"
                        value={formData.sales_discount_rate}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. 5"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Sales Discount Mode</FormLabel>
                    <Select
                        name="sales_discount_mode"
                        value={formData.sales_discount_mode}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="Select mode"
                        {...inputStyles}
                    >
                        <option value="percentage">Percentage</option>
                        <option value="flat">Flat</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default TaxDiscountInfo;
