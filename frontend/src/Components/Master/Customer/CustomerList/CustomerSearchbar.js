// src/Components/Master/Manufacturer/ManufacturerList/ManufacturerSearchbar.js
import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { searchInputGroupStyle, searchInputLeftIconStyle, searchInputStyle } from "./Style";

const ManufacturerSearchbar = ({ searchQuery, setSearchQuery }) => (
    <InputGroup {...searchInputGroupStyle}>
        <InputLeftElement pointerEvents="none">
            <SearchIcon {...searchInputLeftIconStyle} />
        </InputLeftElement>
        <Input
            {...searchInputStyle}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Customer"
        />
    </InputGroup>
);

export default ManufacturerSearchbar;
