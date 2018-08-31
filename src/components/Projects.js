import styled from 'styled-components'

const Projects = styled.section `
  grid-column: full-start / full-end;
  margin: 15rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
`

export default Projects