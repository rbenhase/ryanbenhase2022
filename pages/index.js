import { useContext } from "react"
import { AppContext } from "./_app"
import Head from 'next/head'
import styled from 'styled-components'
import Navigation from "../components/Navigation"
import Fog from "../components/Fog"

const StyledPage = styled.div `
  height:100%;
  display:flex;
  align-items:center;
  margin: 0 auto;
  overflow:hidden;  

  main {
    max-width:900px;
    margin:0 auto;
    text-align:center;
    text-transform:uppercase;
    letter-spacing:.25rem;
    font-weight:300;
    text-shadow:0px 0px 1.5rem rgba(0,0,0,1);
  }

  .home-intro {
    border-top:1px solid ${({theme}) => theme.white};
    border-bottom:1px solid ${({theme}) => theme.white};
    padding: .5rem 0 2rem;
    margin-bottom:4rem; 
    color: ${({theme}) => theme.white};

    h1 {
      border-bottom:none;
    }
  }
`

export default function Home() {

  const { bgZoom } = useContext(AppContext)

  return (
    <StyledPage>
      <Head>
        <title>Ryan Benhase // Cincinnati, OH</title>
        <meta name="description" content="Strategic thinker, creative problem solver, developer, and marketer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="home-intro">
          <h1>Ryan Benhase</h1>
          <p>Strategic thinker, problem solver, developer &amp; marketer.</p>
          <p>Currently Director of Web Development @ 2060 Digital.</p>
        </div>
        <Navigation />
        <Fog />
      </main>
    </StyledPage>
  )
}
