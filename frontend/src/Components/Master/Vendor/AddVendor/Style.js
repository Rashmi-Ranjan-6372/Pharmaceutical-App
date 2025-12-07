// styles/Style.js

// Section heading and divider
export const sectionHeadingStyle = {
    fontSize: "xs",       // section title
    fontWeight: "bold",
    color: "black",
    mb: 3,
};

export const sectionDividerStyle = {
    mb: 5,
};

// Grid layouts
export const gridTwoColumnStyle = {
    columns: { base: 1, md: 2 },
    spacing: 5,
};

export const gridThreeColumnStyle = {
    columns: { base: 1, md: 3 },
    spacing: 5,
};

// Form labels and inputs
export const labelStyles = {
    fontSize: "xs",
    fontWeight: "semibold",
    mb: 1,
    color: "gray.700",
};

export const inputStyles = {
    size: "sm",
    bg: "white",
    borderRadius: "xs",
    borderColor: "gray.300",
    _hover: { borderColor: "gray.400" },
    focusBorderColor: "green.400",
    fontSize: "sm",
};

// Form container
export const formBoxStyle = {
    bg: "white",
    p: 4,
    borderRadius: "xs",
    boxShadow: "sm",
};

// AddVendor container & header styles
export const containerBoxStyle = {
    maxW: "1200px",
    w: "100%",
    mx: "auto",
    p: 4,
    bg: "white",
    borderRadius: "xs",
    border: "1px solid",
    borderColor: "gray.300",
};

export const containerHeaderBoxStyle = {
    textAlign: "center",
    mb: 6,
};

export const containerHeadingStyle = {
    size: "sm",
    fontWeight: "bold",
    mb: 1,
};

export const containerSubTextStyle = {
    fontSize: "xs",
    color: "gray.500",
};

// Buttons
export const formButtonResetStyle = {
    colorScheme: "red",
    size: "sm",
    px: 6,
    borderRadius: "xs",
};

export const formButtonSubmitStyle = {
    colorScheme: "green",
    size: "sm",
    px: 6,
    borderRadius: "xs",
    _hover: { transform: "scale(1.05)" },
};
