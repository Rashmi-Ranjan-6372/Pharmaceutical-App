import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Import shared styles
import {
    searchInputGroupStyle,
    searchInputLeftIconStyle,
    searchInputStyle,
} from "./Style";

const VendorSearchbar = ({ searchQuery, setSearchQuery }) => {
    return (
        <InputGroup {...searchInputGroupStyle}>
            <InputLeftElement {...searchInputLeftIconStyle}>
                <SearchIcon />
            </InputLeftElement>
            <Input
                {...searchInputStyle}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Vendors..."
            />
        </InputGroup>
    );
};

export default VendorSearchbar;
