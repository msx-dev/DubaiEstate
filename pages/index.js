import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Button, Heading, Stack, Container, Blob, VStack, useBreakpointValue, Stat, StatLabel, StatNumber, SimpleGrid, useColorModeValue} from "@chakra-ui/react";

import { baseUrl } from "../utils/fetchapi";
import { fetchApi } from "../utils/fetchapi";

import Property from "../components/Property";

import bannerPhoto from "../assets/BannerPhoto.jpg";
import bannerPhoto2 from "../assets/BannerPhoto2.jpg";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}


export default function Home({propertiesForSale, propertiesForRent}) {
  return (
  <>
  <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)'
      }
      boxShadow={"inset 0 0 0 1000px rgba(0,0,0,.3)"}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={300}
            lineHeight={1.2}
            textAlign="center"
            fontSize={{base: "4xl", md:"6xl"}}>
            Premium Dubai <br/>Real Estate <br/>Office
          </Text>
          <Stack direction={{base: "column", md: "row"}}>
            <Button
              fontSize={"3xl"}
              bg={'gray.900'}
              fontWeight={"200"}
              rounded={'full'}
              color={'white'}
              paddingBottom={1}
              _hover={{ bg: 'black' }}>
              <Link href="/search?properties=for-sale">
              Properties For Sale</Link>
            </Button>
            <Button
              bg={'gray.200'}
              fontSize={"3xl"}
              fontWeight={"200"}
              rounded={'full'}
              color={'black'}
              paddingBottom={1}
              _hover={{ bg: 'gray.400' }}>
              <Link href="/search?properties=for-sale">
              Properties For Rent</Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Text
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        What is our company doing?
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'We supply'} stat={'50,000 Properties'} />
        <StatsCard title={'To'} stat={'International Clients'} />
        <StatsCard title={'With'} stat={'24/7 Support'} />
      </SimpleGrid>
    </Box>
    
  </>
  )
}

//Get the Data
export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}