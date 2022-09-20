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
  FaFileAlt
} from 'react-icons/fa'

export function Navbar () {
  return (
    <Header>

      <NavMenu>

        <NavItem>
          <NavLink to='/'>
            <NavIcon>
              <FaHome />
            </NavIcon>
            <span>Home</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='/about'>
            <NavIcon>
              <FaUser />
            </NavIcon>
            <span>About</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='/resume'>
            <NavIcon>
              <FaFileAlt />
            </NavIcon>
            <span>Resume</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='/portfolio'>
            <NavIcon>
              <FaBriefcase />
            </NavIcon>
            <span>Portfolio</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='/services'>
            <NavIcon>
              <FaCode />
            </NavIcon>
            <span>Services</span>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to='/contact'>
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
