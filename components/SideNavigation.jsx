import Link from 'next/link'
import styled from 'styled-components'
import links from "../data/links"
import { useRouter } from "next/router"

const StyledNavigation = styled.nav`
  ul {
    list-style  :none;
    padding:0;
    justify-content: center;
    text-transform:uppercase;
    letter-spacing:.25rem;

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
        backdrop-filter: blur(5px);

        &:hover {
          background-color:rgba(255,255,255,.1);
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
    } 
  }
  h2 {
    text-align:center;
  }
`

const Navigation = () => {

  const router = useRouter()

  return  (
    <StyledNavigation>
      <h2>Learn More:</h2>
      <ul>
        {links.map(({href, text}, k) => {
          return router.pathname !== href ? (
            <li key={"nav-" + k}>
              <Link href={href}>
                <a>
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