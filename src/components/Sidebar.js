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

export default Sidebar