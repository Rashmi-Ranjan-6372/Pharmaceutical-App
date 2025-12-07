import React from "react";
import {
    Box,
    Flex,
    Icon,
    Text,
    Stack,
    Divider,
    useBreakpointValue,
} from "@chakra-ui/react";
import { FiShoppingBag, FiUsers, FiPackage, FiLayers } from "react-icons/fi";

const stats = [
    { label: "Sales", value: "1,795", icon: FiShoppingBag, color: "green.100" },
    { label: "Customers", value: "2,327", icon: FiUsers, color: "blue.100" },
    { label: "Products", value: "674", icon: FiPackage, color: "pink.100" },
    { label: "Categories", value: "68", icon: FiLayers, color: "purple.100" },
];

const StoreStatistics = () => {
    const labelSize = useBreakpointValue({ base: "xs", sm: "xs" });
    const valueSize = useBreakpointValue({ base: "sm", sm: "md" });
    const iconSize = useBreakpointValue({ base: 3, sm: 4 });
    const cardPadding = useBreakpointValue({ base: 2, sm: 3 });

    return (
        <Box
            p={cardPadding}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            boxShadow="sm"
            w="100%"
        >
            <Text
                fontWeight="bold"
                fontSize={{ base: "md", sm: "lg" }}
                color="gray.900"
                textAlign="left"
            >
                Store Statistics
            </Text>

            <Stack spacing={2} mt={2} divider={<Divider borderColor="gray.200" />}>
                {stats.map((stat) => (
                    <Flex
                        key={stat.label}
                        justify="space-between"
                        align="center"
                        px={1}
                        py={1}
                        flexWrap="wrap"
                    >
                        <Box>
                            <Text fontSize={labelSize} color="gray.600">
                                {stat.label}
                            </Text>
                            <Text fontSize={valueSize} fontWeight="bold" color="gray.800">
                                {stat.value}
                            </Text>
                        </Box>

                        <Box
                            bg={stat.color}
                            p={1.5}
                            borderRadius="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            minW="30px"
                            minH="30px"
                        >
                            <Icon as={stat.icon} boxSize={iconSize} color="gray.700" />
                        </Box>
                    </Flex>
                ))}
            </Stack>
        </Box>
    );
};

export default StoreStatistics;
