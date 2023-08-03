import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import styled from 'styled-components'
import Product from '../Components/Product'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
const Container = styled.div``

const Title = styled.h1``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:20px
`
const FilterText = styled.span`
padding: 20px;
font-weight: 600;
`
const Select = styled.select`
padding: 10px;
margin-right: 10px;

`
const Option = styled.option``
const ProductList = () => {
  return (
    <Container>
        <Announcement/>
      <Navbar/>
      <Title>Drasses</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products: </FilterText>
        <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
        </Select>
        <Select>
            <Option disabled selected>Size</Option>
            <Option>X</Option>
            <Option>XL</Option>
            <Option>XLL</Option>
            <Option>M</Option>
            <Option>S</Option>
        </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products: </FilterText>
        <Select>
            <Option disabled selected>Size</Option>
            <Option>Newst</Option>
            <Option>Price</Option>
            <Option>Popular</Option>
            
        </Select>
        </Filter>
      </FilterContainer>

      <Products/>
      <Footer/>
    </Container>
  )
}

export default ProductList
