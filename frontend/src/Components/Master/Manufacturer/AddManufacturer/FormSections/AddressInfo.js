// src/Components/Master/Manufacturer/AddManufacturer/FormSections/AddressInfo.js
import { Box, FormControl, FormLabel, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { sectionHeadingStyle, labelStyles, inputStyles } from "../Style";

const gridFiveColumnStyle = {
  columns: { base: 1, md: 5 },
  spacing: 3,
};

const AddressInfo = ({ form, handleChange }) => (
  <Box mb={6}>
    <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
      Address Information
    </Text>

    <SimpleGrid {...gridFiveColumnStyle}>
      <FormControl>
        <FormLabel {...labelStyles}>Address</FormLabel>
        <Input
          name="mfg_address"
          value={form.mfg_address}
          onChange={handleChange}
          placeholder="Street/Plot"
          {...inputStyles}
        />
      </FormControl>

      <FormControl>
        <FormLabel {...labelStyles}>City</FormLabel>
        <Input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          {...inputStyles}
        />
      </FormControl>

      <FormControl>
        <FormLabel {...labelStyles}>State</FormLabel>
        <Input
          name="state"
          value={form.state}
          onChange={handleChange}
          placeholder="State"
          {...inputStyles}
        />
      </FormControl>

      <FormControl>
        <FormLabel {...labelStyles}>Country</FormLabel>
        <Input
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Country"
          {...inputStyles}
        />
      </FormControl>

      <FormControl>
        <FormLabel {...labelStyles}>Pincode</FormLabel>
        <Input
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          {...inputStyles}
        />
      </FormControl>
    </SimpleGrid>
  </Box>
);

export default AddressInfo;
