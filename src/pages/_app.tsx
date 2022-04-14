import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import type { AppProps } from 'next/app'
import "swiper/css/bundle";
import "../styles/Global.css"
/* import { createServer, Model } from 'miragejs'

createServer({
  models: {
    continents: Model,
    contries: Model
  },
  seeds(server) {
    server.db.loadData({
      continents: [
        {
          key: 'north-america',
          Country: 'América do Norte',
          ImageSrc: 'https://media.istockphoto.com/photos/night-new-york-reflective-city-lights-picture-id1338128642?b=1&k=20&m=1338128642&s=170667a&w=0&h=V7NpNSphKYleSQh7AMAmQTYtZ0UhoMI1aHL9EPOzFVI=',
          Text: ''

        },
        {
          key: 'south-america',
          Country: 'América do Sul',
          ImageSrc: 'https://media.istockphoto.com/photos/aerial-panorama-of-botafogo-bay-rio-de-janeiro-picture-id608540602?b=1&k=20&m=608540602&s=170667a&w=0&h=AataLXfn0acAkHnx2CAkKusL4eZl5a7mtOG1LgWdf48=',
          Text: ''

        },
        {
          key: 'asia',
          Country: 'Ásia',
          ImageSrc: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          Text: ''
        },
        {
          key: 'africa',
          Country: 'África',
          ImageSrc: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          Text: ''
        },
        {
          key: 'europe',
          Country: 'Europa',
          ImageSrc: 'https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          Text: 'O continente mais antigo.'
        },
        {
          key: 'oceania',
          Country: 'Oceania',
          ImageSrc: 'https://media.istockphoto.com/photos/full-view-of-palau-malakal-island-and-koror-picture-id626815916?b=1&k=20&m=626815916&s=170667a&w=0&h=760sQAJJ43mxJKKPUsDEM4-XRJboFk0jNis1ytJ9-d4=',
          Text: ''
        }
      ],
      contries: [
        { key: 'europe' },
        { key: 'oceania' },
        { key: 'africa' },
        { key: 'asia' },
        { key: 'south-america' },
        { key: 'north-america' }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    this.get("/continents", (schema) => {
      return schema.db.continents
    })
    this.get("/continents/:id", (schema, request) => {
      let { id } = request.params
      return schema.db.contries.where({ key: id })
    })
  }
})
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider >
  )
}

export default MyApp;
