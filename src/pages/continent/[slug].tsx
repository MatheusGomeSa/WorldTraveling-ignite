import { Flex, Box, Text, VStack, HStack, SimpleGrid, Image, Avatar, Center, Img, Tooltip } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";

import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import { ParsedUrlQuery } from "querystring";
import infoImg from '../../assets/Info.svg'

interface SlugProps extends ParsedUrlQuery {
    slug: string;
}

interface ContriesOptionsProps {
    CityBackground: string;
    ContrieName: string;
    ContrieCity: string;
    CountrieFlag: string;
}

interface ContentProps {
    key: string;
    backgroudImg: string;
    Continent: string;
    ContinentText: string;
    CountriesNumber: string;
    CoutriesLanguege: string;
    CoutrieCity: string;
    ContrieOptions: ContriesOptionsProps[]

}



export default function Pages(Content: ContentProps) {
    console.log(Content);

    return (
        <Flex
            h="100vh"
            flexDir='column'

        >
            <Header backImage={true} />
            <Box pt={['300px', '375px']} pl={['10', '20', '40']} pb={['50px', '100px', '125px']} bgImg={Content.backgroudImg} w={'100%'} pr={['4', '8', '16']} backgroundSize='cover' ml='auto' mr='auto'>
                <Text opacity='1' fontSize={['2xl', "4xl"]} color='black.info' fontWeight='semibold'>{Content.Continent}</Text>
            </Box>
            <Flex mb='12' pl={['10', '20', '40']} pr={['10', '20', '40']} pt={['4', '8']} mt={['3', '6', '12']} flexDir={["column", "column", "row"]}>
                <Flex mb={['14', '0']} w={['95%', '45%']} color='black.headingText' textAlign='justify' fontSize={['md', "2xl"]} mr='auto'><Text>{Content.ContinentText}</Text></Flex>
                <Center w={['95%', '45%']} ml='auto'>
                    <HStack spacing={[5, 10, 20]}  >
                        <VStack spacing={2}>
                            <Flex as='span' fontSize={['2xl', '3xl']} fontWeight='semibold' color='yellow.700'>{Content.CountriesNumber}</Flex>
                            <Text fontWeight='bold' fontSize={['xl', "2xl"]} color='black.headingText'>países</Text>
                        </VStack>
                        <VStack spacing={2}>
                            <Flex as='span' fontSize={['2xl', '3xl']} fontWeight='semibold' color='yellow.700'>{Content.CoutriesLanguege}</Flex>
                            <Text fontWeight='bold' fontSize={['xl', "2xl"]} color='black.headingText'>línguas</Text>
                        </VStack>
                        <VStack spacing={2} w='160px'>
                            <Flex as='span' fontSize={['2xl', '3xl']} fontWeight='semibold' color='yellow.700'>{Content.CoutrieCity}</Flex>
                            <Text fontWeight='bold' fontSize={['xl', "2xl"]} color='black.headingText' whiteSpace='nowrap'><Flex>
                                cidades +100<Tooltip label='Seilá'><Img ml='2' src={infoImg.src} /></Tooltip></Flex></Text>
                        </VStack>
                    </HStack>
                </Center>
            </Flex>
            <Text mb='12' pr={['4', '8', '16']} fontWeight='bold' fontSize='3xl' pl={['10', '20', '40']} color='black.headingText'>Cidades +100</Text>
            <SimpleGrid columns={[1, 2, 4]} pl={['10', '20', '40']} pr={['0', '8', '16']} columnGap={[5, 40]} mr='auto' >
                {Content.ContrieOptions.map(Contrie => {
                    return (
                        <Flex w={240} h={280} flexDir='column' m={2} >
                            <Image w={240} h={150} borderTopRadius={4} src={Contrie.CityBackground} />
                            <Center>
                                <Flex w="100%" justify='space-between' align='center' borderBottomRadius={4} border='1px' borderTop='0' pl='6' pr='6' pt='2' pb='2' borderColor='yellow.700'>
                                    <Box w="50%">
                                        <Text fontWeight='semibold' color='black.headingText'>{Contrie.ContrieCity}</Text>
                                        <Text color='black.info'>{Contrie.ContrieName}</Text>
                                    </Box>
                                    <Avatar src={Contrie.CountrieFlag} size='xs' />
                                </Flex>
                            </Center>
                        </Flex>
                    )
                })}
            </SimpleGrid>
        </Flex >
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = [{ params: { slug: 'europe' } }, { params: { slug: 'north-america' } }];
    return {
        paths: slugs,
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as SlugProps;
    const response = await (await api.get(`contriesinformation/${slug}`)).data

    let contrie = {
        key: response.id,

        backgroudImg: response.backgroudImg,
        Continent: response.continent,
        ContinentText: response.continentText,
        CountriesNumber: response.contriesNumber,
        CoutriesLanguege: response.contriesLanguages,
        CoutrieCity: response.contriesCities,
        ContrieOptions: response.contriesOptions

    }
    return { props: contrie }
}