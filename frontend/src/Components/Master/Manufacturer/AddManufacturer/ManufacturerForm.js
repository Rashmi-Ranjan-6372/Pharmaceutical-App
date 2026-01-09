import { Box, Button, Flex } from "@chakra-ui/react";
import BasicInfo from "./FormSections/BasicInfo";
import AddressInfo from "./FormSections/AddressInfo";
import TaxInfo from "./FormSections/TaxInfo";
import DiscountInfo from "./FormSections/DiscountInfo";
import { formButtonResetStyle, formButtonSubmitStyle } from "./Style";

const ManufacturerForm = ({ form, errors, handleChange, handleSubmit, resetForm }) => (
  <Box as="form" onSubmit={handleSubmit}>
    <BasicInfo form={form} errors={errors} handleChange={handleChange} />
    <AddressInfo form={form} errors={errors} handleChange={handleChange} />
    <TaxInfo form={form} errors={errors} handleChange={handleChange} />
    <DiscountInfo form={form} errors={errors} handleChange={handleChange} />

    <Flex mt={6} gap={4} justify="space-between">
      <Button {...formButtonResetStyle} type="button" onClick={resetForm}>
        Reset
      </Button>
      <Button {...formButtonSubmitStyle} type="submit">
        Add Manufacturer
      </Button>
    </Flex>
  </Box>
);

export default ManufacturerForm;
