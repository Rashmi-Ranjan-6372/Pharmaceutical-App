// src/Components/Master/Product/ProductList/ProductFilter.js
import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    Checkbox,
    Stack,
    Text,
    Divider,
    Flex,
    CloseButton,
    Portal,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsFilter } from "react-icons/bs";

// ✅ Import all styles from Style.js
import {
    menuButtonStyle,
    menuListStyle,
    closeButtonStyle,
    sectionTextStyle,
    filterOptionsStackStyle,
    resetButtonStyle,
    applyButtonStyle,
} from "./Style"; // adjust path if needed

const ProductFilter = ({
    isFilterMenuOpen = false,
    setIsFilterMenuOpen = () => { },
    sortOrder = "",
    setSortOrder = () => { },
    selectedCategories = [],
    setSelectedCategories = () => { },
    selectedStatuses = [],
    setSelectedStatuses = () => { },
    tempSortOrder = "",
    setTempSortOrder = () => { },
    tempCategories = [],
    setTempCategories = () => { },
    tempStatuses = [],
    setTempStatuses = () => { },
}) => {
    const toggleTempCategory = (category) => {
        setTempCategories((prev = []) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const toggleTempStatus = (status) => {
        setTempStatuses((prev = []) =>
            prev.includes(status)
                ? prev.filter((s) => s !== status)
                : [...prev, status]
        );
    };

    const applyFilters = () => {
        setSortOrder(tempSortOrder || "");
        setSelectedCategories(tempCategories || []);
        setSelectedStatuses(tempStatuses || []);
        setIsFilterMenuOpen(false);
    };

    const resetFilters = () => {
        setTempSortOrder("");
        setTempCategories([]);
        setTempStatuses([]);
    };

    return (
        <Menu isOpen={isFilterMenuOpen} closeOnSelect={false}>
            <MenuButton
                as={Button}
                leftIcon={<BsFilter />}
                rightIcon={<ChevronDownIcon />}
                {...menuButtonStyle}
                onClick={() => {
                    setTempSortOrder(sortOrder || "");
                    setTempCategories(selectedCategories || []);
                    setTempStatuses(selectedStatuses || []);
                    setIsFilterMenuOpen(!isFilterMenuOpen);
                }}
            >
                Filter
            </MenuButton>

            <Portal>
                <MenuList
                    {...menuListStyle}
                    fontSize="sm"
                    position="relative"
                    p={3}
                    minW="240px"
                >
                    {/* Close button */}
                    <Flex justify="flex-end" mb={2}>
                        <CloseButton
                            {...closeButtonStyle}
                            onClick={() => setIsFilterMenuOpen(false)}
                        />
                    </Flex>

                    {/* Sort Section */}
                    <Text {...sectionTextStyle} fontWeight="bold">
                        Sort
                    </Text>
                    <Stack {...filterOptionsStackStyle} mb={3}>
                        <Checkbox
                            size="sm"
                            isChecked={tempSortOrder === "A-Z"}
                            onChange={() =>
                                setTempSortOrder(
                                    tempSortOrder === "A-Z" ? "" : "A-Z"
                                )
                            }
                        >
                            A-Z
                        </Checkbox>
                        <Checkbox
                            size="sm"
                            isChecked={tempSortOrder === "Z-A"}
                            onChange={() =>
                                setTempSortOrder(
                                    tempSortOrder === "Z-A" ? "" : "Z-A"
                                )
                            }
                        >
                            Z-A
                        </Checkbox>
                    </Stack>

                    {/* Category Section */}
                    <Text {...sectionTextStyle} fontWeight="bold">
                        Category
                    </Text>
                    <Stack {...filterOptionsStackStyle} mb={3}>
                        {["Tablet", "Syrup", "Vitamin", "Inhaler"].map((cat) => (
                            <Checkbox
                                key={cat}
                                size="sm"
                                isChecked={tempCategories.includes(cat)}
                                onChange={() => toggleTempCategory(cat)}
                            >
                                {cat}
                            </Checkbox>
                        ))}
                    </Stack>

                    {/* Status Section */}
                    <Text {...sectionTextStyle} fontWeight="bold">
                        Status
                    </Text>
                    <Stack {...filterOptionsStackStyle} mb={3}>
                        {["Available", "Low"].map((status) => (
                            <Checkbox
                                key={status}
                                size="sm"
                                isChecked={tempStatuses.includes(status)}
                                onChange={() => toggleTempStatus(status)}
                            >
                                {status}
                            </Checkbox>
                        ))}
                    </Stack>

                    <Divider my={3} />

                    {/* Action Buttons */}
                    <Flex justify="space-between" gap={2}>
                        <Button {...resetButtonStyle} onClick={resetFilters}>
                            Reset
                        </Button>
                        <Button {...applyButtonStyle} onClick={applyFilters}>
                            Apply
                        </Button>
                    </Flex>
                </MenuList>
            </Portal>
        </Menu>
    );
};

export default ProductFilter;
