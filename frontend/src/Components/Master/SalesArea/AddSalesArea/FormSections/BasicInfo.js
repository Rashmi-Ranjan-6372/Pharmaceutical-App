import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    SimpleGrid,
    Divider,
    FormErrorMessage,
} from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    labelStyles,
    inputStyles,
    formErrorTextStyle,
} from "../Style";

const BasicInfo = ({ formData, handleChange, parents, errors = {} }) => {
    return (
        <>
            <Text {...sectionHeadingStyle}>Basic Information</Text>
            <Divider {...sectionDividerStyle} />

            <SimpleGrid {...gridTwoColumnStyle}>
                {/* Area Name */}
                <FormControl isRequired isInvalid={!!errors.area_name}>
                    <FormLabel {...labelStyles}>Area Name</FormLabel>
                    <Input
                        name="area_name"
                        value={formData.area_name || ""}
                        onChange={handleChange}
                        maxLength={50}
                        placeholder="Enter area name"
                        {...inputStyles}
                    />
                    {errors.area_name && (
                        <FormErrorMessage {...formErrorTextStyle}>
                            {errors.area_name}
                        </FormErrorMessage>
                    )}
                </FormControl>

                {/* Parent Area */}
                <FormControl isRequired isInvalid={!!errors.parent_code}>
                    <FormLabel {...labelStyles}>Parent Area</FormLabel>
                    <Select
                        name="parent_code"
                        value={formData.parent_code || ""}
                        onChange={handleChange}
                        {...inputStyles}
                    >
                        <option value="">Select Parent</option>
                        {parents.map((p) => (
                            <option key={p.area_code} value={p.area_code}>
                                {p.area_name}
                            </option>
                        ))}
                    </Select>
                    {errors.parent_code && (
                        <FormErrorMessage {...formErrorTextStyle}>
                            {errors.parent_code}
                        </FormErrorMessage>
                    )}
                </FormControl>
            </SimpleGrid>
        </>
    );
};

export default BasicInfo;
