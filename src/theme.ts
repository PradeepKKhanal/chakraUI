import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'


export const theme=extendTheme({
    // styles:{global:{
    //   span:{
    //     color:'red',
    //     backgroundColor:'green',
    //     _hover:{
    //       color:'black',
    //       backgroundColor:'red'
    //     }
    //   }
    // }},
    colors:{
                blue: {
                  50: '#ebf8ff',
                  100: '#bee3f8',
                  200: '#90cdf4',
                  300: '#63b3ed',
                  400: '#4299e1',
                  500: '#3182ce',
                  600: '#2b6cb0',
                  700: '#2c5282',
                  800: '#2a4365',
                  900: '#1A365D',
                },
                green: {
                  50: '#f0fff4',
                  100: '#c6f6d5',
                  200: '#9ae6b4',
                  300: '#68d391',
                  400: '#48bb78',
                  500: '#38a169',
                  600: '#2f855a',
                  700: '#276749',
                  800: '#22543d',
                  900: '#1c4532',
                },
                black: {
                  50: '#f7fafc',
                  100: '#edf2f7',
                  200: '#e2e8f0',
                  300: '#cbd5e0',
                  400: '#a0aec0',
                  500: '#718096',
                  600: '#4a5568',
                  700: '#2d3748',
                  800: '#1a202c',
                  900: '#171923',
                },
                red: {
                  50: '#fff5f5',
                  100: '#fed7d7',
                  200: '#feb2b2',
                  300: '#fc8181',
                  400: '#f56565',
                  500: '#e53e3e',
                  600: '#c53030',
                  700: '#9b2c2c',
                  800: '#822727',
                  900: '#63171b',
                },
              },

    semanticTokens:{
        colors:{
            primary:{
                default:'white',
                _dark:'blue.900'
            },
            text:{
                default:'black',
                _dark:'white'
            },
            secondary:{
                default:'green.50',
                _dark:'green.900',
            }
        }
    },
    styles:{
        global:{
            body:{
                bg:'primary'
            }
        }
    },
    components:{
      Button:{
        baseStyle:{
          fontWeight:'bold'
        },
        sizes:{
          xl:{
            h:'56px',
            fontSize:'lg',
            px:'32px'
          }
        },
        variants: {
          'with-shadow': {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
          },
          // 4. We can override existing variants
          solid: (props: StyleFunctionProps) => ({
            bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
          }),
          // 5. We can add responsive variants
          sm: {
            bg: 'teal.500',
            fontSize: 'md',
          },
        },
        defaultProps:{
          size:'lg',
          variant:'sm',
          colorScheme:'green'
        }
      }
    },
    config:{
        initialColorMode: 'dark',
        useSystemColorMode: false,
    }
  })


// export  const darkTheme=extendTheme({
//     colors:{
//         blue: {
//           50: '#ebf8ff',
//           100: '#bee3f8',
//           200: '#90cdf4',
//           300: '#63b3ed',
//           400: '#4299e1',
//           500: '#3182ce',
//           600: '#2b6cb0',
//           700: '#2c5282',
//           800: '#2a4365',
//           900: '#1A365D',
//         },
//         green: {
//           50: '#f0fff4',
//           100: '#c6f6d5',
//           200: '#9ae6b4',
//           300: '#68d391',
//           400: '#48bb78',
//           500: '#38a169',
//           600: '#2f855a',
//           700: '#276749',
//           800: '#22543d',
//           900: '#1c4532',
//         },
//         black: {
//           50: '#f7fafc',
//           100: '#edf2f7',
//           200: '#e2e8f0',
//           300: '#cbd5e0',
//           400: '#a0aec0',
//           500: '#718096',
//           600: '#4a5568',
//           700: '#2d3748',
//           800: '#1a202c',
//           900: '#171923',
//         },
//         red: {
//           50: '#fff5f5',
//           100: '#fed7d7',
//           200: '#feb2b2',
//           300: '#fc8181',
//           400: '#f56565',
//           500: '#e53e3e',
//           600: '#c53030',
//           700: '#9b2c2c',
//           800: '#822727',
//           900: '#63171b',
//         },
//       },
//       config:{
//         initialColorMode: 'dark',
//         useSystemColorMode: false,
//     }
      
//   })


// export  const lightTheme={
//     colors: {
//         blue: {
//           50: '#1A365D',
//           100: '#2a4365',
//           200: '#2c5282',
//           300: '#2b6cb0',
//           400: '#3182ce',
//           500: '#4299e1',
//           600: '#63b3ed',
//           700: '#90cdf4',
//           800: '#bee3f8',
//           900: '#ebf8ff',
//         },
//         green: {
//           50: '#1c4532',
//           100: '#22543d',
//           200: '#276749',
//           300: '#2f855a',
//           400: '#38a169',
//           500: '#48bb78',
//           600: '#68d391',
//           700: '#9ae6b4',
//           800: '#c6f6d5',
//           900: '#f0fff4',
//         },
//         black: {
//           50: '#171923',
//           100: '#1a202c',
//           200: '#2d3748',
//           300: '#4a5568',
//           400: '#718096',
//           500: '#a0aec0',
//           600: '#cbd5e0',
//           700: '#e2e8f0',
//           800: '#edf2f7',
//           900: '#f7fafc',
//         },
//         red: {
//           50: '#63171b',
//           100: '#822727',
//           200: '#9b2c2c',
//           300: '#c53030',
//           400: '#e53e3e',
//           500: '#f56565',
//           600: '#fc8181',
//           700: '#feb2b2',
//           800: '#fed7d7',
//           900: '#fff5f5',
//         },
//       },
//       config:{
//         initialColorMode: 'dark',
//         useSystemColorMode: false,
//     }
      
//   }