import {
  Header,
  NavLink,
  NavMenu,
  NavIcon,
  NavItem,
} from './NavbarElements'

import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFileAlt,
} from 'react-icons/fa'

export function Navbar () {
  return (
    <Header>

      <NavMenu>

        <NavItem>
          <NavLink to='home' activeClass='active' spy smooth offset={-70} duration={500}>
            <NavIcon>
              <FaHome />
            </NavIcon>
            <span>Home</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='about' activeClass='active' spy smooth offset={-70} duration={500}>
            <NavIcon>
              <FaUser />
            </NavIcon>
            <span>About</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='resume' activeClass='active' spy smooth offset={-70} duration={500}>
            <NavIcon>
              <FaFileAlt />
            </NavIcon>
            <span>Resume</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='services' activeClass='active' spy smooth offset={-70} duration={500}>
            <NavIcon>
              <FaCode />
            </NavIcon>
            <span>Services</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='portfolio' activeClass='active' spy smooth offset={-70} duration={500}>
            <NavIcon>
              <FaBriefcase />
            </NavIcon>
            <span>Portfolio</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='contact' activeClass='active' spy smooth offset={-70} duration={500}>
            <NavIcon>
              <FaEnvelope />
            </NavIcon>
            <span>Contact</span>
          </NavLink>
        </NavItem>

      </NavMenu>
    </Header>
  )
}
