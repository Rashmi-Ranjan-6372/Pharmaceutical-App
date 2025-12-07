import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Text,
    Divider,
    Box,
} from "@chakra-ui/react";

// Import shared styles
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    inputStyles,
    labelStyles,
} from "../Style"; // Adjust the path as needed

const AddressInfo = ({ vendor, handleChange }) => {
    return (
        <Box mb={5}>
            {/* Section Title */}
            <Text {...sectionHeadingStyle}>Address Information</Text>

            {/* Divider */}
            <Divider {...sectionDividerStyle} />

            {/* Address Field */}
            <FormControl>
                <FormLabel {...labelStyles}>Address</FormLabel>
                <Input
                    {...inputStyles}
                    name="address"
                    value={vendor.address}
                    onChange={handleChange}
                    placeholder="e.g. 123 Main Street, New York, USA"
                />
            </FormControl>
        </Box>
    );
};

export default AddressInfo;
