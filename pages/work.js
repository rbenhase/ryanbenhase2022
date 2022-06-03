import Head from "next/head"
import styled from "styled-components"
import TimelineItem from "../components/TimelineItem"

const StyledContent = styled.main`
  section {
    margin-bottom:3rem;
    color: ${({theme}) => theme.brightPurple};
  }
`
export default function Work() {

  return (
    <>
      <Head>
        <title>Ryan Benhase // Cincinnati, OH</title>
        <meta name="description" content="Strategic thinker, creative problem solver, developer, and marketer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContent>
        <section>        
          <h1>Work Experience</h1>
          <TimelineItem 
            date="2017 - Present" 
            title="Director of Web Development" 
            institution="2060 Digital" 
            detail="Overseeing the Web &amp; SEO Departments" 
          />
          <TimelineItem 
            date="2012 - 2017" 
            title="Web &amp; Systems Developer" 
            institution="2060 Digital" 
            detail="Developed hundreds of applications and websites" 
          />
          <TimelineItem 
            date="2010 - 2012" 
            title="Data Manager / Developer" 
            institution="Lightborne" 
            detail="Developed multiple applications and ingested/archived data" 
          />
        </section>
        <section>
          <h1 className="secondary">Community</h1>
          <TimelineItem 
            date="2014 - Present" 
            title="Advisory Board Member" 
            institution="Gateway Community &amp; Technical College" 
            detail="CIT Program" 
          />
        </section>
        <section>
          <h1 className="secondary">Education</h1>
          <TimelineItem 
            date="2009 (Graduated)" 
            title="Bachelor of the Arts" 
            institution="Cincinnati Christian University" 
            detail="Graduated Magna Cum Laude" 
          />
        </section>
      </StyledContent>
    </>    
  )
}
