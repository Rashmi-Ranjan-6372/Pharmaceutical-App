import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Button, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import ManufacturerSearchbar from "./ManufacturerSearchbar";
import ManufacturerFilter from "./ManufacturerFilter";
import ManufacturerTable from "./ManufacturerTable";
import ManufacturerModal from "./ManufacturerModal";

import { getManufacturers, deleteManufacturer } from "../../../../api/manufacturerApi";

import { listContainer, listTopText, addButtonStyle } from "./Style";

const ManufacturerList = () => {
  const toast = useToast();

  const [manufacturers, setManufacturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ status: "", sort: "A-Z" });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view"); // view | edit
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  const fetchManufacturers = async () => {
    try {
      setLoading(true);
      const res = await getManufacturers();
      setManufacturers(res.data);
    } catch {
      toast({
        title: "Failed to load manufacturers",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManufacturers();
  }, []);

  const handleView = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setModalMode("view");
    setIsModalOpen(true);
  };

  const handleEdit = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedManufacturer(null);
  };

  const handleDelete = async (mfg_code) => {
    if (!window.confirm("Delete this manufacturer?")) return;

    try {
      await deleteManufacturer(mfg_code);
      toast({
        title: "Deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      fetchManufacturers();
    } catch {
      toast({
        title: "Delete failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // ---------------- FILTERING LOGIC ----------------
  let filtered = [...manufacturers];

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (m) =>
        m.mfg_name?.toLowerCase().includes(q) ||
        m.mr_name?.toLowerCase().includes(q)
    );
  }

  if (filter.status !== "") {
    filtered = filtered.filter((m) => String(m.is_active) === filter.status);
  }

  filtered.sort((a, b) =>
    filter.sort === "A-Z"
      ? a.mfg_name.localeCompare(b.mfg_name)
      : b.mfg_name.localeCompare(a.mfg_name)
  );

  return (
    <Box {...listContainer}>
      <Text {...listTopText}>
        You have total <b>{manufacturers.length}</b> Manufacturer(s)
      </Text>

      <Flex mb={3} justify="space-between" align="center">
        <Flex gap={3}>
          <ManufacturerSearchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ManufacturerFilter filter={filter} setFilter={setFilter} />
        </Flex>

        {/* Add Manufacturer button opens separate form/page */}
        <Button {...addButtonStyle} leftIcon={<AddIcon boxSize={3} />}>
          Add Manufacturer
        </Button>
      </Flex>

      <ManufacturerTable
        manufacturers={filtered}
        searchQuery={searchQuery}
        isLoading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal for view/edit only */}
      <ManufacturerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
        manufacturer={selectedManufacturer}
        onSuccess={fetchManufacturers}
      />
    </Box>
  );
};

export default ManufacturerList;
