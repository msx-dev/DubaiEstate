import Link from "next/link";
import Image from "next/image";
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

import { baseUrl } from "../utils/fetchapi";
import { fetchApi } from "../utils/fetchapi";

import Property from "../components/Property";

import bannerPhoto from "../assets/BannerPhoto.jpg";
import bannerPhoto2 from "../assets/BannerPhoto2.jpg";
import HeroBanner from "../components/HeroBanner";
import WorkCard from "../components/WorkCard";

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

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <>
      <HeroBanner />
      <WorkCard />

      <Box
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80)"
        }
        boxShadow={"inset 0 0 0 1000px rgba(0,0,0,.3)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        display={"flex"}
        flexDirection={"row"}
      >
        <Box width={"50%"}>
          <Text>Left side</Text>
        </Box>
        <Box width={"50%"}>
          <Box
            width={"600px"}
            height={"500px"}
            backgroundColor={"white"}
            margin={"auto"}
            marginTop={"200px"}
            justifyContent={"space-around"}
            alignItems={"center"}
            borderRadius={"20"}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

//Get the Data
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
