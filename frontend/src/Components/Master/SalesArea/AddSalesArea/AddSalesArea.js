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
import SalesAreaForm from "./SalesAreaForm";
import {
    containerBoxStyle,
    containerHeaderBoxStyle,
    containerHeadingStyle,
    containerSubTextStyle,
    formButtonResetStyle,
    formButtonSubmitStyle,
} from "./Style";

const AddSalesArea = () => {
    const toast = useToast();
    const inputBg = useColorModeValue("white", "gray.700");

    const initialState = {
        area_name: "",
        parent_code: 0,
        sales_discount_rate: 0.0,
        sales_discount_mode: "A",
        modify_allowed: "Y",
        comp_code: "",
        user_code: "",
        del: " ",
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    //  Validation function for all sections
    const validateForm = () => {
        const newErrors = {};

        // Area Name
        if (!formData.area_name.trim()) {
            newErrors.area_name = "Area Name is required";
        } else if (formData.area_name.length < 5) {
            newErrors.area_name = "Area Name must be at least 5 characters long";
        } else if (formData.area_name.length > 50) {
            newErrors.area_name = "Area Name cannot exceed 50 characters";
        } else if (!/^[A-Za-z\s]+$/.test(formData.area_name)) {
            newErrors.area_name = "Area Name must contain only letters";
        } else if (!/^[A-Z]/.test(formData.area_name)) {
            newErrors.area_name = "Area Name must start with an uppercase letter";
        }

        // Parent Area
        if (!formData.parent_code || formData.parent_code === 0) {
            newErrors.parent_code = "Please select a Parent Area";
        }

        // Discount Rate
        if (formData.sales_discount_rate < 0 || formData.sales_discount_rate > 99.99) {
            newErrors.sales_discount_rate = "Discount rate must be between 0 and 99.99";
        }

        // Discount Mode
        if (!["A", "B"].includes(formData.sales_discount_mode)) {
            newErrors.sales_discount_mode = "Please select a valid Discount Mode";
        }

        // Modify Allowed
        if (!["Y", "N"].includes(formData.modify_allowed)) {
            newErrors.modify_allowed = "Please select Modify Allowed";
        }

        // Status
        if (![" ", "*"].includes(formData.del)) {
            newErrors.del = "Please select a valid Status";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                title: "Validation Error",
                description: "Please fix the errors before submitting.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        console.log("Sales Area Data:", formData);

        toast({
            title: "Sales Area Added",
            description: "Sales area has been saved successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        setFormData(initialState);
        setErrors({});
    };

    const handleReset = () => {
        setFormData(initialState);
        setErrors({});
    };

    const dummyCompanies = [
        { comp_code: "C001", comp_name: "Acme Corp" },
        { comp_code: "C002", comp_name: "Globex Ltd" },
    ];

    const dummyUsers = [
        { user_code: "U001", user_name: "Alice" },
        { user_code: "U002", user_name: "Bob" },
    ];

    const dummyParents = [
        { area_code: 0, area_name: "None" },
        { area_code: 1, area_name: "North Zone" },
    ];

    return (
        <Box {...containerBoxStyle} bg={inputBg}>
            {/* Header */}
            <Box {...containerHeaderBoxStyle}>
                <Heading {...containerHeadingStyle}>Add Sales Area</Heading>
                <Text {...containerSubTextStyle}>
                    Fill out the details below to add a new Sales Area
                </Text>
            </Box>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <SalesAreaForm
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                    companies={dummyCompanies}
                    users={dummyUsers}
                    parents={dummyParents}
                />

                <Flex justify="space-between">
                    <Button {...formButtonResetStyle} onClick={handleReset}>
                        Reset
                    </Button>
                    <Button {...formButtonSubmitStyle} type="submit">
                        Save Sales Area
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddSalesArea;
