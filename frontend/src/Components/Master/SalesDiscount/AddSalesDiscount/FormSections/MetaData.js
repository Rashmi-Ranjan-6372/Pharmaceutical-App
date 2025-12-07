import React from "react";
import {
    FormControl,
    FormLabel,
    Select,
    Text,
    Divider,
    SimpleGrid,
} from "@chakra-ui/react";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    labelStyles,
    inputStyles,
    gridTwoColumnStyle,
} from "../Style";

const MetaData = ({ lastUpdate, deleted, setDeleted }) => {
    return (
        <>
            <Text {...sectionHeadingStyle}>Meta Information</Text>
            <Divider {...sectionDividerStyle} />
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Status</FormLabel>
                    <Select
                        value={deleted}
                        onChange={(e) => setDeleted(e.target.value)}
                        {...inputStyles}
                    >
                        <option value=" ">Active</option>
                        <option value="*">Inactive</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
        </>
    );
};

export default MetaData;
