import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Button, Heading, Stack, Container, Blob} from "@chakra-ui/react";

import { baseUrl } from "../utils/fetchapi";
import { fetchApi } from "../utils/fetchapi";

import Property from "../components/Property";

import bannerPhoto from "../assets/BannerPhoto.jpg";
import bannerPhoto2 from "../assets/BannerPhoto2.jpg";


export default function Home({propertiesForSale, propertiesForRent}) {
  return (
    /*
    <Box>
      <Banner 
        purpose="For Rent"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Houses"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property)=><Property property={property} key={property.id}/>)}
      </Flex>
      <Banner 
        purpose="For Sale"
        title1="Find, Buy and Own your"
        title2="New Home"
        desc1="Explore Apartments, Villas, Houses"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property)=><Property property={property} key={property.id}/>)}
      </Flex>
    </Box>
    */
    <Stack minH={'500px'} maxH={"1100px"} justifyContent="center" direction={{ base: 'column', md: 'row' }}>
      <Flex p={18} flex={1} align={'center'} justify={'left'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              backgroundColor="black"
              textColor="white">
              Dubai
            </Text>
              <br/>
            <Text color={'blue.300'} as={'span'}>
              Real Estate
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} paddingBottom="10">
            Premium Real Estate Agency, based in the most incredible City in the World.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.300',
              }}><Link href="/search?properties=for-sale">
              For Sale</Link>
            </Button>
            <Button rounded={'full'} bg=""><Link href="/search?properties=for-rent">For Rent</Link></Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1.6} maxHeight={"100vh"}>
        <Image src={bannerPhoto2} alt="BannerPhoto2" objectFit="cover"/>
      </Flex>
    </Stack>

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