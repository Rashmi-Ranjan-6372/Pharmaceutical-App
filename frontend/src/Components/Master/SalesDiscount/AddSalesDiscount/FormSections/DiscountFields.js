import React from "react";
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    Select,
    SimpleGrid,
    Text,
    Divider,
} from "@chakra-ui/react";

// ✅ Import styles
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    labelStyles,
    inputStyles,
    gridTwoColumnStyle,
} from "../Style"; // Adjust the path as needed

const DiscountFields = ({ discountRate, setDiscountRate, discountMode, setDiscountMode }) => (
    <>
        {/* Section Title */}
        <Text {...sectionHeadingStyle}>Discount Information</Text>
        <Divider {...sectionDividerStyle} />

        {/* Grid layout */}
        <SimpleGrid {...gridTwoColumnStyle}>
            {/* Discount Rate */}
            <FormControl>
                <FormLabel {...labelStyles}>Discount Rate (%)</FormLabel>
                <NumberInput
                    step={0.01}
                    value={discountRate}
                    onChange={(valueString) => setDiscountRate(valueString)}
                    {...inputStyles}
                >
                    <NumberInputField {...inputStyles} placeholder="Enter rate e.g. 10.25" />
                </NumberInput>
            </FormControl>

            {/* Discount Mode */}
            <FormControl>
                <FormLabel {...labelStyles}>Discount Mode</FormLabel>
                <Select
                    value={discountMode}
                    onChange={(e) => setDiscountMode(e.target.value)}
                    placeholder="Select Discount Mode"
                    {...inputStyles}
                >
                    <option value="A">After-Tax</option>
                    <option value="B">Before-Tax</option>
                </Select>
            </FormControl>
        </SimpleGrid>
    </>
);

export default DiscountFields;
