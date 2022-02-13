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

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const WorkCard = () => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Text textAlign={"center"} fontSize={"4xl"} py={10} fontWeight={"bold"}>
        What is our company doing?
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
        paddingBottom="40"
        paddingTop="20"
      >
        <StatsCard title={"We supply"} stat={"50,000 Properties"} />
        <StatsCard title={"To"} stat={"International Clients"} />
        <StatsCard title={"With"} stat={"24/7 Support"} />
      </SimpleGrid>
    </Box>
  );
};

export default WorkCard;
