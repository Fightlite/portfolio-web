import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
  z-index: 10;
  width: 100%;
  max-width: 1100px;
  height: 80px;
  background: ${({ scrollNav }) => scrollNav? 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)' : 'transparent'};

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
    padding: 0 36px;
    height: 80px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 16px;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 7 / 2 / 8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: relative;
    font-size: 2rem;
    align-items: center;
    align-self: center;
    cursor: pointer;
    transfrom: translate(100%, 60%);
  }
`

export const NavItem = styled(Link)`
  height: 80px;

`

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  font-weight: 500;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 5px;

  &:hover {
      background-color: #212d45;
      transform: scale(1.1);
      cursor: pointer;
    }
`