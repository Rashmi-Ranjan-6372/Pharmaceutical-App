// Section heading and dividers
export const sectionHeadingStyle = {
    fontSize: "xs",
    color: "black",
    mb: 1.5,
};

export const sectionDividerStyle = {
    mb: 1.5,
};

//  Grid layouts
export const gridTwoColumnStyle = {
    columns: { base: 1, md: 2 },
    spacing: 4,
};

export const gridThreeColumnStyle = {
    columns: { base: 1, md: 3 },
    spacing: 3,
};

//  Form controls (inputs and labels)
export const inputStyles = {
    size: "sm",
    fontSize: "xs",
    bg: "white",
    borderColor: "gray.300",
    _hover: { borderColor: "black.300" },
    focusBorderColor: "green.400"
};

export const labelStyles = {
    fontSize: "xs",
    fontWeight: "semibold",
    color: "gray.700",
};

export const checkboxStyle = {
    mt: 2,
    size: "sm",
    fontSize: "xs",
};

//  Form container and buttons
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

//  AddCustomer container styles (for outer box & header)
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
