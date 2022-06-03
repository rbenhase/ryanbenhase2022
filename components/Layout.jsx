import Image from 'next/image'
import styled from 'styled-components'
import SideNavigation from "../components/SideNavigation"
import CloseIcon from "../components/CloseIcon"

const StyledLayout = styled.div `
  width:100%;
  height:100%;
  color: ${({theme}) => theme.black};
  animation-duration: .5s;
  animation-timing-function: ease-out;
  background-color: ${({theme}) => theme.white};
  transition:background-color .5s ease-in;
  animation-name: slide;
  overflow:hidden;
  position:relative;
  box-shadow:.5rem .5rem 3rem ${({theme}) => theme.black}; 

  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}) {
    &::before {
      content: " ";
      position: absolute;
      height:100%;
      top:0;
      background-color: ${({theme}) => theme.purple};
      background-image: radial-gradient(circle, ${({theme}) => theme.brightPurple} 0%, ${({theme}) => theme.purple} 100%);
      width:4rem;
    }
  }

  div.scroll {
    height:100%;
    overflow-x:hidden;
    overflow-y:auto;
    scrollbar-gutter: stable;
  }

  div.container {
    position:relative;
    min-height:100%;
    transition: all .5s ease-in;
  
    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}) {
      margin-left:4rem;

      &::before {
        content: " ";
        position: absolute;
        height:100%;
        background-color: ${({theme}) => theme.translucentPurple};
        width:5rem;
        animation: dynamic-border-lg 11s infinite;
      }
  
      &::after {
        content: " ";
        position: absolute;
        height:100%;
        top:0;
        background-color: ${({theme}) => theme.translucentPurple};
        width:3rem;
        animation: dynamic-border 8s infinite;
      }
    }
  }  

  .inner {
    padding:.5rem 1rem;
    max-width:64rem;
    margin:0 auto;  
    height:100%;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}) {
      display: flex;
      gap:2rem;
      justify-content: space-between;
      padding:1.5rem 3rem;
    }
      
    h1 {
      color: ${({theme}) => theme.brightPurple};
    }

    > main {
      max-width:36rem;

      li {
        &::before {
          content: "•"; 
          color: ${({theme}) => theme.brightPurple}; 
          padding:.5rem;
        }
      }
    }

    > aside {
      display:none;
      width: 18rem;
      margin-top:6rem;
      position:relative;

      @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}) {
        display:block;
      }

      &:before {
        position:absolute;
        content: " ";
        top:-5rem;
        right:-5rem;
        height:20rem;
        width:20rem;
        background-image:url(/pattern.svg);
      }

      .sidebar {
        position:relative;
        transition:transform .25s ease-out;
        
        &:hover {
          transform: scale(1.05);
        }  

        &::before {
          position:absolute;
          top:1rem;
          right:-1rem;
          height:100%;
          width:100%;
          content: " ";
          background-color: ${({theme}) => theme.dullPurple};
          clip-path: polygon(0 0, calc(100% - 1rem) 0%, 100% 1rem, 100% 100%, 100% 100%, 1rem 100%, 0% calc(100% - 1rem), 0 0);
        }

        .sidebar-inner {
          padding:1.5rem;
          background-color: ${({theme}) => theme.purple};
          background-image: radial-gradient(circle, ${({theme}) => theme.brightPurple} 0%, ${({theme}) => theme.purple} 100%);
          color: ${({theme}) => theme.translucentWhite};
          clip-path: polygon(0 0, calc(100% - 1rem) 0%, 100% 1rem, 100% 100%, 100% 100%, 1rem 100%, 0% calc(100% - 1rem), 0 0);  
        }
      }
      .photo {
        border-radius:100%;
      }
    }
  }
`

const Layout = ({children}) => {
  return (
      <StyledLayout>
        <div className="scroll">
          <div className="container">
            <div className='close-icon'>
              <CloseIcon />
            </div>
            <div className="inner">
              {children}
              <aside>
                <div className="sidebar">
                  <div className="sidebar-inner">
                    <Image className="photo" width="240" height="240" alt="Photo of Ryan Benhase" src="/ryan.webp" placeholder="blur" blurDataURL="data:image/jpg;base64,UklGRs4AAABXRUJQVlA4IMIAAAAwAwCdASoKAAoAAIAKJZACdDBACgAa5R/jDpvSng7kDccAAP7wt/9/I2vYDf0ed8tyRVZHBvP/E4f+af+A719yn+N/zxMEcYjf/ixh//qisdviyVAJDgW3/7wUdq9nLGEDllR+f/5J9yF+MC9k/jCv/pLKX/f2+LiaVFA/zVO3Sz2/lwXa1BlK9v+E9hpOfc/6gk/QkmCO1sQI3/5sZThWelv/8NC/Zh/4veb/6vMo/1vwTX7P/FHt/+LvU0P/wPSAAA==" />
                    <SideNavigation />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </StyledLayout>
  )
  }
export default Layout