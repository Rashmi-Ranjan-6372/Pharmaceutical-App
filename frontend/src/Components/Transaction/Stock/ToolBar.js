// ToolBar.js
import React from "react";
import { Flex, Select, RadioGroup, Radio, HStack, Text } from "@chakra-ui/react";

const ToolBar = ({ voucherType, setVoucherType, mode, setMode, paymentMode, setPaymentMode, border }) => {
    return (
        <Flex
            mb={2}
            align="center"
            justify="space-between"
            p={1}
            borderBottom="1px solid"
            borderColor={border}
            fontSize="xs"
            wrap="wrap"
            gap={2}
        >
            <Select
                value={voucherType}
                onChange={(e) => setVoucherType(e.target.value)}
                size="xs"
                maxW="150px"
            >
                <option>Opening Stock</option>
                <option>Delivery Challan Receipt</option>
                <option>Purchase Receipt</option>
                <option>Purchase Return DR-Note</option>
                <option>Purchase Replacement</option>
                <option>Delivery Challan Issue</option>
                <option>Sales Issue</option>
                <option>Sales Return CR-note</option>
                <option>Sales Replacement</option>
                <option>Sample Receipt</option>
                <option>Sample issue</option>
                <option>Adjustment Plus</option>
                <option>Adjustment Minus</option>
                <option>Breakage Inhouse</option>
                <option>Breakage Receipt</option>
                <option>Breakage Issue</option>
                <option>Expiry Inhouse</option>
                <option>Expiry Receipt</option>
                <option>Expiry Issue</option>
                <option>Transfer IN</option>
                <option>Transfer Out</option>
            </Select>
            <RadioGroup onChange={setMode} value={mode}>
                <HStack spacing={3}>
                    <Radio value="Add" size="sm"><Text fontSize="xs">Add</Text></Radio>
                    <Radio value="Modify" size="sm"><Text fontSize="xs">Modify</Text></Radio>
                    <Radio value="Delete" size="sm"><Text fontSize="xs">Delete</Text></Radio>
                </HStack>
            </RadioGroup>

            <RadioGroup onChange={setPaymentMode} value={paymentMode}>
                <HStack spacing={3}>
                    <Radio value="Cash" size="sm"><Text fontSize="xs">Cash</Text></Radio>
                    <Radio value="Credit" size="sm"><Text fontSize="xs">Credit</Text></Radio>
                    <Radio value="None" size="sm"><Text fontSize="xs">None</Text></Radio>
                </HStack>
            </RadioGroup>
        </Flex>
    );
};

export default ToolBar;
