// src/Components/Master/Product/ProductList/SelectManufacturer.js
import React from "react";
import { Box } from "@chakra-ui/react";
import { Select } from "chakra-react-select"; // ✅ FIXED default import

import { selectBoxStyle, selectStyles } from "./Style";

const SelectManufacturer = ({
    manufacturerOptions,
    selectedManufacturer,
    setSelectedManufacturer,
    placeholder = "Select Manufacturer",
    isClearable = true,
}) => {
    return (
        <Box {...selectBoxStyle}>
            <Select
                options={manufacturerOptions}
                value={selectedManufacturer}
                onChange={setSelectedManufacturer}
                placeholder={placeholder}
                isClearable={isClearable}
                chakraStyles={selectStyles}
            />
        </Box>
    );
};

export default SelectManufacturer;
