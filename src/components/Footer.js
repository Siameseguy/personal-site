import styled from 'styled-components'

const Footer = styled.footer `
  background-color: #094074;
  grid-column: full-start / full-end;
  padding: 8rem;
`

export const FooterNav = styled.ul `
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  align-items: center;
`

export const NavItem = styled.li `
  text-align: center;
`

export const NavLink = styled.a `
  color: #fff;
  &:link, a:visited {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    padding: 1.5rem;
    display: block;
  }

  &:hover, &:active {
    background-color: rgba(255, 255, 255, .05);
    transform: translateY(-3px);
  }
`

export const Copyright = styled.p `
  font-size: 1.34rem;
  color: #aaa;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 70%;
`

export default Footer
