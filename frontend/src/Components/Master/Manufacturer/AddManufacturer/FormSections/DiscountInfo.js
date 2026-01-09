import { Box, FormControl, FormLabel, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { sectionHeadingStyle, labelStyles, inputStyles } from "../Style";

const gridFourColumnStyle = {
  columns: { base: 1, md: 4 },
  spacing: 5,
};

const DiscountInfo = ({ form, errors, handleChange }) => (
  <Box mb={6}>
    <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
      Discount Information
    </Text>

    <SimpleGrid {...gridFourColumnStyle}>
      {/* Purchase Discount Rate */}
      <FormControl isRequired isInvalid={!!errors.purchase_discount_rate}>
        <FormLabel {...labelStyles}>Purchase Discount Rate</FormLabel>
        <Input
          type="number"
          step="0.01"
          name="purchase_discount_rate"
          value={form.purchase_discount_rate}
          onChange={handleChange}
          placeholder="10.00"
          {...inputStyles}
        />
        {errors.purchase_discount_rate && (
          <Text color="red.500" fontSize="sm">{errors.purchase_discount_rate}</Text>
        )}
      </FormControl>

      {/* Purchase Discount Mode */}
      <FormControl isRequired>
        <FormLabel {...labelStyles}>Purchase Discount Mode</FormLabel>
        <Select
          name="purchase_discount_mode"
          value={form.purchase_discount_mode}
          onChange={handleChange}
          {...inputStyles}
        >
          <option value="percentage">Percentage</option>
          <option value="flat">Flat</option>
        </Select>
      </FormControl>

      {/* Sales Discount Rate */}
      <FormControl isRequired isInvalid={!!errors.sales_discount_rate}>
        <FormLabel {...labelStyles}>Sales Discount Rate</FormLabel>
        <Input
          type="number"
          step="0.01"
          name="sales_discount_rate"
          value={form.sales_discount_rate}
          onChange={handleChange}
          placeholder="5.00"
          {...inputStyles}
        />
        {errors.sales_discount_rate && (
          <Text color="red.500" fontSize="sm">{errors.sales_discount_rate}</Text>
        )}
      </FormControl>

      {/* Sales Discount Mode */}
      <FormControl isRequired>
        <FormLabel {...labelStyles}>Sales Discount Mode</FormLabel>
        <Select
          name="sales_discount_mode"
          value={form.sales_discount_mode}
          onChange={handleChange}
          {...inputStyles}
        >
          <option value="percentage">Percentage</option>
          <option value="flat">Flat</option>
        </Select>
      </FormControl>
    </SimpleGrid>
  </Box>
);

export default DiscountInfo;
