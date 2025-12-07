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

const CreditDiscount = ({ formData, handleChange }) => {
    return (
        <Box>
            <Heading {...sectionHeadingStyle}>Credit & Discount</Heading>
            <Divider {...sectionDividerStyle} />
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Sales Discount Rate (%)</FormLabel>
                    <Input
                        {...inputStyles}
                        name="sales_discount_rate"
                        type="number"
                        step="0.01"
                        value={formData.sales_discount_rate}
                        onChange={handleChange}
                        placeholder="e.g. 10.00"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Discount Mode</FormLabel>
                    <Select
                        {...inputStyles}
                        name="sales_discount_mode"
                        value={formData.sales_discount_mode}
                        onChange={handleChange}
                    >
                        <option value="A">After Tax</option>
                        <option value="B">Before Tax</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Credit Limit</FormLabel>
                    <Input
                        {...inputStyles}
                        name="credit_limit"
                        type="number"
                        value={formData.credit_limit}
                        onChange={handleChange}
                        placeholder="e.g. 50000"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Credit Days</FormLabel>
                    <Input
                        {...inputStyles}
                        name="credit_days"
                        type="number"
                        value={formData.credit_days}
                        onChange={handleChange}
                        placeholder="e.g. 30"
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default CreditDiscount;
