import {
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ManufacturerForm = ({ mode, manufacturer, onClose, onSuccess }) => {
  const isView = mode === "view";

  const [form, setForm] = useState({
    mfg_name: "",
    mfg_short: "",
    mr_name: "",
    mr_phone: "",
    city: "",
  });

  useEffect(() => {
    if (manufacturer) {
      setForm(manufacturer);
    }
  }, [manufacturer]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (mode === "edit") {
      // call update API here
    }
    onSuccess?.();
    onClose();
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={4}>
        <FormControl>
          <FormLabel>Manufacturer Name</FormLabel>
          <Input
            name="mfg_name"
            value={form.mfg_name}
            onChange={handleChange}
            isDisabled={isView}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Short Code</FormLabel>
          <Input
            name="mfg_short"
            value={form.mfg_short || ""}
            onChange={handleChange}
            isDisabled={isView}
          />
        </FormControl>

        <FormControl>
          <FormLabel>MR Name</FormLabel>
          <Input
            name="mr_name"
            value={form.mr_name || ""}
            onChange={handleChange}
            isDisabled={isView}
          />
        </FormControl>

        <FormControl>
          <FormLabel>MR Phone</FormLabel>
          <Input
            name="mr_phone"
            value={form.mr_phone || ""}
            onChange={handleChange}
            isDisabled={isView}
          />
        </FormControl>

        <FormControl>
          <FormLabel>City</FormLabel>
          <Input
            name="city"
            value={form.city || ""}
            onChange={handleChange}
            isDisabled={isView}
          />
        </FormControl>
      </SimpleGrid>

      {mode === "edit" && (
        <Button mt={6} colorScheme="blue" onClick={handleSubmit}>
          Update
        </Button>
      )}
    </>
  );
};

export default ManufacturerForm;
