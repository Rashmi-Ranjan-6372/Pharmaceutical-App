import React from "react";
import {
    Flex,
    IconButton,
    InputGroup,
    InputLeftElement,
    Input,
    HStack,
} from "@chakra-ui/react";
import { FaSearch, FaBell, FaComments, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
    return (
        <Flex
            as="header"
            bg="white"
            p={4}
            align="center"
            justify="space-between"
            w="100%"
            position="sticky"
            top="0"
            zIndex="10"
            borderBottom="1px solid"
            borderColor="gray.200" // Clear visible bottom border
        >
            {/* Search Input */}
            <InputGroup maxW="400px">
                <InputLeftElement pointerEvents="none">
                    <FaSearch color="gray" />
                </InputLeftElement>
                <Input
                    type="text"
                    placeholder="Search anything"
                    borderRadius="md"
                    bg="#F8FAFC" // Same background as Sidebar
                    border="1px solid #E2E8F0"
                    _hover={{ bg: "#F1F5F9" }}
                    _focus={{ bg: "white", borderColor: "green.300" }}
                />
            </InputGroup>

            {/* Right Icons */}
            <HStack spacing={1.5}>
                <IconButton
                    icon={<FaComments fontSize="18px" />}
                    variant="ghost"
                    isRound
                    aria-label="Messages"
                    _hover={{ color: "green.500", bg: "gray.100" }}
                />
                <IconButton
                    icon={<FaBell fontSize="18px" />}
                    variant="ghost"
                    isRound
                    aria-label="Notifications"
                    _hover={{ color: "green.500", bg: "gray.100" }}
                />
                <IconButton
                    icon={<FaUserCircle fontSize="20px" />}
                    variant="ghost"
                    isRound
                    aria-label="Profile"
                    _hover={{ color: "green.500", bg: "gray.100" }}
                />
            </HStack>
        </Flex>
    );
};

export default Topbar;
