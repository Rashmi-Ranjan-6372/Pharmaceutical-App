import {
    Box,
    Divider,
    Heading,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    inputStyles,
    labelStyles,
} from "../Style";

const SalesAssignment = ({ formData, handleChange }) => {
    return (
        <Box>
            <Heading {...sectionHeadingStyle}>Sales Assignment</Heading>
            <Divider {...sectionDividerStyle} />
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Sales Area</FormLabel>
                    <Input
                        {...inputStyles}
                        name="area_code"
                        value={formData.area_code}
                        onChange={handleChange}
                        placeholder="e.g. North Region"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Sales Personnel</FormLabel>
                    <Input
                        {...inputStyles}
                        name="personnel_code"
                        value={formData.personnel_code}
                        onChange={handleChange}
                        placeholder="e.g. SP1001"
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default SalesAssignment;
