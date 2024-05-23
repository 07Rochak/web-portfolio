import * as React from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiFormLabel-root': {
              color: 'rgb(0, 187, 255)'
            },
            '--TextField-brandBorderColor': 'rgb(0, 187, 255)',
            '--TextField-brandBorderHoverColor': 'rgb(0, 187, 255)',
            '--TextField-brandBorderFocusedColor': 'rgb(0, 187, 255)',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)'
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      }
    }
  })

export default function ContactMeDescription (props) {
  const outerTheme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        marginBottom: '1.5%',
        marginTop: '1.5%',
        // height: 100,
        color: 'white',
        backgroundColor: '#262626'
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField multiline rows='4' label={props.label} fullWidth sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }} />
      </ThemeProvider>
    </Box>
  )
}
