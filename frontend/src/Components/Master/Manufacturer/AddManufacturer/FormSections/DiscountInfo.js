// DiscountInfo.jsx
import { Box, FormControl, FormLabel, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    labelStyles,
    inputStyles,
} from "../Style";

// Added grid style for 4 columns
const gridFourColumnStyle = {
    columns: { base: 1, md: 4 },
    spacing: 5,
};

const DiscountInfo = ({ form, handleChange }) => (
    <Box mb={6}>
        {/* Section Title */}
        <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
            Discount Information
        </Text>

        <SimpleGrid {...gridFourColumnStyle}>
            {/* Purchase Discount Rate */}
            <FormControl>
                <FormLabel {...labelStyles}>Purchase Discount Rate</FormLabel>
                <Input
                    type="number"
                    step="0.01"
                    name="purchase_discount_rate"
                    value={form.purchase_discount_rate}
                    onChange={handleChange}
                    placeholder="e.g. 10.00"
                    {...inputStyles}
                />
            </FormControl>

            {/* Purchase Discount Mode */}
            <FormControl>
                <FormLabel {...labelStyles}>Purchase Discount Mode</FormLabel>
                <Select
                    name="purchase_discount_mode"
                    value={form.purchase_discount_mode}
                    onChange={handleChange}
                    size="sm"
                    {...inputStyles}
                >
                    <option value="%">%</option>
                    <option value="Flat">Flat</option>
                </Select>
            </FormControl>

            {/* Sales Discount Rate */}
            <FormControl>
                <FormLabel {...labelStyles}>Sales Discount Rate</FormLabel>
                <Input
                    type="number"
                    step="0.01"
                    name="sales_discount_rate"
                    value={form.sales_discount_rate}
                    onChange={handleChange}
                    placeholder="e.g. 5.00"
                    {...inputStyles}
                />
            </FormControl>

            {/* Sales Discount Mode */}
            <FormControl>
                <FormLabel {...labelStyles}>Sales Discount Mode</FormLabel>
                <Select
                    name="sales_discount_mode"
                    value={form.sales_discount_mode}
                    onChange={handleChange}
                    size="sm"
                    {...inputStyles}
                >
                    <option value="%">%</option>
                    <option value="Flat">Flat</option>
                </Select>
            </FormControl>

            {/* Module Code */}
            <FormControl isRequired>
                <FormLabel {...labelStyles}>Module Code</FormLabel>
                <Input
                    type="number"
                    name="mod_code"
                    value={form.mod_code}
                    onChange={handleChange}
                    placeholder="e.g. 101"
                    {...inputStyles}
                />
            </FormControl>
        </SimpleGrid>
    </Box>
);

export default DiscountInfo;
