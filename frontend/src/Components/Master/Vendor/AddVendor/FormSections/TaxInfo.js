// TaxInfo.js
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

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridThreeColumnStyle,
    inputStyles,
    labelStyles,
    formBoxStyle,
} from "../Style"; // adjust path

const TaxInfo = ({ vendor, handleChange }) => {
    return (
        <Box mb={5}>
            {/* Section Title */}
            <Text {...sectionHeadingStyle}>
                Tax & Licence Information
            </Text>

            {/* Divider */}
            <Divider {...sectionDividerStyle} />

            {/* Form Fields */}
            <SimpleGrid {...gridThreeColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>GST / Tax ID / License No.</FormLabel>
                    <Input
                        name="gstOrLicense"
                        value={vendor.gstOrLicense}
                        onChange={handleChange}
                        placeholder="e.g. 29ABCDE1234F2Z5"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Drug License No.</FormLabel>
                    <Input
                        name="drugLicense"
                        value={vendor.drugLicense}
                        onChange={handleChange}
                        placeholder="e.g. DL-123456789"
                        {...inputStyles}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>PAN</FormLabel>
                    <Input
                        name="pan"
                        value={vendor.pan}
                        onChange={handleChange}
                        placeholder="e.g. ABCDE1234F"
                        {...inputStyles}
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default TaxInfo;
