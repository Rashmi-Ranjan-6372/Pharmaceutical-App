import { Box, Heading, Text } from "@chakra-ui/react";
import CustomerForm from "./CustomerForm";
import {
    containerBoxStyle,
    containerHeaderBoxStyle,
    containerHeadingStyle,
    containerSubTextStyle,
} from "./Style";

const AddCustomer = () => {
    return (
        <Box {...containerBoxStyle}>
            <Box {...containerHeaderBoxStyle}>
                <Heading {...containerHeadingStyle}>Add Customer</Heading>
                <Text {...containerSubTextStyle}>
                    Fill out the details below to add a new Customer
                </Text>
            </Box>

            <CustomerForm />
        </Box>
    );
};

export default AddCustomer;
