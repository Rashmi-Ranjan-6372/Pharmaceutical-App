// src/Components/Master/Shared/CodesInfo.js
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
    labelStyles,
    inputStyles,
} from "../Style";

const CodesInfo = ({ formData, handleChange, isDisabled }) => {
    return (
        <Box mb={4}>
            {/* Section title */}
            <Text {...sectionHeadingStyle}>Code Details</Text>

            {/* Divider */}
            <Divider {...sectionDividerStyle} />

            {/* Code fields */}
            <SimpleGrid {...gridThreeColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>MFG Code</FormLabel>
                    <Input
                        name="mfg_code"
                        value={formData.mfg_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. MFG-001"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Rack Code</FormLabel>
                    <Input
                        name="rack_code"
                        value={formData.rack_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. RACK-A1"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Packing Code</FormLabel>
                    <Input
                        name="packing_code"
                        value={formData.packing_code}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="e.g. PACK-10X"
                        {...inputStyles}
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default CodesInfo;
