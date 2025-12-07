import {
    Box,
    Button,
    Flex,
} from "@chakra-ui/react";
import BasicInfo from "./FormSections/BasicInfo";
import DiscountInfo from "./FormSections/DiscountInfo";
import CodeInfo from "./FormSections/CodeInfo";
import AddressInfo from "./FormSections/AddressInfo";
import {
    formButtonResetStyle,
    formButtonSubmitStyle,
} from "./Style"; // make sure the path is correct

const ManufacturerForm = ({ form, handleChange, handleSubmit, resetForm }) => {
    return (
        <Box as="form" onSubmit={handleSubmit}>
            <BasicInfo form={form} handleChange={handleChange} />
            <DiscountInfo form={form} handleChange={handleChange} />
            <CodeInfo form={form} handleChange={handleChange} />
            <AddressInfo form={form} handleChange={handleChange} />

            <Flex mt={6} gap={4} justify="space-between">
                <Button {...formButtonResetStyle} onClick={resetForm} type="button">
                    Reset
                </Button>
                <Button {...formButtonSubmitStyle} type="submit">
                    Add Manufacturer
                </Button>
            </Flex>
        </Box>
    );
};

export default ManufacturerForm;
