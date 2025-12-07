import {
    Avatar,
    Box,
    Flex,
    Text,
    VStack,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Divider,
} from "@chakra-ui/react";
import { FiMoreVertical, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

const customers = [
    { name: "Abu Bin Ishtiyak", email: "info@softnio.com" },
    { name: "Sharon Walker", email: "sharon-90@example.com" },
    { name: "Gloria Oliver", email: "gloria_72@example.com" },
    { name: "Phillip Sullivan", email: "phillip-85@example.com" },
];

const NewCustomers = () => {
    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            w="100%"
        >
            {/* Header */}
            <Flex justify="space-between" align="center" mb={4}>
                <Text fontWeight="bold" fontSize="lg" color="gray.800">
                    New Customers
                </Text>
                <Link color="green.500" fontSize="sm" fontWeight="semibold">
                    View All
                </Link>
            </Flex>

            {/* Customer List */}
            <VStack spacing={3} divider={<Divider />} align="stretch">
                {customers.map((customer, index) => (
                    <Flex
                        key={index}
                        justify="space-between"
                        align="center"
                        flexWrap="nowrap"
                        w="100%"
                    >
                        {/* Avatar + Details */}
                        <Flex align="center" minW={0}>
                            <Avatar name={customer.name} size="sm" mr={3} />
                            <Box minW={0}>
                                <Text
                                    fontWeight="semibold"
                                    fontSize="sm"
                                    color="gray.800"
                                    isTruncated
                                >
                                    {customer.name}
                                </Text>
                                <Text fontSize="xs" color="gray.500" isTruncated>
                                    {customer.email}
                                </Text>
                            </Box>
                        </Flex>

                        {/* 3-dot Menu */}
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<FiMoreVertical />}
                                variant="ghost"
                                size="sm"
                                aria-label="More options"
                                color="gray.600"
                            />
                            <MenuList>
                                <MenuItem icon={<FiEye />}>View</MenuItem>
                                <MenuItem icon={<FiEdit2 />}>Edit</MenuItem>
                                <MenuItem icon={<FiTrash2 />}>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
};

export default NewCustomers;
