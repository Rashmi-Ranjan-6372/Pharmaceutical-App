// src/Components/SalesArea/SalesDiscount/AddSalesDiscount/SalesDiscountForm.js

import React, { useState } from "react";
import { VStack, Button, Box, useToast, HStack } from "@chakra-ui/react";

// Importing form sections
import PartyFields from "./FormSections/PartyFields";
import ItemFields from "./FormSections/ItemFields";
import DiscountFields from "./FormSections/DiscountFields";
import ModuleCompanyFields from "./FormSections/ModuleCompanyFields";
import OtherFields from "./FormSections/OtherFields";

// ✅ Import shared styles
import {
    containerBoxStyle,
    formButtonSubmitStyle,
    formButtonResetStyle,
} from "./Style"; // Adjust path as necessary

const SalesDiscountForm = () => {
    const toast = useToast();

    // === Form state ===
    const [partyType, setPartyType] = useState("");
    const [partyCode, setPartyCode] = useState("");
    const [itemType, setItemType] = useState("M");
    const [itemCode, setItemCode] = useState("");
    const [discountRate, setDiscountRate] = useState("");
    const [discountMode, setDiscountMode] = useState("");
    const [moduleCode, setModuleCode] = useState("");
    const [companyCode, setCompanyCode] = useState("");
    const [userCode, setUserCode] = useState("123"); // Auto-filled
    const [lastUpdate, setLastUpdate] = useState(new Date().toISOString());
    const [deleted, setDeleted] = useState(" ");

    // Sample data (replace with real fetched data)
    const modules = [{ code: "M1", name: "Module 1" }];
    const companies = [{ code: "C1", name: "Company 1" }];
    const users = [{ code: "U1", name: "User 1" }];

    // Submit handler
    const handleSubmit = () => {
        const data = {
            partyType,
            partyCode,
            itemType,
            itemCode,
            discountRate,
            discountMode,
            moduleCode,
            companyCode,
            userCode,
            lastUpdate,
            deleted,
        };

        // Validation example
        if (!partyType || !itemCode || !discountRate) {
            toast({
                title: "Please fill all required fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        console.log("Submitted Discount Data:", data);

        toast({
            title: "Sales Discount submitted!",
            description: "Your discount has been saved.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        handleReset();
    };

    // Reset handler
    const handleReset = () => {
        setPartyType("");
        setPartyCode("");
        setItemType("M");
        setItemCode("");
        setDiscountRate("");
        setDiscountMode("");
        setModuleCode("");
        setCompanyCode("");
        setUserCode("123");
        setLastUpdate(new Date().toISOString());
        setDeleted(" ");
    };

    return (
        <Box {...containerBoxStyle}>
            <VStack spacing={4} align="stretch">
                {/* Form Sections */}
                <PartyFields
                    partyType={partyType}
                    setPartyType={setPartyType}
                    partyCode={partyCode}
                    setPartyCode={setPartyCode}
                />
                <ItemFields
                    itemType={itemType}
                    setItemType={setItemType}
                    itemCode={itemCode}
                    setItemCode={setItemCode}
                />
                <DiscountFields
                    discountRate={discountRate}
                    setDiscountRate={setDiscountRate}
                    discountMode={discountMode}
                    setDiscountMode={setDiscountMode}
                />
                <ModuleCompanyFields
                    moduleCode={moduleCode}
                    setModuleCode={setModuleCode}
                    companyCode={companyCode}
                    setCompanyCode={setCompanyCode}
                    userCode={userCode}
                    setUserCode={setUserCode}
                    modules={modules}
                    companies={companies}
                    users={users}
                />
                <OtherFields
                    lastUpdate={lastUpdate}
                    deleted={deleted}
                    setDeleted={setDeleted}
                />

                {/* Action Buttons */}
                <HStack justify="space-between" mt={3}>
                    <Button
                        {...formButtonResetStyle}
                        onClick={handleReset}
                        isDisabled={isDisabled}
                    >
                        Reset
                    </Button>
                    <Button
                        {...formButtonSubmitStyle}
                        onClick={handleAddProduct}
                        isDisabled={isDisabled}
                    >
                        + Add Sales Discount
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default SalesDiscountForm;
