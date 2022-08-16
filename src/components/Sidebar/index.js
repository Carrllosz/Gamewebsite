import React from 'react'
import {SidebarContainer, Icon,CloseIcon,SidebarMenu,SidebarLink,SlideBtnWrap,SlidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon>
            </CloseIcon>
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Games</SidebarLink>
            <SidebarLink to='/'>Controles</SidebarLink>
            <SidebarLink to='/'>Menu Completo</SidebarLink>
        </SidebarMenu>
        <SlideBtnWrap>
            <SlidebarRoute to='/'>Peça Agora</SlidebarRoute>
        </SlideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar