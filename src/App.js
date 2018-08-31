import React, {Component} from 'react';

import Container from './components/Container'
import Sidebar, {NavBtn} from './components/Sidebar';
import Header, {Btn, HeadingOne, HeadingThree} from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Tools from './components/Tools';
import Footer, {FooterNav, NavItem, NavLink, Copyright} from './components/Footer';
import ProjectCard, {H4Dark, Icons} from './components/ProjectCard';

class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar>
          <NavBtn/>
        </Sidebar>
        <Header>
          <HeadingOne>Phanousit Syhakhom</HeadingOne>
          <HeadingThree>Full Stack Developer</HeadingThree>
          <Btn>View my projects</Btn>
        </Header>
        {/* <Skills>skills</Skills> */}
        <About>Lorem ipsum dolor amet air plant portland microdosing meditation, forage
          viral crucifix ramps roof party pour-over chia occupy before they sold out
          semiotics mumblecore. Art party wolf next level man bun keffiyeh pickled. Blue
          bottle man braid mlkshk la croix truffaut kombucha quinoa banjo kale chips
          listicle mustache celiac tattooed retro tbh. Four loko austin freegan tbh
          fashion axe. Actually williamsburg slow-carb, quinoa glossier pinterest yr man
          braid lumbersexual. Bushwick literally meditation, butcher kitsch godard craft
          beer affogato austin raclette mlkshk. Hella ennui bespoke mixtape.
        </About>
        <Projects>
          <ProjectCard>
            <img
              src="https://static1.squarespace.com/static/5515b73ce4b08ae213e3adca/5515c9fce4b090722faacf8f/5515cbade4b0bd42714aa605/1427491851416/?format=1500w"
              alt="whatsstack project"/>
            <H4Dark>Whats Stack</H4Dark>
            <p>React-native encrypted chat app.</p>
            <Icons>
              <ul>
                <li>
                  <a href="https://github.com/the-four-o-fours/WhatsStackIOS">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </Icons>
          </ProjectCard>
          <ProjectCard>
            <img
              src="https://static1.squarespace.com/static/5515b73ce4b08ae213e3adca/5515c9fce4b090722faacf8f/5515cbade4b0bd42714aa605/1427491851416/?format=1500w"
              alt="whatsstack project"/>
            <H4Dark>Vote Dapp</H4Dark>
            <p>Decentralized vote app built on the Ethereum block chain</p>
            <Icons>
              <ul>
                <li>
                  <a href="https://github.com/Siameseguy/Votedapp">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Siameseguy/Votedapp">
                    <i class="fab fa-chrome"></i>
                  </a>
                </li>
              </ul>
            </Icons>
          </ProjectCard>
          <ProjectCard>
            <img
              src="https://static1.squarespace.com/static/5515b73ce4b08ae213e3adca/5515c9fce4b090722faacf8f/5515cbade4b0bd42714aa605/1427491851416/?format=1500w"
              alt="whatsstack project"/>
            <H4Dark>Game Stacked</H4Dark>
            <p>React e-commerce site.</p>
            <Icons>
              <ul>
                <li>
                  <a href="https://github.com/Seal-Team-Six/gamesstacked">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="http://gamesstacked.herokuapp.com/">
                    <i class="fab fa-chrome"></i>
                  </a>
                </li>
              </ul>
            </Icons>
          </ProjectCard>
        </Projects>
        {/* <Tools>Tools</Tools>
        <Testimonials>Testimonials</Testimonials> */}
        <Footer>
          <FooterNav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
          </FooterNav>
          <Copyright>&copy; {(new Date()).getFullYear() + ' '}
            by Phanousit Syhakhom</Copyright>
        </Footer>
      </Container>
    );
  }
}

export default App;
