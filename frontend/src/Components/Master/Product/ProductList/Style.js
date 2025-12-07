// ---------------- Toolbar styles ----------------
export const toolbarFlexStyle = {
    gap: 3,
    mb: 3,
    align: "center",
    wrap: "nowrap",
    justify: "flex-start",
};

// Consistent box widths for controls
export const selectBoxStyle = { w: "220px" };
export const searchBoxStyle = { w: "250px" };
export const filterBoxStyle = {}; // no fixed width

// ---------------- Search Input styles ----------------
export const searchInputGroupStyle = { maxW: "250px", size: "sm" };

export const searchInputLeftIconStyle = {
    pointerEvents: "none",
    color: "green.400",
};

export const searchInputStyle = {
    h: "32px",
    fontSize: "sm",
    borderColor: "gray.300",
    bg: "white",
    borderRadius: "xs",
    px: 2,
    _hover: { borderColor: "gray.400" },
    focusBorderColor: "green.400",
    _placeholder: { color: "gray.400", fontSize: "sm" },
};

// ---------------- Filter styles ----------------
export const menuButtonStyle = {
    size: "sm",
    ml: 2,
    colorScheme: "blue",
    borderRadius: "xs",
    h: "32px",
};
export const menuListStyle = { minW: "220px", p: 2 };
export const filterCloseIconContainerStyle = { w: "100%", textAlign: "right" };
export const closeButtonStyle = { size: "xs", variant: "ghost", mr: 1, mt: 1 };
export const sectionTextStyle = { fontSize: "xs", mb: 1 };
export const selectStyle = { size: "xs" };
export const selectSpacingStyle = { size: "xs", mb: 1 };
export const filterOptionsStackStyle = { align: "start", spacing: 2 };
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
    fontSize: "sm",
};
export const listTopText = { fontSize: "sm", mb: 2, color: "gray.600" };
export const addButtonStyle = {
    colorScheme: "green",
    size: "sm",
    borderRadius: "xs",
    h: "32px",
};

// ---------------- Table styles ----------------
export const tableContainerStyle = {
    width: "100%",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "xs",
};
export const tableStyle = {
    size: "sm",
    variant: "simple",
    sx: {
        "tbody tr:nth-of-type(even)": { bg: "gray.50" },
        "tbody tr:hover": { bg: "green.50", transition: "0.2s" },
        "tbody tr": { height: "28px" },
        "td, th": { py: 1, textAlign: "left" },
    },
};
export const theadStyle = { bg: "gray.100" };
export const trStyle = { height: "28px" };
export const tdStyle = { px: 2, textAlign: "left" };
export const thStyle = { px: 2, textAlign: "left" };
export const idStyle = { color: "green.500", fontWeight: "semibold" };
export const tableActionButtonStyle = { variant: "ghost", size: "sm", h: 6, w: 6 };
export const statusActiveStyle = { fontWeight: "bold", color: "green.500" };
export const statusInactiveStyle = { fontWeight: "bold", color: "red.500" };

// ---------------- Action Menu styles ----------------
export const actionMenuButtonStyle = { size: "sm", variant: "ghost", p: 0, borderRadius: "sm" };
export const actionMenuItemStyle = { fontSize: "sm", px: 2, py: 1 };

// ---------------- Table-specific styles ----------------
export const tableVariantContainer = {
    width: "100%",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "xs",
};
export const tableVariantStyle = {
    size: "sm",
    variant: "simple",
    sx: {
        "tbody tr:nth-of-type(even)": { bg: "gray.50" },
        "tbody tr:hover": { bg: "green.50", transition: "0.2s" },
        "tbody tr": { height: "28px" },
        "td, th": { py: 1, textAlign: "left" },
    },
};
export const tableVariantThead = { bg: "gray.100" };
export const tableVariantTh = { fontSize: "xs", px: 2, textAlign: "left" };
export const tableVariantTd = { fontSize: "sm", px: 2, textAlign: "left" };
export const priceCellStyle = { color: "green.500", fontWeight: "bold" };
export const actionCellStyle = { textAlign: "center" };
export const actionMenuListStyle = { fontSize: "sm" };
export const noDataStyle = {
    colSpan: 11,
    textAlign: "center",
    py: 5,
    fontSize: "sm",
    color: "gray.500",
};

// ---------------- Select styles (chakra-react-select) ----------------
export const selectStyles = {
    container: (p) => ({ ...p, width: "100%" }),
    control: (p, state) => ({
        ...p,
        minHeight: "32px",
        height: "32px",
        fontSize: "sm",
        borderColor: state.isFocused ? "#38A169" : "gray.300",
        backgroundColor: "white",
        borderRadius: "xs",
        boxShadow: state.isFocused ? "0 0 0 1px #38A169 !important" : "none",
        outline: "none !important",
        "&:hover": { borderColor: state.isFocused ? "#2F855A" : "gray.400" },
    }),
    valueContainer: (p) => ({ ...p, height: "32px", padding: "0 8px" }),
    input: (p) => ({ ...p, margin: 0, padding: 0, fontSize: "sm", color: "inherit" }),
    placeholder: (p) => ({ ...p, color: "gray.400", fontSize: "sm" }),
    indicatorsContainer: (p) => ({ ...p, height: "32px" }),
    menu: (p) => ({ ...p, width: "100%", fontSize: "sm" }),
    option: (p, state) => ({
        ...p,
        fontSize: "sm",
        backgroundColor: state.isFocused ? "green.50" : "white",
        color: "black",
    }),
};

// ---------------- Filter Button Group ----------------
export const filterButtonGroupStyle = { spacing: 2, pt: 2, w: "100%" };
