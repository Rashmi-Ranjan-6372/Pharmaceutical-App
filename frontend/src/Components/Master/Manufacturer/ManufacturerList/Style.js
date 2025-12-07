// src/Components/Master/Manufacturer/ManufacturerList/Style.js
import React from "react";

// ---------------- Toolbar styles ----------------
export const searchInputGroupStyle = { maxW: "250px", size: "sm" };
export const searchInputLeftIconStyle = { pointerEvents: "none", color: "green.400" };
export const searchInputStyle = {
    borderColor: "gray.300",
    bg: "white",
    placeholder: "Search",
    focusBorderColor: "green.400"
};

// ---------------- Filter styles ----------------
export const menuButtonStyle = { size: "sm", ml: 2, colorScheme: "blue", borderRadius: "xs" };
export const menuListStyle = { minW: "220px", p: 2 };

export const filterCloseIconContainerStyle = {
    w: "100%",
    textAlign: "right"
};

export const closeButtonStyle = {
    size: "xs",
    variant: "ghost",
    mr: 1,
    mt: 1
};

export const sectionTextStyle = { fontSize: "xs", mb: 1 };
export const selectStyle = { size: "xs" };
export const selectSpacingStyle = { size: "xs", mb: 1 };

export const filterOptionsStackStyle = {
    align: "start",
    spacing: 2
};

export const actionButtonStyle = { size: "xs", flex: 1 };
export const resetButtonStyle = { ...actionButtonStyle, colorScheme: "red" };
export const applyButtonStyle = { ...actionButtonStyle, colorScheme: "blue" };

// ---------------- List container styles ----------------
export const listContainer = {
    width: "100%",
    p: 3,
    bg: "white",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "xs",
    fontSize: "sm"
};

export const listTopText = {
    fontSize: "sm",
    mb: 2,
    color: "gray.600"
};

export const addButtonStyle = { colorScheme: "green", size: "sm", borderRadius: "xs" };

// ---------------- Table styles ----------------
export const tableContainerStyle = {
    width: "100%",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "xs"
};

export const tableStyle = {
    size: "sm",
    variant: "simple",
    sx: {
        "tbody tr:nth-of-type(even)": { bg: "gray.50" },
        "tbody tr:hover": { bg: "green.50", transition: "0.2s" },
        "tbody tr": { height: "28px" },
        "td, th": { py: 1, textAlign: "left" }
    }
};

export const theadStyle = { bg: "gray.100" };
export const trStyle = { height: "28px" };
export const tdStyle = { px: 2, textAlign: "left" };
export const thStyle = { px: 2, textAlign: "left" };

export const glCodeStyle = {
    color: "green.500",
    fontWeight: "semibold"
};

export const tableActionButtonStyle = {
    variant: "ghost",
    size: "sm",
    h: 6,
    w: 6
};

export const statusActiveStyle = {
    fontWeight: "bold",
    color: "green.500"
};

export const statusInactiveStyle = {
    fontWeight: "bold",
    color: "red.500"
};

// ---------------- Action Menu styles ----------------
export const actionMenuButtonStyle = {
    size: "sm",
    variant: "ghost",
    p: 0
};

export const actionMenuItemStyle = {
    fontSize: "sm",
    px: 2,
    py: 1
};

// ---------------- Filter Button Group ----------------
export const filterButtonGroupStyle = {
    spacing: 2,
    pt: 2,
    w: "100%"
};
