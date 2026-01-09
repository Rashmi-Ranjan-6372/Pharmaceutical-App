import { Box, FormControl, FormLabel, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { sectionHeadingStyle, labelStyles, inputStyles, gridThreeColumnStyle } from "../Style";

const TaxInfo = ({ form, errors, handleChange }) => (
  <Box mb={6}>
    <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
      Tax & License Information
    </Text>

    <SimpleGrid {...gridThreeColumnStyle}>
      <FormControl isRequired isInvalid={!!errors.gst_number}>
        <FormLabel {...labelStyles}>GST Number</FormLabel>
        <Input
          name="gst_number"
          value={form.gst_number}
          onChange={handleChange}
          placeholder="e.g. 27ABCDE1234F1Z5"
          {...inputStyles}
        />
        {errors.gst_number && <Text color="red.500" fontSize="sm">{errors.gst_number}</Text>}
      </FormControl>

      <FormControl isRequired isInvalid={!!errors.drug_license_no}>
        <FormLabel {...labelStyles}>Drug License Number</FormLabel>
        <Input
          name="drug_license_no"
          value={form.drug_license_no}
          onChange={handleChange}
          placeholder="e.g. MH/12345"
          {...inputStyles}
        />
        {errors.drug_license_no && <Text color="red.500" fontSize="sm">{errors.drug_license_no}</Text>}
      </FormControl>

      <FormControl isRequired isInvalid={!!errors.pan_number}>
        <FormLabel {...labelStyles}>PAN Number</FormLabel>
        <Input
          name="pan_number"
          value={form.pan_number}
          onChange={handleChange}
          placeholder="e.g. ABCDE1234F"
          {...inputStyles}
        />
        {errors.pan_number && <Text color="red.500" fontSize="sm">{errors.pan_number}</Text>}
      </FormControl>
    </SimpleGrid>
  </Box>
);

export default TaxInfo;
