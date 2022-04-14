
import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        gray: {
            '50': '#80999999',
            '200': '#999999',
            '500': '#47585B',
        },
        yellow: {
            '700': "#FFBA08",
            '500': "#80FFBA08"
        },
        white: {
            'heading': "#F5F8FA",
            'info': "#dadada"
        },
        black: {
            'headingText': '#47585B',
            'info': '#999999'
        }
    },
    fonts: {
        ...ChakraTheme.fonts,
        heading: "poppins",
        body: "poppins"
    }
})