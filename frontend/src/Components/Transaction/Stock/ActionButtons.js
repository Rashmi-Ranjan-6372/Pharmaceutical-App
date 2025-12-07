// ActionButtons.js
import React from "react";
import { Flex, Button } from "@chakra-ui/react";

const ActionButtons = ({ handleReset }) => {
    return (
        <Flex justify="space-between">
            <Button colorScheme="red" size="sm" px={3} onClick={handleReset}>
                Reset
            </Button>
            <Button colorScheme="green" size="sm" px={3}>
                Save Voucher
            </Button>
        </Flex>
    );
};

export default ActionButtons;
