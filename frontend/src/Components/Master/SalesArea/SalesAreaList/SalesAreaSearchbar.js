import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import {
    searchInputGroupStyle,
    searchInputLeftIconStyle,
    searchInputStyle,
} from "./Style";

const SalesAreaSearchbar = ({ value, onChange, placeholder = "Search Sales Area" }) => {
    return (
        <InputGroup {...searchInputGroupStyle}>
            <InputLeftElement {...searchInputLeftIconStyle}>
                <SearchIcon />
            </InputLeftElement>
            <Input
                {...searchInputStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputGroup>
    );
};

export default SalesAreaSearchbar;
