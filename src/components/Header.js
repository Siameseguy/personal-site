import styled from 'styled-components'

const Header = styled.header `
  background-image: linear-gradient(
        to right bottom,
        rgba(16, 29, 44, 0.8),
        rgba(16, 29, 44, 0.8)),
    url('https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15350525_10153942325821930_290867916742017586_n.jpg?_nc_cat=0&oh=d29b2e597d369e51ceebe85cb8217bf3&oe=5C36577D');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  grid-column: full-start / full-end;
  padding: 8rem;
  padding-top: 4rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  /* grid-template-rows: 6rem 6rem auto;
  grid-template-columns: max-content;
  grid-row-gap: 1.5rem; */
  justify-content: center;
  align-items: center;
`

export const Btn = styled.button `
    align-self: start;
    justify-self: start;
    margin-right: auto;
    margin-left: auto;
    background-color: #c69963;
    color: #fff;
    border: none;
    border-radius: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: #B28451;
    }
`

export const HeadingOne = styled.h1 `
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 5.5rem;
  line-height: 1;
  color: #f9f7f6;
`
export const HeadingThree = styled.h3 `
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 2.6rem;
  text-transform: uppercase;
  color: #c69963;
`

export default Header