import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const App: React.FunctionComponent = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      justify="center"
      align="center"
      backgroundColor="blue.900"
    >

      <Flex
      flexDir="column"
      w="250"
      >
      <Heading fontSize="2xl" color="white" pb="4">
        API to fetch content
      </Heading>
      <Text fontSize="lg" color="gray.500">Lorem ipsum dolor sit amet,
       consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.</Text>
      </Flex>
    </Flex>
  );
};

export default App;
