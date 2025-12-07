// AddVendor.js
import React, { useState } from "react";
import {
    Box,
    useToast,
    useColorModeValue,
    Flex,
    Button,
    Heading,
    Text,
} from "@chakra-ui/react";
import VendorForm from "./VendorForm";

// Import shared styles
import {
    containerBoxStyle,
    containerHeaderBoxStyle,
    containerHeadingStyle,
    containerSubTextStyle,
    formButtonResetStyle,
    formButtonSubmitStyle,
} from "./Style"; // Adjust the path according to your project structure

const AddVendor = () => {
    const toast = useToast();
    const inputBg = useColorModeValue("white", "gray.700");

    const initialVendorState = {
        vendorName: "",
        contactPerson: "",
        contactNumber: "",
        email: "",
        gstOrLicense: "",
        drugLicense: "",
        pan: "",
        city: "",
        state: "",
        country: "",
    };

    const [vendor, setVendor] = useState(initialVendorState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendor({ ...vendor, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Vendor Data:", vendor);

        toast({
            title: "Vendor Added",
            description: "Vendor information has been saved successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        setVendor(initialVendorState);
    };

    const handleReset = () => {
        setVendor(initialVendorState);
    };

    return (
        <Box {...containerBoxStyle} bg={inputBg}>
            {/* Header */}
            <Box {...containerHeaderBoxStyle}>
                <Heading {...containerHeadingStyle}>Add Vendor</Heading>
                <Text {...containerSubTextStyle}>
                    Fill out the details below to add a new Vendor
                </Text>
            </Box>

            {/* Vendor Form */}
            <form onSubmit={handleSubmit}>
                <VendorForm vendor={vendor} handleChange={handleChange} />

                {/* Action Buttons */}
                <Flex justify="space-between" mt={6} gap={3}>
                    <Button {...formButtonResetStyle} onClick={handleReset}>
                        Reset
                    </Button>
                    <Button {...formButtonSubmitStyle} type="submit">
                        Add Vendor
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddVendor;
