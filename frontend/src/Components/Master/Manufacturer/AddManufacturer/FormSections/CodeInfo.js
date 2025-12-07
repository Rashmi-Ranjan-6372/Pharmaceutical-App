// CodeInfo.jsx
import { Box, FormControl, FormLabel, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    labelStyles,
    inputStyles,
    gridThreeColumnStyle,
    formBoxStyle
} from "../Style"; // Adjust path if needed

const CodeInfo = ({ form, handleChange }) => (
    <Box mb={6}>
        {/* Section Title */}
        <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
            Code Information
        </Text>

        <SimpleGrid {...gridThreeColumnStyle}>
            {/* Company Code */}
            <FormControl isRequired>
                <FormLabel {...labelStyles}>Company Code</FormLabel>
                <Input
                    type="number"
                    name="comp_code"
                    value={form.comp_code}
                    onChange={handleChange}
                    placeholder="e.g. 1001"
                    {...inputStyles}
                />
            </FormControl>

            {/* User Code */}
            <FormControl isRequired>
                <FormLabel {...labelStyles}>User Code</FormLabel>
                <Input
                    type="number"
                    name="user_code"
                    value={form.user_code}
                    onChange={handleChange}
                    placeholder="e.g. 2001"
                    {...inputStyles}
                />
            </FormControl>

            {/* Deleted Status */}
            <FormControl>
                <FormLabel {...labelStyles}>Deleted?</FormLabel>
                <Select
                    name="del"
                    value={form.del}
                    onChange={handleChange}
                    size="sm"
                    {...inputStyles}
                >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </Select>
            </FormControl>
        </SimpleGrid>
    </Box>
);

export default CodeInfo;
