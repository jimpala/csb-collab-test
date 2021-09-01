import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const App: React.FunctionComponent = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      justify="center"
      align="center"
      backgroundColor="blue.800"
    >
      <Heading color="white">Let's get building...</Heading>
    </Flex>
  );
};

export default App;
