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
    FormErrorMessage,
} from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    labelStyles,
    inputStyles,
} from "../Style";

const DiscountInfo = ({ formData, handleChange, errors }) => (
    <>
        <Text {...sectionHeadingStyle}>Discount Information</Text>
        <Divider {...sectionDividerStyle} />

        <SimpleGrid {...gridTwoColumnStyle}>
            {/* Sales Discount Rate */}
            <FormControl isInvalid={errors.sales_discount_rate}>
                <FormLabel {...labelStyles}>Sales Discount Rate</FormLabel>
                <NumberInput
                    name="sales_discount_rate"
                    min={0}
                    max={99.99}
                    precision={2}
                    value={formData.sales_discount_rate || ""}
                    {...inputStyles}
                    onChange={(valueString) =>
                        handleChange({
                            target: {
                                name: "sales_discount_rate",
                                value: valueString,
                            },
                        })
                    }
                >
                    <NumberInputField placeholder="0.00" {...inputStyles} />
                </NumberInput>
                <FormErrorMessage>
                    {errors.sales_discount_rate}
                </FormErrorMessage>
            </FormControl>

            {/* Sales Discount Mode */}
            <FormControl isInvalid={errors.sales_discount_mode}>
                <FormLabel {...labelStyles}>Sales Discount Mode</FormLabel>
                <Select
                    name="sales_discount_mode"
                    value={formData.sales_discount_mode || "A"}
                    onChange={handleChange}
                    {...inputStyles}
                >
                    <option value="A">After-Tax</option>
                    <option value="B">Before-Tax</option>
                </Select>
                <FormErrorMessage>
                    {errors.sales_discount_mode}
                </FormErrorMessage>
            </FormControl>
        </SimpleGrid>
    </>
);

export default DiscountInfo;
