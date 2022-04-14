import { Box, Divider, Flex, Heading, Image, Img, SimpleGrid, Stack, Text, Center } from '@chakra-ui/react'
import { Header } from '../components/Header/Header'
import BackgroundImg from '../../public/Background.png'
import AirplaneImg from '../../public/Airplane.svg'
import Surf from '../assets/surf1.svg'
import Cocktail from '../assets/cocktail1.svg'
import Museum from '../assets/museum1.svg'
import Building from '../assets/building1.svg'
import Earth from '../assets/earth1.svg'
import { SwiperComponent } from '../components/SwiperComponent/SwiperComponent'
import { useEffect, useState } from 'react'
import { api } from '../services/api';

interface SlideProps {
  id: string;
  ImageSrc: string;
  Country: string;
  Text: string;
}

export default function Home() {
  const [ContinentSlide, SetContinentSlide] = useState<SlideProps[]>([] as SlideProps[])
  useEffect(() => {
    api.get('continentslist')
      .then(response => SetContinentSlide(response.data))
  }
    , []);
  console.log(ContinentSlide)
  return (
    <Flex
      h="100vh"
      flexDir='column'
      w='100%'
    >
      <Header />
      <Flex
        backgroundSize='cover'
        bgImage={BackgroundImg.src}
        bgRepeat='no-repeat'
        color="white"
        h={360}
        w='100%'

      >
        <Flex
          align="center"
          pl={['8', '36']}
          w={['100%', '50%']}
          mb='3'
          mt='3'
        >
          <Stack spacing={['2', '5']}>
            <Box>
              <Text fontSize={["xl", "3xl"]} fontFamily='heading' fontWeight='bold'>5 Continentes,</Text>
              <Text fontSize={["xl", "3xl"]} fontFamily='heading' fontWeight='bold'>infinitas possibilidades.</Text>
            </Box>
            <Text>chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Stack>
        </Flex>
        <Flex
          w={['0', '50%']}
          justify="center"
        >
          <Box w='400px' ><Image src={AirplaneImg.src} w='100%' /></Box>
        </Flex>
      </Flex>
      <Flex
        flexDir='column'
        m={['10', '24']}
        mt='16'
      >
        <SimpleGrid columns={[3, 5]} spacingX={16} spacing={[1, 3]}>
          <Flex flexDir='column' align='center' justify='center'  >
            <Image src={Cocktail.src} w={['12', '24']} />
            <Text fontWeight='bold' mt='4' color='gray.600' fontSize={['md', 'lg']} whiteSpace='nowrap'>vida noturna</Text>
          </Flex>
          <Flex flexDir='column' align='center' justify='center' >
            <Image src={Surf.src} w={['12', '24']} />
            <Text fontWeight='bold' mt='4' color='gray.600' fontSize={['md', 'lg']} whiteSpace='nowrap'>praia</Text>
          </Flex>
          <Flex flexDir='column' align='center' justify='center' >
            <Image src={Building.src} w={['12', '24']} />
            <Text fontWeight='bold' mt='4' color='gray.600' fontSize={['md', 'lg']} whiteSpace='nowrap'>moderno</Text>
          </Flex>
          <Flex flexDir='column' align='center' justify='center' >
            <Image src={Museum.src} w={['12', '24']} />
            <Text fontWeight='bold' mt='4' color='gray.600' fontSize={['md', 'lg']} whiteSpace='nowrap'>clássico</Text>
          </Flex>
          <Flex flexDir='column' align='center' justify='center' >
            <Image src={Earth.src} w={['12', '24']} />
            <Text fontWeight='bold' mt='4' color='gray.600' fontSize='lg' whiteSpace='nowrap'>e mais...</Text>
          </Flex>
        </SimpleGrid>
        <Center><Flex w='10%' mt='12'><Divider border='2' borderColor='gray.600' /></Flex></Center>
        <Flex
          flexDir='column'
          pt={['4', '12']}
          pb={['4', '12']}
        >
          <Center><Text fontSize={['xl', '3xl']} color='gray.600' fontWeight='bold'>Vamos nessa?</Text></Center>
          <Center><Text fontSize={['xl', '3xl']} color='gray.600' fontWeight='bold' whiteSpace='nowrap'>Então escolha seu continente</Text></Center>
        </Flex>
        <Box as='div' mb={['4', '12']} >
          <SwiperComponent SwiperSlideArray={ContinentSlide} />
        </Box>
      </Flex>
    </Flex>
  )
}

