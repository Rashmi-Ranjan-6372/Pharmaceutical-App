import React, { useState } from "react";
import {
    Box,
    VStack,
    Heading,
    Text,
    useToast,
    Flex,
    Button,
} from "@chakra-ui/react";
import PartyFields from "./FormSections/PartyFields";
import ItemFields from "./FormSections/ItemFields";
import DiscountFields from "./FormSections/DiscountFields";
import MetaData from "./FormSections/MetaData";

import {
    containerBoxStyle,
    containerHeaderBoxStyle,
    containerHeadingStyle,
    containerSubTextStyle,
    formButtonResetStyle,
    formButtonSubmitStyle,
} from "./Style";

const AddSalesDiscount = () => {
    const toast = useToast();

    const initialFormData = {
        partyType: "",
        partyCode: "",
        itemType: "M",
        itemCode: "",
        discountRate: "",
        discountMode: "",
        userCode: "U1",
        lastUpdate: new Date().toISOString(),
        deleted: " ",
    };

    const [formData, setFormData] = useState(initialFormData);

    // Handle form field changes
    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Handle save button click
    const handleAddDiscount = () => {
        if (!formData.partyType || !formData.itemType || !formData.discountRate) {
            toast({
                title: "Please fill required fields",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        toast({
            title: "Sales Discount added successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        // Reset form after successful submit
        setFormData(initialFormData);
    };

    // Reset form fields
    const handleReset = () => {
        setFormData(initialFormData);
    };

    return (
        <Box {...containerBoxStyle}>
            <VStack spacing={4} align="stretch" flex="1">
                <Box {...containerHeaderBoxStyle}>
                    <Heading {...containerHeadingStyle}>Add Sales Discount</Heading>
                    <Text {...containerSubTextStyle}>
                        Define discounts for parties and items.
                    </Text>
                </Box>

                {/* Form Sections */}
                <PartyFields
                    partyType={formData.partyType}
                    setPartyType={(v) => handleChange("partyType", v)}
                    partyCode={formData.partyCode}
                    setPartyCode={(v) => handleChange("partyCode", v)}
                />

                <ItemFields
                    itemType={formData.itemType}
                    setItemType={(v) => handleChange("itemType", v)}
                    itemCode={formData.itemCode}
                    setItemCode={(v) => handleChange("itemCode", v)}
                />

                <DiscountFields
                    discountRate={formData.discountRate}
                    setDiscountRate={(v) => handleChange("discountRate", v)}
                    discountMode={formData.discountMode}
                    setDiscountMode={(v) => handleChange("discountMode", v)}
                />

                <MetaData
                    lastUpdate={formData.lastUpdate}
                    deleted={formData.deleted}
                    setDeleted={(v) => handleChange("deleted", v)}
                />

                {/* Action buttons */}
                <Flex justify="space-between">
                    <Button {...formButtonResetStyle} onClick={handleReset}>
                        Reset
                    </Button>
                    <Button {...formButtonSubmitStyle} onClick={handleAddDiscount} type="submit">
                        Save Sales Discount
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default AddSalesDiscount;
