import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript, StyleFunctionProps } from '@chakra-ui/react'
// import { extendTheme } from '@chakra-ui/react'
import { theme } from './theme.ts'


import App from './App.tsx'
import './index.css'

// const theme=extendTheme({
//   styles:{global:{
//     span:{
//       color:'red',
//       backgroundColor:'green',
//       _hover:{
//         color:'black',
//         backgroundColor:'red'
//       }
//     }
//   }},
//   colors:{
//     brand:{
//       100:'red',
//       200:'green',
//       300:'blue'
//     }
//   },
//   components:{
//     Button:{
//       baseStyle:{
//         fontWeight:'bold'
//       },
//       sizes:{
//         xl:{
//           h:'56px',
//           fontSize:'lg',
//           px:'32px'
//         }
//       },
//       variants: {
//         'with-shadow': {
//           bg: 'red.400',
//           boxShadow: '0 0 2px 2px #efdfde',
//         },
//         // 4. We can override existing variants
//         solid: (props: StyleFunctionProps) => ({
//           bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
//         }),
//         // 5. We can add responsive variants
//         sm: {
//           bg: 'teal.500',
//           fontSize: 'md',
//         },
//       },
//       defaultProps:{
//         size:'lg',
//         variant:'sm',
//         colorScheme:'green'
//       }
//     }
//   }
// })


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <ChakraProvider theme={theme}>
 <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
 

  </StrictMode>,
)
