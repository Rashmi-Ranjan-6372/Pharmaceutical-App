import {
    Box,
    Divider,
    Heading,
    SimpleGrid,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

import {
    inputStyles,
    labelStyles,
    sectionHeadingStyle,
    sectionDividerStyle,
    gridThreeColumnStyle
} from "../Style";

const GeneralInfo = ({ formData, handleChange }) => {
    return (
        <Box>
            <Heading {...sectionHeadingStyle}>General Information</Heading>
            <Divider {...sectionDividerStyle} />
            <SimpleGrid {...gridThreeColumnStyle}>
                <FormControl isRequired>
                    <FormLabel {...labelStyles}>GL Code</FormLabel>
                    <Input
                        {...inputStyles}
                        name="gl_code"
                        type="number"
                        value={formData.gl_code}
                        onChange={handleChange}
                        placeholder="e.g. 1001"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Parent Code</FormLabel>
                    <Input
                        {...inputStyles}
                        name="parent_code"
                        value={formData.parent_code}
                        onChange={handleChange}
                        placeholder="e.g. PC202"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Company Code</FormLabel>
                    <Input
                        {...inputStyles}
                        name="comp_code"
                        value={formData.comp_code}
                        onChange={handleChange}
                        placeholder="e.g. 501"
                    />
                </FormControl>
            </SimpleGrid>
        </Box>
    );
};

export default GeneralInfo;
