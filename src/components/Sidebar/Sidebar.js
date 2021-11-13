import React from 'react'
import { Icon, SidebarContainer, CloseIcon, SidebarWrapper, SidebarMenu, SidebarItem, SidebarLink, IconsContainer, SocialIcons } from './SidebarStyles'
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarItem href='#about'>
                        <SidebarLink>About</SidebarLink>
                    </SidebarItem>
                    <SidebarItem href='#portfolio'>
                        <SidebarLink>Portfolio</SidebarLink>
                    </SidebarItem>
                    <SidebarItem href='#tech'>
                        <SidebarLink>Technology</SidebarLink>
                    </SidebarItem>
                    <SidebarItem href='#contact'>
                        <SidebarLink>Contact</SidebarLink>
                    </SidebarItem>
                </SidebarMenu>
                <IconsContainer>
                    <SocialIcons href='https://github.com/fightlite/' target='_blank'>
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                    <SocialIcons href='https://www.facebook.com/kimkibin09/' target='_blank'>
                        <AiFillFacebook size='3rem' />
                    </SocialIcons>
                    <SocialIcons href='https://instagram.com/nhantranfit/' target='_blank'>
                        <AiFillInstagram size='3rem' />
                    </SocialIcons>
                </IconsContainer>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
