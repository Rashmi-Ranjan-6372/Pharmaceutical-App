// TransactionDetails.js
import React from "react";
import { Grid, GridItem, Text, Input, Heading } from "@chakra-ui/react";

const TransactionDetails = ({ voucherType }) => {
    return (
        <>
            <Heading as="h3" size="xs" mb={1} color="black">
                Transaction Details
            </Heading>
            <Grid
                templateColumns={
                    voucherType === "Sales Issue"
                        ? { base: "1fr", md: "repeat(5, 1fr)" }
                        : { base: "1fr", md: "repeat(3, 1fr)" }
                }
                gap={2}
                mb={2}
            >
                <GridItem>
                    <Text fontSize="xs" mb={1}>Date</Text>
                    <Input type="date" defaultValue="2025-09-02" size="xs" />
                </GridItem>
                <GridItem>
                    <Text fontSize="xs" mb={1}>No.</Text>
                    <Input size="xs" value="1" readOnly />
                </GridItem>
                <GridItem>
                    <Text fontSize="xs" mb={1}>Reference</Text>
                    <Input size="xs" placeholder="Optional reference..." />
                </GridItem>

                {voucherType === "Sales Issue" && (
                    <>
                        <GridItem>
                            <Text fontSize="xs" mb={1}>Customer</Text>
                            <Input size="xs" placeholder="Enter customer name" />
                        </GridItem>
                        <GridItem>
                            <Text fontSize="xs" mb={1}>Vendor</Text>
                            <Input size="xs" placeholder="Enter vendor name" />
                        </GridItem>
                    </>
                )}
            </Grid>
        </>
    );
};

export default TransactionDetails;
