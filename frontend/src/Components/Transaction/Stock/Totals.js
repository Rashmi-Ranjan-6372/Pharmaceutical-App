// Totals.js
import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const Totals = ({ totals, border }) => {
    return (
        <>
            <Heading as="h3" size="xs" mb={1} color="black">Totals</Heading>
            <Flex gap={1} flexWrap="wrap" mb={2}>
                {totals.map((t) => (
                    <Box
                        key={t.name}
                        border="1px"
                        borderColor={border}
                        px={1}
                        py={1}
                        borderRadius="sm"
                        textAlign="center"
                        flex="1"
                        minW="80px"
                        fontSize="xs"
                    >
                        <Text fontWeight="bold">{t.name}</Text>
                        <Text>{parseFloat(t.value).toFixed(2)}</Text>
                    </Box>
                ))}
            </Flex>
        </>
    );
};

export default Totals;
