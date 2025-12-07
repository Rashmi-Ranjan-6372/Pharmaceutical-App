// BasicInfo.jsx
import { Box, FormControl, FormLabel, Input, SimpleGrid, Text } from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    labelStyles,
    inputStyles,
    gridThreeColumnStyle,
    formBoxStyle
} from "../Style"; // Adjust import path as needed

const BasicInfo = ({ form, handleChange }) => (
    <Box mb={6}>
        {/* Section Title */}
        <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
            General Information
        </Text>

        <SimpleGrid {...gridThreeColumnStyle}>
            {/* Manufacturer Name (Required) */}
            <FormControl isRequired>
                <FormLabel {...labelStyles}>Manufacturer Name</FormLabel>
                <Input
                    name="mfg_name"
                    value={form.mfg_name}
                    onChange={handleChange}
                    placeholder="e.g. Sun Pharmaceuticals"
                    {...inputStyles}
                />
            </FormControl>

            {/* Abbreviation (Optional) */}
            <FormControl>
                <FormLabel {...labelStyles}>Abbreviation (Short Name)</FormLabel>
                <Input
                    name="mfg_short"
                    value={form.mfg_short}
                    onChange={handleChange}
                    placeholder="e.g. SUN"
                    {...inputStyles}
                />
            </FormControl>

            {/* MR Name (Optional) */}
            <FormControl>
                <FormLabel {...labelStyles}>MR Name</FormLabel>
                <Input
                    name="mr_name"
                    value={form.mr_name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    {...inputStyles}
                />
            </FormControl>

            {/* MR Phone (Optional) */}
            <FormControl>
                <FormLabel {...labelStyles}>MR Phone</FormLabel>
                <Input
                    type="tel"
                    name="mr_phone"
                    value={form.mr_phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    {...inputStyles}
                />
            </FormControl>
        </SimpleGrid>
    </Box>
);

export default BasicInfo;
