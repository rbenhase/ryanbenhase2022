import { useContext } from "react"
import { AppContext } from "../pages/_app"
import Link from 'next/link'
import styled from 'styled-components'
import { getZoom } from "../utilities"
import links from "../data/links"
import { useRouter } from "next/router"

const StyledNavigation = styled.nav`
  ul {
    list-style:none;
    padding:0;
    justify-content: center;
    text-transform:uppercase;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}) {
      display:flex;
    }

    li {
      padding:none;

      a {
        border:1px solid ${({theme}) => theme.white};
        display:block;
        min-width:11rem;
        padding:1rem 2rem;
        text-align:center;
        color: ${({theme}) => theme.white};
        text-decoration:none;
        transition: all .25s ease-in; 

        &:hover {
          background-color:rgba(255,255,255,.1);
          backdrop-filter: blur(5px);
          font-weight:600;
          letter-spacing:.35rem;
        }
      }

      &:first-child > a {
        border-top-left-radius:.25rem;
        border-top-right-radius:.25rem;
      }

      &:last-child > a {
        border-bottom-left-radius:.25rem;
        border-bottom-right-radius:.25rem;
      }

      @media screen and (min-width: ${({theme}) => theme.breakpoints.md}) {
      
        &:first-child > a {
          border-bottom-left-radius:.25rem;
          border-top-right-radius:0;
        }

        &:last-child > a {
          border-top-right-radius:.25rem;
          border-bottom-left-radius:0;
        }
      }
    } 
  }
`

const Navigation = () => {

  const { setBgZoom } = useContext(AppContext)
  const router = useRouter()

  return  (
    <StyledNavigation>
      <ul>
        {links.map(({href, text}, k) => {
          return router.pathname !== href ? (
            <li key={"nav-" + k}>
              <Link href={href}>
                <a onMouseEnter={() => setBgZoom(getZoom(k))} onMouseLeave={() => setBgZoom(false)}>
                  {text}
                </a>
              </Link>
            </li>
          ) : false 
        })}       
      </ul>
    </StyledNavigation>
  )
}
export default Navigation