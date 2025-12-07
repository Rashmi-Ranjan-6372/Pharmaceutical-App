import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
    searchInputGroupStyle,
    searchInputLeftIconStyle,
    searchInputStyle,
} from "./Style";

const ProductSearchbar = ({ search, setSearch }) => {
    return (
        <InputGroup {...searchInputGroupStyle}>
            <InputLeftElement {...searchInputLeftIconStyle}>
                <SearchIcon />
            </InputLeftElement>
            <Input
                {...searchInputStyle}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products..."
            />
        </InputGroup>
    );
};

export default ProductSearchbar;
