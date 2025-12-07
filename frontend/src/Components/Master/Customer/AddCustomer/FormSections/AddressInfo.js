import {
    Box,
    Divider,
    Heading,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    checkboxStyle,
    inputStyles,
    labelStyles,
} from "../Style";

const AddressInfo = ({ formData, handleChange }) => {
    const [sameAsCorrespondence, setSameAsCorrespondence] = useState(false);

    // Automatically update shipping address when checkbox is toggled
    useEffect(() => {
        if (sameAsCorrespondence) {
            handleChange({
                target: {
                    name: "shipping_address",
                    value: formData.correspondence_address || "",
                },
            });
        }
    }, [sameAsCorrespondence, formData.correspondence_address, handleChange]);

    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setSameAsCorrespondence(isChecked);

        // If unchecked, clear the shipping address
        if (!isChecked) {
            handleChange({
                target: {
                    name: "shipping_address",
                    value: "",
                },
            });
        }
    };

    return (
        <Box>
            {/* Section Title */}
            <Heading {...sectionHeadingStyle}>Address</Heading>
            <Divider {...sectionDividerStyle} />

            {/* Address Fields */}
            <SimpleGrid {...gridTwoColumnStyle}>

                {/* Correspondence Address */}
                <FormControl>
                    <FormLabel {...labelStyles}>Correspondence Address</FormLabel>
                    <Input
                        {...inputStyles}
                        name="correspondence_address"
                        value={formData.correspondence_address || ""}
                        onChange={handleChange}
                        placeholder="e.g. 123 Pharma Street, City"
                    />
                </FormControl>

                {/* Shipping Address */}
                <FormControl>
                    <FormLabel {...labelStyles}>Shipping Address</FormLabel>
                    <Input
                        {...inputStyles}
                        name="shipping_address"
                        value={formData.shipping_address || ""}
                        onChange={handleChange}
                        placeholder="e.g. 456 Delivery Road, City"
                        isReadOnly={sameAsCorrespondence}
                    />
                    <Checkbox
                        {...checkboxStyle}
                        isChecked={sameAsCorrespondence}
                        onChange={handleCheckboxChange}
                    >
                        Same as Correspondence Address
                    </Checkbox>
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default AddressInfo;
