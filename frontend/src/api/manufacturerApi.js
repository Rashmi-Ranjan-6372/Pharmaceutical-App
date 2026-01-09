import axios from "axios";

/* ============================
   AXIOS INSTANCE
============================ */
const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

/* ============================
   CREATE MANUFACTURER
   POST /api/manufacturers/
============================ */
export const createManufacturer = async (data) => {
    try {
        return await API.post("manufacturers/", data);
    } catch (error) {
        throw error; // ⚠️ important for validation errors
    }
};

/* ============================
   LIST MANUFACTURERS
   GET /api/manufacturers/
============================ */
export const getManufacturers = () => {
    return API.get("manufacturers/");
};

/* ============================
   LIVE DUPLICATE CHECK (onBlur)
   GET /api/manufacturers/check-duplicate/
   params: field, value
============================ */
export const checkManufacturerDuplicate = async (field, value) => {
    try {
        return await API.get("manufacturers/check-duplicate/", {
            params: {
                field: field,
                value: value,
            },
        });
    } catch (error) {
        throw error;
    }
};

/* ============================
   GET SINGLE MANUFACTURER
   GET /api/manufacturers/<mfg_code>/
============================ */
export const getManufacturerByCode = (mfg_code) => {
    return API.get(`manufacturers/${mfg_code}/`);
};

/* ============================
   UPDATE MANUFACTURER
   PUT /api/manufacturers/<mfg_code>/
============================ */
export const updateManufacturer = (mfg_code, data) => {
    return API.put(`manufacturers/${mfg_code}/`, data);
};

/* ============================
   DELETE MANUFACTURER
   DELETE /api/manufacturers/<mfg_code>/
============================ */
export const deleteManufacturer = (mfg_code) => {
    return API.delete(`manufacturers/${mfg_code}/`);
};
