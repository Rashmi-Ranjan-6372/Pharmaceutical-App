// src/Components/Master/Manufacturer/ManufacturerList/ManufacturerFilter.js
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
import { BsFilter } from "react-icons/bs";

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

// ✅ Default filter values
const defaultFilter = {
    status: "",
    sort: "A-Z"
};

const ManufacturerFilter = ({ filter = defaultFilter, setFilter }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Local draft state (start with filter or defaults)
    const [draftFilter, setDraftFilter] = React.useState(filter || defaultFilter);

    const handleChange = (e) => {
        setDraftFilter({ ...draftFilter, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setDraftFilter(defaultFilter);
        setFilter?.(defaultFilter); // safe call
        setMenuOpen(false);
    };

    const handleApply = () => {
        setFilter?.(draftFilter); // safe call
        setMenuOpen(false);
    };

    const handleOpen = () => {
        setDraftFilter(filter || defaultFilter);
        setMenuOpen(true);
    };

    return (
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={<BsFilter />}
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
                    {/* Status */}
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

export default ManufacturerFilter;
