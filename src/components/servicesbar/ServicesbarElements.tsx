import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const ServiceBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  box-sizing: border-box;
  text-adjust: 100%;
  margin-bottom: 30px;
`

export const ServiceBarIcon = styled.i`
  font-size: 30px;
  box-sizing: border-box;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  align-items: center;
  background-color: #f2f3f5;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  display: inline-flex;
  padding: 10px 18px;
  font-size: 15px;
  border-radius: 50px;
  height: 56px;
  text-decoration: none;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    border-top: 1px solid black;
    background: black;
    width: 100%;
    z-index: -1;
  }
`
export const ServiceItem = styled(Link)`
  display: block;
  position: relative;
  text-align: center;
  flex: 1;
  text-decoration: none;
  color: #000000;
  &.active {
    ${ServiceBarIcon} {
      color: #FFF;
      background-color: #0563bb;
    }
  }
`

export const ServiceItemTitle = styled.p`
  margin: 0.5em 0;
`

export const TechIconsContainer = styled.div`
  max-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: inline-flex;
  padding: 10px 18px;
  margin-bottom: 8px;
  justify-content: center;
  font-size: 200%;
`

export const TechContent = styled.p`
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const TechIcon = styled.i`
  box-sizing: border-box;
  align-items: center;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  filter: saturate(0);
  margin: 10px 5%;
  img {
    height: 1em;
  }
`
