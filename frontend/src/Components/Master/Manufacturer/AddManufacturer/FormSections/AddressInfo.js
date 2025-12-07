// AddressInfo.jsx
import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    inputStyles,
    labelStyles,
    formBoxStyle
} from "../Style";  // Adjust the import path if needed

const AddressInfo = ({ form, handleChange }) => (
    <Box mb={6}>
        {/* Section Title */}
        <Text {...sectionHeadingStyle} fontWeight="bold">
            Address Information
        </Text>

        <FormControl>
            <FormLabel {...labelStyles}>Address</FormLabel>
            <Input
                name="mfg_address"
                value={form.mfg_address}
                onChange={handleChange}
                placeholder="e.g. Plot 12, Industrial Area, Mumbai"
                {...inputStyles}
            />
        </FormControl>
    </Box>
);

export default AddressInfo;
