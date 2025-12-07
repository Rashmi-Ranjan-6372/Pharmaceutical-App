import React, { useState } from "react";
import { Box, Text, Heading, useToast } from "@chakra-ui/react";
import ManufacturerForm from "./ManufacturerForm";
import {
    containerBoxStyle,
    containerHeaderBoxStyle,
    containerHeadingStyle,
    containerSubTextStyle,
} from "./Style";

const AddManufacturer = () => {
    const toast = useToast();

    const [form, setForm] = useState({
        mfg_name: "",
        mfg_short: "",
        mfg_address: "",
        purchase_discount_rate: "",
        purchase_discount_mode: "%",
        sales_discount_rate: "",
        sales_discount_mode: "%",
        mod_code: "",
        comp_code: "",
        user_code: "",
        del: "No",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setForm({
            mfg_name: "",
            mfg_short: "",
            mfg_address: "",
            purchase_discount_rate: "",
            purchase_discount_mode: "%",
            sales_discount_rate: "",
            sales_discount_mode: "%",
            mod_code: "",
            comp_code: "",
            user_code: "",
            del: "No",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.mfg_name.trim()) {
            return toast({
                title: "Manufacturer Name is required.",
                status: "error",
                isClosable: true,
            });
        }
        if (!form.mod_code || !form.comp_code || !form.user_code) {
            return toast({
                title: "Module, Company, and User codes are required.",
                status: "error",
                isClosable: true,
            });
        }

        console.log("Form Submitted:", form);
        toast({
            title: "Manufacturer added successfully.",
            status: "success",
            isClosable: true,
        });
        resetForm();
    };

    return (
        <Box {...containerBoxStyle}>
            <Box {...containerHeaderBoxStyle}>
                <Heading {...containerHeadingStyle}>Add Manufacturer</Heading>
                <Text {...containerSubTextStyle}>
                    Fill in the details below to add a new manufacturer.
                </Text>
            </Box>

            <ManufacturerForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                resetForm={resetForm}
            />
        </Box>
    );
};

export default AddManufacturer;
