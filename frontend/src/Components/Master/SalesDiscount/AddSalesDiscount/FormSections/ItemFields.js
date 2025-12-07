import React from "react";
import {
    FormControl,
    FormLabel,
    Select as ChakraSelect,
    Text,
    Divider,
    SimpleGrid,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import {
    sectionHeadingStyle,
    sectionDividerStyle,
    gridTwoColumnStyle,
    labelStyles,
    inputStyles,
} from "../Style";

const ItemFields = ({
    itemType,
    setItemType,
    itemCode,
    setItemCode,
    itemOptions = [],
}) => {
    return (
        <>
            {/* Section Header */}
            <Text {...sectionHeadingStyle}>Item Information</Text>
            <Divider {...sectionDividerStyle} />

            {/* Form Fields in Grid Layout */}
            <SimpleGrid {...gridTwoColumnStyle}>
                {/* Item Type Dropdown */}
                <FormControl>
                    <FormLabel {...labelStyles}>Item Type</FormLabel>
                    <ChakraSelect
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                        placeholder="Select Item Type"
                        {...inputStyles}
                    >
                        <option value="M">Manufacturer</option>
                        <option value="P">Product</option>
                    </ChakraSelect>
                </FormControl>

                {/* Item Name (Searchable & Selectable) */}
                <FormControl>
                    <FormLabel {...labelStyles}>Item Name</FormLabel>
                    <Select
                        placeholder="Select Item"
                        options={itemOptions}
                        {...inputStyles}
                        value={itemOptions.find(
                            (option) => option.value === itemCode
                        ) || null}
                        onChange={(selectedOption) =>
                            setItemCode(selectedOption ? selectedOption.value : "")
                        }
                        isSearchable
                        chakraStyles={{
                            container: (provided) => ({
                                ...provided,
                            }),
                        }}
                    />
                </FormControl>
            </SimpleGrid>
        </>
    );
};

export default ItemFields;
