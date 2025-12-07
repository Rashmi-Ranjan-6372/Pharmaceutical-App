import React from "react";
import BasicInfo from "./FormSections/BasicInfo";
import DiscountInfo from "./FormSections/DiscountInfo";
import PermissionsInfo from "./FormSections/PermissionsInfo";

const SalesAreaForm = ({ formData, handleChange, errors, parents }) => {
    return (
        <>
            <BasicInfo
                formData={formData}
                handleChange={handleChange}
                parents={parents}
                errors={errors}
            />
            <DiscountInfo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
            />
            <PermissionsInfo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
            />
        </>
    );
};

export default SalesAreaForm;
