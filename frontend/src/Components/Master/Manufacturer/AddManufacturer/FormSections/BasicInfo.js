import { Box, FormControl, FormLabel, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { sectionHeadingStyle, labelStyles, inputStyles, gridThreeColumnStyle } from "../Style";

const BasicInfo = ({ form, errors, handleChange }) => {
  return (
    <Box mb={6}>
      <Text {...sectionHeadingStyle} fontWeight="bold" mb={3}>
        General Information
      </Text>

      <SimpleGrid {...gridThreeColumnStyle}>
        <FormControl isRequired isInvalid={!!errors.mfg_name}>
          <FormLabel {...labelStyles}>Manufacturer Name</FormLabel>
          <Input
            name="mfg_name"
            value={form.mfg_name}
            onChange={handleChange}
            {...inputStyles}
          />
          {errors.mfg_name && <Text color="red.500" fontSize="sm">{errors.mfg_name}</Text>}
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.mfg_short}>
        <FormLabel {...labelStyles}>Abbreviation (Short Name)</FormLabel>
        <Input
            name="mfg_short"
            value={form.mfg_short}
            onChange={(e) => handleChange({
            target: { name: e.target.name, value: e.target.value.toUpperCase() }
            })}
            {...inputStyles}
        />
        {errors.mfg_short && <Text color="red.500" fontSize="sm">{errors.mfg_short}</Text>}
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.contact_person}>
          <FormLabel {...labelStyles}>Contact Person</FormLabel>
          <Input
            name="contact_person"
            value={form.contact_person}
            onChange={handleChange}
            {...inputStyles}
          />
          {errors.contact_person && <Text color="red.500" fontSize="sm">{errors.contact_person}</Text>}
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.contact_phone}>
          <FormLabel {...labelStyles}>Contact Phone</FormLabel>
          <Input
            type="tel"
            name="contact_phone"
            value={form.contact_phone}
            onChange={handleChange}
            {...inputStyles}
          />
          {errors.contact_phone && <Text color="red.500" fontSize="sm">{errors.contact_phone}</Text>}
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.contact_email}>
          <FormLabel {...labelStyles}>Contact Email</FormLabel>
          <Input
            type="email"
            name="contact_email"
            value={form.contact_email}
            onChange={handleChange}
            {...inputStyles}
          />
          {errors.contact_email && <Text color="red.500" fontSize="sm">{errors.contact_email}</Text>}
        </FormControl>

        <FormControl>
          <FormLabel {...labelStyles}>MR Name</FormLabel>
          <Input
            name="mr_name"
            value={form.mr_name}
            onChange={handleChange}
            {...inputStyles}
          />
        </FormControl>

        <FormControl>
          <FormLabel {...labelStyles}>MR Phone</FormLabel>
          <Input
            type="tel"
            name="mr_phone"
            value={form.mr_phone}
            onChange={handleChange}
            {...inputStyles}
          />
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

export default BasicInfo;
