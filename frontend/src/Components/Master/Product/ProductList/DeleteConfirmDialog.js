// src/Components/Master/Product/ProductList/DeleteConfirmDialog.js
import React from "react";
import {
    AlertDialog, AlertDialogOverlay, AlertDialogContent,
    AlertDialogHeader, AlertDialogBody, AlertDialogFooter,
    Button, Flex, CloseButton
} from "@chakra-ui/react";

const DeleteConfirmDialog = ({ isOpen, cancelRef, onClose, confirmDelete, selectedItem }) => {
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <Flex align="center" justify="space-between" p={2} borderBottom="1px solid #eee">
                        <AlertDialogHeader fontSize="md" fontWeight="bold">Confirm Deletion</AlertDialogHeader>
                        <CloseButton onClick={onClose} />
                    </Flex>
                    <AlertDialogBody fontSize="sm">
                        Are you sure you want to delete <b>{selectedItem?.name}</b>?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose} size="sm">Cancel</Button>
                        <Button colorScheme="red" onClick={confirmDelete} ml={3} size="sm">Yes, Delete it</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default DeleteConfirmDialog;
