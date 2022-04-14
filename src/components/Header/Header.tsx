import { Flex, Image, Link, Box, Tooltip } from "@chakra-ui/react"
import logoImg from '../../../public/Logo.png'
import BackImg from '../../assets/Vector.png'

interface HeaderProps {
    backImage?: boolean
}


export function Header({ backImage }: HeaderProps) {
    return (
        <Flex
            justify='center'
            align='center'
            w='100%'
            pt={['2', "4"]}
            pb={['2', "4"]}
        >
            {backImage && (
                <Flex w='95%' align='center'>
                    <Tooltip label='Voltar'>
                        <Link href='/' >
                            <Image src={BackImg.src} />
                        </Link>
                    </Tooltip>

                    <Box ml='auto' mr='auto'>
                        <Link href="/" justifySelf='center'>
                            <Image src={logoImg.src} h={['8', '12']} />
                        </Link></Box>
                </Flex>)}
            {!backImage && (
                <Link href="/">
                    <Image src={logoImg.src} h='8' />
                </Link>
            )}
        </Flex>
    )
}