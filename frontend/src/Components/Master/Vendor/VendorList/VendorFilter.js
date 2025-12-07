import React, { useState } from "react";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    VStack,
    Box,
    Text,
    Select,
    HStack,
    Flex,
    IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { BsFilter } from "react-icons/bs";

import {
    menuButtonStyle,
    menuListStyle,
    filterCloseIconContainerStyle,
    closeButtonStyle,
    sectionTextStyle,
    selectStyle,
    selectSpacingStyle,
    filterOptionsStackStyle,
    resetButtonStyle,
    applyButtonStyle,
} from "./Style";

const VendorFilter = ({ filter, setFilter }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [tempFilter, setTempFilter] = useState(filter);

    const handleApply = () => {
        setFilter(tempFilter);
        setIsFilterOpen(false);
    };

    const handleReset = () => {
        const reset = { status: "", sort: "A-Z" };
        setTempFilter(reset);
        setFilter(reset);
    };

    return (
        <Menu isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
            <MenuButton
                as={Button}
                {...menuButtonStyle}
                leftIcon={<BsFilter />}
                rightIcon={<ChevronDownIcon />}
                onClick={() => {
                    setTempFilter(filter);
                    setIsFilterOpen(!isFilterOpen);
                }}
            >
                Filter
            </MenuButton>

            <MenuList {...menuListStyle}>
                {/* ❌ Close Filter Button */}
                <Flex {...filterCloseIconContainerStyle}>
                    <IconButton
                        icon={<CloseIcon />}
                        {...closeButtonStyle}
                        onClick={() => setIsFilterOpen(false)}
                        aria-label="Close Filter"
                    />
                </Flex>

                {/* ✅ Filter Options */}
                <VStack {...filterOptionsStackStyle}>
                    {/* 🔹 Status Filter */}
                    <Box>
                        <Text {...sectionTextStyle}>Status</Text>
                        <Select
                            {...selectSpacingStyle}
                            placeholder="Select Status"
                            value={tempFilter.status}
                            onChange={(e) =>
                                setTempFilter({ ...tempFilter, status: e.target.value })
                            }
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Select>
                    </Box>

                    {/* 🔹 Sort Order */}
                    <Box>
                        <Text {...sectionTextStyle}>Sort</Text>
                        <Select
                            {...selectStyle}
                            value={tempFilter.sort}
                            onChange={(e) =>
                                setTempFilter({ ...tempFilter, sort: e.target.value })
                            }
                        >
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </Select>
                    </Box>

                    {/* 🔘 Action Buttons */}
                    <HStack mt={1} spacing={2}>
                        <Button {...resetButtonStyle} onClick={handleReset}>
                            Reset
                        </Button>
                        <Button {...applyButtonStyle} onClick={handleApply}>
                            Apply
                        </Button>
                    </HStack>
                </VStack>
            </MenuList>
        </Menu>
    );
};

export default VendorFilter;
