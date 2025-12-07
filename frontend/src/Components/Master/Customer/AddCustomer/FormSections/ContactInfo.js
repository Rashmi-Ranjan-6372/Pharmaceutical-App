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
    sectionHeadingStyle,
    sectionDividerStyle,
    gridThreeColumnStyle,
    inputStyles,
    labelStyles,
} from "../Style";

const ContactInfo = ({ formData, handleChange }) => {
    return (
        <Box bg="transparent">
            <Heading {...sectionHeadingStyle}>Contact Information</Heading>
            <Divider {...sectionDividerStyle} />

            <SimpleGrid {...gridThreeColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Contact Person</FormLabel>
                    <Input
                        {...inputStyles}
                        name="contact_person"
                        value={formData.contact_person}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Telephone No</FormLabel>
                    <Input
                        {...inputStyles}
                        name="telephone_no"
                        value={formData.telephone_no}
                        onChange={handleChange}
                        placeholder="e.g. +1 234 567 8900"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel {...labelStyles}>Email</FormLabel>
                    <Input
                        {...inputStyles}
                        type="email"
                        name="e_mail"
                        value={formData.e_mail}
                        onChange={handleChange}
                        placeholder="e.g. john.doe@example.com"
                    />
                </FormControl>
            </SimpleGrid>

            <FormControl mt={2}>
                <FormLabel {...labelStyles}>Website</FormLabel>
                <Input
                    {...inputStyles}
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="e.g. www.example.com"
                />
            </FormControl>
        </Box>
    );
};

export default ContactInfo;
