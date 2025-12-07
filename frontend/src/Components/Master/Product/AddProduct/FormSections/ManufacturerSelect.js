// src/Components/Master/Shared/ManufacturerSelect.js
import React from "react";
import { FormControl, FormLabel, Select, Text, Divider } from "@chakra-ui/react";

import {
    labelStyles,
    inputStyles,
    sectionHeadingStyle,
    sectionDividerStyle,
} from "../Style";

const ManufacturerSelect = ({
    manufacturers,
    selectedManufacturer,
    setSelectedManufacturer,
}) => {
    return (
        <FormControl isRequired>
            {/* Section Heading */}
            <Text {...sectionHeadingStyle}>Manufacturer</Text>
            <Divider {...sectionDividerStyle} />

            {/* Label */}
            <FormLabel htmlFor="manufacturer-select" {...labelStyles}>
                Select Manufacturer
            </FormLabel>

            {/* Helper Text */}
            <Text fontSize="xs" color="gray.500" mb={2}>
                Select the manufacturer to associate with this product.
            </Text>

            {/* Dropdown */}
            <Select
                id="manufacturer-select"
                placeholder="Select manufacturer"
                value={selectedManufacturer}
                onChange={(e) => setSelectedManufacturer(e.target.value)}
                {...inputStyles}
            >
                {manufacturers.map((mfr) => (
                    <option key={mfr} value={mfr}>
                        {mfr}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default ManufacturerSelect;
