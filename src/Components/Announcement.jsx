import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
text-align:text;
display: flex;
align-items: center;
justify-content: center;
`

const Announcement = () => {
  return (
    <Container className="">
      Super Deal ! Free Shopping on Orders Over $50
    </Container>
  )
}

export default Announcement
