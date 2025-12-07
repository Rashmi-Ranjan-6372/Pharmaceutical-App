// src/Components/Master/Customer/CustomerList/CustomerFilter.js
import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    Select,
    VStack,
    Text,
    HStack,
    IconButton,
    Box
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { BsFilter } from "react-icons/bs";   // ✅ Import filter icon

import {
    menuButtonStyle,
    menuListStyle,
    sectionTextStyle,
    selectStyle,
    selectSpacingStyle,
    resetButtonStyle,
    applyButtonStyle,
    closeButtonStyle,
    filterCloseIconContainerStyle,
    filterOptionsStackStyle,
    filterButtonGroupStyle
} from "./Style";

const CustomerFilter = ({ filter, setFilter, areas = [] }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Local state for temporary filter before applying
    const [draftFilter, setDraftFilter] = React.useState(filter);

    const handleChange = (e) => {
        setDraftFilter({ ...draftFilter, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        const clearedFilter = {
            status: "",
            area: "",
            sort: "A-Z"
        };
        setDraftFilter(clearedFilter);
        setFilter(clearedFilter);
        setMenuOpen(false);
    };

    const handleApply = () => {
        setFilter(draftFilter);
        setMenuOpen(false);
    };

    const handleOpen = () => {
        setDraftFilter(filter);
        setMenuOpen(true);
    };

    return (
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={<BsFilter />}   // ✅ Added Filter icon
                {...menuButtonStyle}
                onClick={handleOpen}
            >
                Filter
            </MenuButton>

            <MenuList {...menuListStyle}>
                <Box {...filterCloseIconContainerStyle}>
                    <IconButton
                        icon={<CloseIcon fontSize="xs" />}
                        aria-label="Close Filter"
                        onClick={() => setMenuOpen(false)}
                        {...closeButtonStyle}
                    />
                </Box>

                <VStack {...filterOptionsStackStyle} spacing={3}>
                    {/* Status Filter */}
                    <Text {...sectionTextStyle}>Status</Text>
                    <Select
                        name="status"
                        value={draftFilter.status}
                        onChange={handleChange}
                        {...selectStyle}
                    >
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </Select>

                    {/* Area Filter */}
                    <Text {...sectionTextStyle}>Area</Text>
                    <Select
                        name="area"
                        value={draftFilter.area}
                        onChange={handleChange}
                        {...selectSpacingStyle}
                    >
                        <option value="">All</option>
                        {areas.map((a) => (
                            <option key={a} value={a}>
                                {a}
                            </option>
                        ))}
                    </Select>

                    {/* Sort */}
                    <Text {...sectionTextStyle}>Sort</Text>
                    <Select
                        name="sort"
                        value={draftFilter.sort}
                        onChange={handleChange}
                        {...selectSpacingStyle}
                    >
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </Select>

                    {/* Buttons */}
                    <HStack {...filterButtonGroupStyle}>
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

export default CustomerFilter;
