import {
  Email,
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0;
`
const SocialContainer = styled.div`
display:flex;


`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
color: White;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
background-color: #${props=>props.color}

`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.p`
margin-bottom: 10px;
display: flex;
align-items: center;
cursor: pointer;

`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GK.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et quam
          blanditiis recusandae id beatae, ipsam provident animi assumenda
          facere quisquam ab veniam, consequuntur culpa voluptas iste
          repudiandae? Vel, aperiam.Lorem ipsum dolor sit amet consectetur.
        </Desc>
        <SocialContainer>
          <SocialIcon color="5844c9">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          
          <SocialIcon  color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
    <Title>Useful Links</Title>
    <List>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>My Accound</ListItem>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>My Accound</ListItem>
      <ListItem>Home</ListItem>
      <ListItem>Cart</ListItem>
      <ListItem>My Accound</ListItem>
    </List>
      </Center>
      <Right>
      <Title>Contact</Title>
      <ContactItem><LocationOn style={{marginRight: "10px"}}/>Pakistan</ContactItem>
      <ContactItem><LocalPhone style={{marginRight: "10px"}}/>+9 232 332 47</ContactItem>
      <ContactItem><Email style={{marginRight: "10px"}}/>Gk@gmail.dev</ContactItem>

      </Right>
    </Container>
  );
};

export default Footer;
