// src/Components/Master/Shared/AdditionalCodes.js
import React from "react";
import {
    Box,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Text,
    Divider,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridThreeColumnStyle,
    inputStyles,
    labelStyles,
} from "../Style";

const AdditionalCodes = ({ formData, handleChange, isDisabled }) => {
    return (
        <Box mb={6}>
            {/* Section Title */}
            <Text {...sectionHeadingStyle}>Additional Codes</Text>
            <Divider {...sectionDividerStyle} />

            {/* Form Fields */}
            <SimpleGrid {...gridThreeColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Comp Code</FormLabel>
                    <Input
                        name="comp_code"
                        value={formData.comp_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. COMP-001"
                        {...inputStyles}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Mod Code</FormLabel>
                    <Input
                        name="mod_code"
                        value={formData.mod_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. MOD-123"
                        {...inputStyles}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>User Code</FormLabel>
                    <Input
                        name="user_code"
                        value={formData.user_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. USER-XYZ"
                        {...inputStyles}
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default AdditionalCodes;
