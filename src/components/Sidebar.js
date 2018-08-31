import styled from 'styled-components'

const Sidebar = styled.div `
  background-color: #c69963;
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  display: flex;
  justify-content: center;
`

export const NavBtn = styled.button `
  border: none;
  border-radius: 0;

  background-color: #fff;
  height: 2px;

  &::before, &::after {
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    content: "";
    display: block;
  }

  &::before { transform: translateY(-1.5rem);}
  &::after {transform: translateY(1.3rem);}
`
export const Navigation = styled.div `
  &__checkbox {
    background-color: #000;
  }
`
export const NavigationCheckbox = styled.input `
  display: none;

`
export const NavigationButton = styled.label `
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .1);
`
export const NavigationBackground = styled.div `
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(green, blue);
  z-index: 1000;

  /* transform: scale(80); */
`
export const NavigationNav = styled.nav `
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;

  opacity: 0;
  width: 0;
`
export const NavigationList = styled.ul `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`
export const NavigationItem = styled.li `
  
`
export const NavigationLink = styled.a `
  &:link, &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent, transparent, #fff);
    background-size: 220%;
    transition: all 4s;

    span {
      margin-right: 1.5rem;
      display: inline-block;
    }
  }

  &:hover, &:active {
    background-position: 100%;
    color: #c69963;
    transform: translateX(1rem);
  }
`

export default Sidebar