import React, { useState, useRef } from "react";
import { Box, Text, Heading, useToast } from "@chakra-ui/react";
import ManufacturerForm from "./ManufacturerForm";
import { checkManufacturerDuplicate } from "../../../../api/manufacturerApi";
import axios from "axios";

import {
  containerBoxStyle,
  containerHeaderBoxStyle,
  containerHeadingStyle,
  containerSubTextStyle,
} from "./Style";

const AddManufacturer = () => {
  const toast = useToast();

  // Form state
  const [form, setForm] = useState({
    mfg_name: "",
    mfg_short: "",
    contact_person: "",
    contact_phone: "",
    contact_email: "",
    mr_name: "",
    mr_phone: "",
    mfg_address: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    gst_number: "",
    drug_license_no: "",
    pan_number: "",
    purchase_discount_rate: "",
    purchase_discount_mode: "percentage",
    sales_discount_rate: "",
    sales_discount_mode: "percentage",
    is_active: true,
    remarks: "",
  });

  // Field errors
  const [errors, setErrors] = useState({});

  // Debounce timers for live duplicate check
  const debounceTimers = useRef({});

  // Handle input change + live duplicate check
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Auto-uppercase for GST / PAN / Drug License
    if (["gst_number", "pan_number", "drug_license_no"].includes(name)) {
      value = value.toUpperCase();
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    const duplicateFields = [
      "mfg_name",
      "mfg_short",
      "gst_number",
      "pan_number",
      "drug_license_no",
    ];

    if (!duplicateFields.includes(name)) return;

    // Clear previous timer
    if (debounceTimers.current[name]) clearTimeout(debounceTimers.current[name]);

    // Debounce duplicate check
    debounceTimers.current[name] = setTimeout(async () => {
      try {
        const res = await checkManufacturerDuplicate(name, value);
        if (res.data.is_duplicate) {
          setErrors((prev) => ({
            ...prev,
            [name]: `${name.replace("_", " ")} already exists`,
          }));
        } else {
          setErrors((prev) => ({ ...prev, [name]: "" }));
        }
      } catch (err) {
        console.error("Duplicate check failed:", err);
      }
    }, 500); // 500ms debounce
  };

  // Reset form
  const resetForm = () => {
    setForm({
      mfg_name: "",
      mfg_short: "",
      contact_person: "",
      contact_phone: "",
      contact_email: "",
      mr_name: "",
      mr_phone: "",
      mfg_address: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
      gst_number: "",
      drug_license_no: "",
      pan_number: "",
      purchase_discount_rate: "",
      purchase_discount_mode: "percentage",
      sales_discount_rate: "",
      sales_discount_mode: "percentage",
      is_active: true,
      remarks: "",
    });
    setErrors({});
  };

  // Submit form with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mandatory fields
    const requiredFields = [
      "mfg_name",
      "mfg_short",
      "contact_person",
      "contact_phone",
      "contact_email",
      "gst_number",
      "drug_license_no",
      "pan_number",
    ];

    let hasError = false;
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!form[field] || form[field].toString().trim() === "") {
        newErrors[field] = `${field.replace("_", " ")} is required`;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      toast({
        title: "Please fill all mandatory fields",
        status: "error",
        isClosable: true,
      });
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/manufacturers/", form, {
        headers: { "Content-Type": "application/json" },
      });

      toast({
        title: "Manufacturer added successfully",
        status: "success",
        isClosable: true,
      });

      resetForm();
    } catch (error) {
      const apiErrors = error.response?.data;
      if (apiErrors && typeof apiErrors === "object") {
        setErrors(apiErrors);
        toast({
          title: "Duplicate entry found",
          description: "Please fix highlighted fields",
          status: "warning",
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to save manufacturer",
          status: "error",
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box {...containerBoxStyle}>
      <Box {...containerHeaderBoxStyle}>
        <Heading {...containerHeadingStyle}>Add Manufacturer</Heading>
        <Text {...containerSubTextStyle}>
          Fill in the details below to add a new manufacturer.
        </Text>
      </Box>

      <ManufacturerForm
        form={form}
        errors={errors}
        handleChange={handleChange} // live duplicate checking
        handleSubmit={handleSubmit}
        resetForm={resetForm}
      />
    </Box>
  );
};

export default AddManufacturer;
