// VendorForm.js
import React from "react";
import BasicInfo from "./FormSections/BasicInfo";
import TaxInfo from "./FormSections/TaxInfo";
import AddressInfo from "./FormSections/AddressInfo";

const VendorForm = ({ vendor, handleChange }) => {
    return (
        <>
            {/* Each section will use shared styles from Style.js */}
            <BasicInfo vendor={vendor} handleChange={handleChange} />
            <TaxInfo vendor={vendor} handleChange={handleChange} />
            <AddressInfo vendor={vendor} handleChange={handleChange} />
        </>
    );
};

export default VendorForm;
