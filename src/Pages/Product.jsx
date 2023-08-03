import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import styled from 'styled-components'

const Container =styled.div``
const Wrapper =styled.div``
const ImageContainer =styled.div``
const Image =styled.img``
const InfoContainer =styled.div``
const Title =styled.h1``
const Desc =styled.div``
const Price =styled.div``

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Lorem, ipsum dolor.</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, cum non. Quo tempora eveniet hic nisi doloribus consequuntur quaerat iste laborum nulla animi modi illum, temporibus fuga ex? Adipisci, maiores?</Desc>
                <Price>$ 30</Price>
            </InfoContainer>
        </Wrapper>

        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product