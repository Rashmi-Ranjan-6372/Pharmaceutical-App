// src/Components/Master/Shared/MetaInfo.js
import React from "react";
import {
    SimpleGrid,
    FormControl,
    FormLabel,
    Select,
    Text,
    Box,
    Divider,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    labelStyles,
    inputStyles,
} from "../Style";

const MetaInfo = ({ formData, handleChange, isDisabled }) => {
    return (
        <Box mb={6}>
            {/* Section title */}
            <Text {...sectionHeadingStyle}>Metadata</Text>
            <Divider {...sectionDividerStyle} />

            {/* Grid layout */}
            <SimpleGrid {...gridTwoColumnStyle}>
                {/* Last Update */}
                <FormControl id="last-update" isRequired>
                    <FormLabel {...labelStyles}>Last Update</FormLabel>
                    <Select
                        name="last_update"
                        value={formData.last_update}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="Select last update"
                        {...inputStyles}
                    >
                        <option value="today">Today (e.g. 2025-09-09)</option>
                        <option value="yesterday">Yesterday (e.g. 2025-09-08)</option>
                    </Select>
                </FormControl>

                {/* Deleted */}
                <FormControl id="deleted" isRequired>
                    <FormLabel {...labelStyles}>Deleted</FormLabel>
                    <Select
                        name="del"
                        value={formData.del}
                        onChange={handleChange}
                        isDisabled={isDisabled}
                        placeholder="Select status"
                        aria-describedby="deleted-helper"
                        {...inputStyles}
                    >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default MetaInfo;
