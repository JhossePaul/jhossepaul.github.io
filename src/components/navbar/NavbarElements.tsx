import { Link, animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  height: 100%;
  line-height: 24px;
  z-index: 9997;
  padding: 15px;
  transition: all 0.5s;
`
export const NavMenu = styled.nav`
  display: block;
  align-items: center;
  padding: 0;
  border-box: box-sizing;
  flex-wrap: wrap;
  position: relative;
  text-align: start;
  text-size-adjust: 100%;
`

export const NavItem = styled.div`
  box-sizing: border-box;
  position: relative;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  text-size-adjust: 100%;
  text-align: left;
  background-color: transparent;
`

export const NavLink = styled(Link)`
  align-items: center;
  background-color: #f2f3f5;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.55);
  cursor: pointer;
  flex-direction: row;
  flex-wrap: wrap;
  display: inline-flex;
  padding: 10px 18px;
  margin-bottom: 8px;
  font-size: 15px;
  border-radius: 50px;
  height: 56px;
  text-decoration: none;
  span {
    display: none;
    text-size-adjust: 100%;
    white-space: nowrap;
    width: 0;
  }
  &:hover {
    color: #FFF;
    background-color: #0563bb;
    transition: 1s;
    span {
      display: block;
      padding: 0 5px 0 7px;
      width: auto;
    }
  }
  &.active {
    color: #FFF;
    background-color: #0563bb;
  }
`

export const NavIcon = styled.i`
  font-size: 20px;
  box-sizing: border-box;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
`
