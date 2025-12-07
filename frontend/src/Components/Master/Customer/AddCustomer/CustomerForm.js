import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    VStack,
} from "@chakra-ui/react";

import GeneralInfo from "./FormSections/GeneralInfo";
import SalesAssignment from "./FormSections/SalesAssignment";
import ContactInfo from "./FormSections/ContactInfo";
import TaxLicenseDetails from "./FormSections/TaxLicenseDetails";
import CreditDiscount from "./FormSections/CreditDiscount";
import AddressInfo from "./FormSections/AddressInfo";

import {
    inputStyles,
    labelStyles,
    formButtonResetStyle,
    formButtonSubmitStyle,
} from "./Style";

const CustomerForm = () => {
    const initialFormData = {
        gl_code: "",
        parent_code: "",
        comp_code: "",
        area_code: "",
        personnel_code: "",
        contact_person: "",
        telephone_no: "",
        e_mail: "",
        website: "",
        correspondence_address: "",
        shipping_address: "",
        registered_dealer: "N",
        gstno: "",
        spl_lic_no: "",
        sales_discount_rate: "",
        sales_discount_mode: "A",
        credit_limit: "",
        credit_days: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    }

    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={3} align="stretch">
                <GeneralInfo
                    formData={formData}
                    handleChange={handleChange}
                    inputStyles={inputStyles}
                    labelStyles={labelStyles}
                />
                <SalesAssignment
                    formData={formData}
                    handleChange={handleChange}
                    inputStyles={inputStyles}
                    labelStyles={labelStyles}
                />
                <ContactInfo
                    formData={formData}
                    handleChange={handleChange}
                    inputStyles={inputStyles}
                    labelStyles={labelStyles}
                />
                <TaxLicenseDetails
                    formData={formData}
                    handleChange={handleChange}
                    inputStyles={inputStyles}
                    labelStyles={labelStyles}
                />
                <CreditDiscount
                    formData={formData}
                    handleChange={handleChange}
                    inputStyles={inputStyles}
                    labelStyles={labelStyles}
                />
                <AddressInfo
                    formData={formData}
                    handleChange={handleChange}
                    inputStyles={inputStyles}
                    labelStyles={labelStyles}
                />
            </VStack>

            <Flex justify="space-between" mt={3} gap={2}>
                <Button {...formButtonResetStyle} onClick={handleReset} type="button">
                    Reset
                </Button>
                <Button {...formButtonSubmitStyle} type="submit">
                    Save Customer
                </Button>
            </Flex>
        </Box>
    );
};

export default CustomerForm;
