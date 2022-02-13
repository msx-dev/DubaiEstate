import {
  Flex,
  Box,
  Text,
  Button,
  Heading,
  Stack,
  Container,
  Blob,
  VStack,
  useBreakpointValue,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)"
      }
      boxShadow={"inset 0 0 0 1000px rgba(0,0,0,.3)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={300}
            lineHeight={1.2}
            textAlign="center"
            fontSize={{ base: "4xl", md: "6xl" }}
          >
            Premium Dubai <br />
            Real Estate <br />
            Office
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <Button
              fontSize={"3xl"}
              bg={"gray.900"}
              fontWeight={"200"}
              rounded={"full"}
              color={"white"}
              paddingBottom={1}
              _hover={{ bg: "black" }}
            >
              <Link href="/search?properties=for-sale">
                Properties For Sale
              </Link>
            </Button>
            <Button
              bg={"gray.200"}
              fontSize={"3xl"}
              fontWeight={"200"}
              rounded={"full"}
              color={"black"}
              paddingBottom={1}
              _hover={{ bg: "gray.400" }}
            >
              <Link href="/search?properties=for-sale">
                Properties For Rent
              </Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroBanner;
