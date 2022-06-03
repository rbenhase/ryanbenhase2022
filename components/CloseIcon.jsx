import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledIcon = styled.div`
  cusor:pointer;
  position:absolute;
  top:.25rem;
  right:.25rem;
  fill: ${({theme}) => theme.dullPurple};
  z-index:9;
  transition: all .125s ease-in;

  &:hover {
    cursor:pointer;
    fill: ${({theme}) => theme.brightPurple};
  }
`

export default function CloseIcon() {

  const router = useRouter()

  return (
    <StyledIcon onClick={() => router.push("/")}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </StyledIcon>
  )
}
