import { createContext, useState } from "react"
import { useRouter } from "next/router"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles, defaultTheme } from "../styles/theme.config"
import "@fontsource/source-sans-pro/300.css"
import "@fontsource/source-sans-pro/600.css"
import Layout from "../components/Layout"

export const AppContext = createContext({})

const StyledContainer = styled.div`
  height:100%;
  padding:.5rem .5rem .5rem;
  position:relative;
  overflow:hidden;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}) {
    padding:1rem 5rem 1rem;
  }

  &:before {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    content: ' ';
    z-index:-1;
    transform: ${({bgZoom}) => bgZoom ? `scale3d(${bgZoom})` : "none"};
    background-image: url(/bg.webp);
    background-attachment:fixed;
    transition: transform 0.25s linear;
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    overflow:hidden;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.md}) {
    &:before {
      background-image: url(/bg-md.webp);
    }
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}) {
    &:before {
      background-image: url(/bg-lg.webp);
    }
  }
  `

function MyApp({ Component, pageProps }) {

  const [bgZoom, setBgZoom] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const appData = {
    bgZoom,
    loading,
    setBgZoom,
    setLoading
  }

  return (
    <AppContext.Provider value={appData}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <StyledContainer bgZoom={bgZoom} onClick={(e) => e.target === e.currentTarget ? router.push("/") : false}>
          {router.pathname === "/" ? 
            <Component {...pageProps}  />
              :
            <Layout>
              <Component {...pageProps}  />
            </Layout>
          }
        </StyledContainer>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default MyApp
