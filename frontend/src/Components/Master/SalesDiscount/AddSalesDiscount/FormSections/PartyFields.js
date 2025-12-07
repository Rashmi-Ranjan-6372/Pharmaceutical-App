import React from "react";
import {
    FormControl,
    FormLabel,
    Select as ChakraSelect,
    Text,
    Divider,
    SimpleGrid,
} from "@chakra-ui/react";
import { CreatableSelect, Select } from "chakra-react-select";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    labelStyles,
    inputStyles,
} from "../Style";

const PartyFields = ({
    partyType,
    setPartyType,
    partyCode,
    setPartyCode,
    partyOptions = [],
}) => {
    return (
        <>
            <Text {...sectionHeadingStyle}>Party Information</Text>
            <Divider {...sectionDividerStyle} />
            <SimpleGrid {...gridTwoColumnStyle}>
                <FormControl>
                    <FormLabel {...labelStyles}>Party Type</FormLabel>
                    <ChakraSelect
                        value={partyType}
                        onChange={(e) => setPartyType(e.target.value)}
                        placeholder="Select Party Type"
                        {...inputStyles}
                    >
                        <option value="A">Area</option>
                        <option value="C">Sundry Creditors</option>
                        <option value="D">Sundry Debtors</option>
                    </ChakraSelect>
                </FormControl>
                <FormControl>
                    <FormLabel {...labelStyles}>Party Name</FormLabel>
                    <Select
                        placeholder="Select Party"
                        options={partyOptions}
                        {...inputStyles}
                        value={
                            partyOptions.find(
                                (option) => option.value === partyCode
                            ) || null
                        }
                        onChange={(selectedOption) =>
                            setPartyCode(selectedOption ? selectedOption.value : "")
                        }
                        isSearchable
                        chakraStyles={{
                            container: (provided) => ({
                                ...provided,
                                ...inputStyles,
                            }),
                        }}
                    />
                </FormControl>
            </SimpleGrid>
        </>
    );
};

export default PartyFields;
