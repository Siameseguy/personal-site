import styled from 'styled-components'

const ProjectCard = styled.div`
  padding: 1rem; 
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.2);
  
  p {
    font-size: 1.7rem;
  }
`

export const H4 = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
`

export const H4Light = styled(H4)`
  color: #f9f7f6;
`

export const H4Dark = styled(H4)`
  color: #54483a;
`

export const Icons = styled(ProjectCard)`
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  ul {
    list-style: none;
    li {
      text-align: center;
      display: inline-block;
      margin-right: 1rem;
      a {
        color: #5DFDCB;
        transition: .3s ease;
        &:hover {
          color: #7FDEFF;
        }
      }
    }
  }
`


export default ProjectCard
