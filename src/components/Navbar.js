import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  background-color: #065F46;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  svg {
    width: 32px;
    height: 33px;
    fill: white;
    margin-right: 8px;
  }
  
  span {
    font-size: 20px;
    color: white;
  }
`;

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #FFA824;
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -100%; 
    width: 100%;
    height: 2px;
    background-color: #FFA824;
  }
`;

const AuthButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-top: 16px;
    margin-left: 0;
  }
`;

const AuthButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
`;

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <NavBarWrapper>
      <Logo>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19.4375" y="3.44281" width="22.6204" height="4.86884" transform="rotate(135 19.4375 3.44281)" fill="white"/>
          <path d="M16.0703 19.5121L12.563 16.0049L16.0703 16.0049L19.5131 16.0694L16.0703 19.5121Z" fill="white"/>
          <rect x="15.9961" y="32.0103" width="22.6204" height="4.86884" transform="rotate(-135 15.9961 32.0103)" fill="white"/>
          <rect x="32" y="16.0049" width="22.6204" height="4.86884" transform="rotate(135 32 16.0049)" fill="white"/>
        </svg>
        <span>CV Zaman Now</span>
      </Logo>
      <NavItemsWrapper>
        <NavItem
          href="#"
          className={activeNavItem === 'home' ? 'active' : ''}
          onClick={() => handleNavItemClick('home')}
        >
          Home
        </NavItem>
        <NavItem
          href="#"
          className={activeNavItem === 'about' ? 'active' : ''}
          onClick={() => handleNavItemClick('about')}
        >
          About Us
        </NavItem>
        <NavItem
          href="#"
          className={activeNavItem === 'cv' ? 'active' : ''}
          onClick={() => handleNavItemClick('cv')}
        >
          Buat CV
        </NavItem>
        <NavItem
          href="#"
          className={activeNavItem === 'surat' ? 'active' : ''}
          onClick={() => handleNavItemClick('surat')}
        >
          Surat Lamaran
        </NavItem>
      </NavItemsWrapper>
      <AuthButtonsWrapper>
        <AuthButton>
          Daftar
        </AuthButton>
        <AuthButton>Login</AuthButton>
      </AuthButtonsWrapper>
    </NavBarWrapper>
  );
};

export default Navbar;
