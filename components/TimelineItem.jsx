import styled from "styled-components"

const StyledItem = styled.div`
  
  align-items: center;
  margin-bottom:2rem;

  .date {
    text-transform:uppercase;
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.lg}) {
    display:flex;
    gap:1.5rem;

    .date {
      width:5.5rem;
    }
  }  
`

export default function TimelineItem( {date, title, institution, detail = false} ) {
  return (
    <StyledItem>
      <div className="date">
        <strong>{date}</strong>
      </div>
      <div> 
        <h2>{title}</h2>
        <h3>{institution}</h3>
        { detail ? <h4>{detail}</h4> : null }
      </div>
    </StyledItem>
  )
}