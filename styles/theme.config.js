import { createGlobalStyle } from 'styled-components'
export const defaultTheme = {
   bgColor: '#000000',
   purple: "rgba(30,20,46,1)",
   dullPurple: "rgba(164,161,171,1)",
   brightPurple: "rgba(43,26,71,1)",
   translucentPurple: "rgba(30,20,46,.4)",
   black: "rgba(30,30,30,1)",
   white: "rgba(255,255,255,1)",
   translucentWhite: "rgba(255,255,255,.5)",
   breakpoints: {
      md: "48rem",   // 768px
      lg: "64rem",   // 1024px
   }
}
export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
html, #__next {
  height:100%;
  overflow-x:hidden;
  font-size:100%;
}
body {
   height:100%;
   margin: 0;
   padding: 0;
   background-color: ${({ theme }) => theme.bgColor};
   color: ${({ theme }) => theme.black};
   font-family: "Source Sans Pro", sans-serif;
   font-weight: 400;
   font-style: normal;
   overflow:hidden;
}

h1 {
   text-transform:uppercase;
   letter-spacing:.5rem;
   font-size:3rem;
   font-weight:600;
   margin-top:2rem;
   line-height:1;
   padding-bottom:.5rem;
   border-bottom:2px solid ${({theme}) => theme.translucentPurple};

   &.secondary {
      font-size:2rem;
   }
}

h2 {
   text-transform:uppercase;
   letter-spacing:.25rem; 
   margin:.25rem 0;
   color: ${({theme}) => theme.brightPurple};
   line-height:1;
}

h3 {
   text-transform:uppercase;
   letter-spacing:.125rem; 
   margin:.25rem 0;
   margin:0;
   color: ${({theme}) => theme.brightPurple};
   line-height:1;
}

h4 {
   margin:.25rem 0;
   color: ${({theme}) => theme.brightPurple};
   font-style:italic;
}

p, ul {
   line-height:1.5;
   font-size:120%;
   padding:0;
}

li {
   list-style: none;
   margin:0;
}

main {
   animation: fade-in 1s;
}

footer {
   text-align:center;
   font-size:.9rem;
   margin-top:2rem;
   text-transform:uppercase;
   letter-spacing:.125rem;
}

@keyframes slide {
   from { transform: translate3d(0, 100vh, 0) }
   to { transform: translate3d(0, 0, 0) }
}

@keyframes fade-in {
   from { opacity:0 }
   to { opacity:1 }
}

@keyframes dynamic-border {
   0% { width: 1.5rem }
   25% { width: 2rem }
   50% { width: 1.5rem }
   75% { width: 1.25rem }
   100% { width: 1.5rem }
}

@keyframes dynamic-border-lg {
   0% { width: 3rem }
   25% { width: 3.5rem }
   50% { width: 3rem }
   75% { width: 2.75rem }
   100% { width: 3rem }
}
`