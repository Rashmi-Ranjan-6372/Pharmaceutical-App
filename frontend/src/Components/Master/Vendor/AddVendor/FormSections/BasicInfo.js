import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
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
    gridFourColumnStyle, // optional: if you want to define this for 4-column layout
} from "../Style"; // Adjust the path as necessary

const BasicInfo = ({ vendor, handleChange }) => {
    return (
        <Box mb={5}>
            {/* Section Title */}
            <Text {...sectionHeadingStyle}>Basic Information</Text>

            {/* Divider */}
            <Divider {...sectionDividerStyle} />

            {/* Form Fields */}
            <SimpleGrid columns={[1, 1, 4]} spacing={5}>
                <FormControl isRequired>
                    <FormLabel {...labelStyles}>Vendor Name</FormLabel>
                    <Input
                        {...inputStyles}
                        name="vendorName"
                        value={vendor.vendorName}
                        onChange={handleChange}
                        placeholder="e.g. ABC Traders"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Contact Person</FormLabel>
                    <Input
                        {...inputStyles}
                        name="contactPerson"
                        value={vendor.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Contact Number</FormLabel>
                    <Input
                        {...inputStyles}
                        type="tel"
                        name="contactNumber"
                        value={vendor.contactNumber}
                        onChange={handleChange}
                        placeholder="e.g. +1-234-567-890"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Email</FormLabel>
                    <Input
                        {...inputStyles}
                        type="email"
                        name="email"
                        value={vendor.email}
                        onChange={handleChange}
                        placeholder="e.g. example@mail.com"
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default BasicInfo;
