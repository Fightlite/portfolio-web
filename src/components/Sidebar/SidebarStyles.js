import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link';


export const SidebarContainer = styled.aside`
    display: none;

@media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0B1221;
    z-index: 999;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;
    opacity: ${({ isOpen }) => (isOpen? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen? '0' : '-100%')};
}
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    cursor: pointer;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
`
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 100px);
    text-align: center;
`

export const SidebarItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const SidebarLink = styled.a`
    text-decoration: none;
    list-style: none;
    font-size: 2rem;
    font-weight: 500;
    line-height: 32px;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #fff;
      opacity: 1;
      cursor: pointer;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SocialIcons = styled.a`
  transition: 0.2s ease;
  color: white;
  border-radius: 50px;
  padding: 5px;
  margin: 0 20px;

  &:hover {
      background-color: #212d45;
      transform: scale(1.1);
      cursor: pointer;
    }
`