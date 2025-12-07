// TaxLicenseDetails.jsx
import {
    Box,
    Divider,
    Heading,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    inputStyles,
    labelStyles,
} from "../Style";

const TaxLicenseDetails = ({ formData, handleChange }) => {
    return (
        <Box>
            <Heading {...sectionHeadingStyle}>Tax & License Details</Heading>
            <Divider {...sectionDividerStyle} />

            <SimpleGrid {...gridTwoColumnStyle} mb={3}>
                <FormControl>
                    <FormLabel {...labelStyles}>Registered Dealer</FormLabel>
                    <Select
                        {...inputStyles}
                        name="registered_dealer"
                        value={formData.registered_dealer || ""}
                        onChange={handleChange}
                    >
                        <option value="Y">Yes</option>
                        <option value="N">No</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Drug License No</FormLabel>
                    <Input
                        {...inputStyles}
                        name="spl_lic_no"
                        value={formData.spl_lic_no || ""}
                        onChange={handleChange}
                        placeholder="e.g. DL-12345678"
                    />
                </FormControl>
            </SimpleGrid>

            {/* CGST and SGST */}
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>CGST (%)</FormLabel>
                    <Input
                        {...inputStyles}
                        type="number"
                        name="cgst"
                        value={formData.cgst || ""}
                        onChange={handleChange}
                        placeholder="e.g. 9.00"
                        step="0.01"
                        min="0"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>SGST (%)</FormLabel>
                    <Input
                        {...inputStyles}
                        type="number"
                        name="sgst"
                        value={formData.sgst || ""}
                        onChange={handleChange}
                        placeholder="e.g. 9.00"
                        step="0.01"
                        min="0"
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default TaxLicenseDetails;
