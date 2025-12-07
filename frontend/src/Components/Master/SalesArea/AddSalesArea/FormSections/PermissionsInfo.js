import React from "react";
import {
    FormControl,
    FormLabel,
    Select,
    SimpleGrid,
    Text,
    Divider,
    FormErrorMessage,
} from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    labelStyles,
    inputStyles,
    gridTwoColumnStyle,
} from "../Style";

const PermissionsInfo = ({ formData, handleChange, errors }) => (
    <>
        <Text {...sectionHeadingStyle}>Permissions</Text>
        <Divider {...sectionDividerStyle} />

        <SimpleGrid {...gridTwoColumnStyle}>
            {/* Modify Allowed */}
            <FormControl isRequired isInvalid={!!errors.modify_allowed}>
                <FormLabel {...labelStyles}>Modify Allowed</FormLabel>
                <Select
                    name="modify_allowed"
                    value={formData.modify_allowed || "Y"}
                    onChange={handleChange}
                    {...inputStyles}
                >
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </Select>
                <FormErrorMessage>
                    {errors.modify_allowed}
                </FormErrorMessage>
            </FormControl>

            {/* Deleted Status */}
            <FormControl isRequired isInvalid={!!errors.del}>
                <FormLabel {...labelStyles}>Status</FormLabel>
                <Select
                    name="del"
                    value={formData.del || " "}
                    onChange={handleChange}
                    {...inputStyles}
                >
                    <option value=" ">Active</option>
                    <option value="*">Inactive</option>
                </Select>
                <FormErrorMessage>{errors.del}</FormErrorMessage>
            </FormControl>
        </SimpleGrid>
    </>
);

export default PermissionsInfo;
