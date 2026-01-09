import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import ManufacturerForm from "./ManufacturerForm";

const ManufacturerModal = ({
  isOpen,
  onClose,
  mode,
  manufacturer,
  onSuccess,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "view" ? "View Manufacturer" : "Edit Manufacturer"}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ManufacturerForm
            mode={mode}
            manufacturer={manufacturer}
            onClose={onClose}
            onSuccess={onSuccess}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManufacturerModal;
