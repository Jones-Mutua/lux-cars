import React ,{useState, useEffect}from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import {slide as Menu} from "react-burger-menu"
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";
import { useHistory } from "react-router-dom";
import getCurrentUser from "../../../lib/auth";

const ListContainer = styled.ul`
 ${tw`flex list-none `}

 `;
const NavItem = styled.li<{ menu?: any }>`
 ${tw`mr-1 text-sm font-medium text-black transition duration-300 ease-in-out cursor-pointer md:text-base md:mr-5 hover:text-gray-700`}
 
 ${({ menu }) => menu && css`
${tw`mb-3 text-xl text-white focus:text-white `};
`};
 `;
 
export function NavItems() {
 const [user, setUser] = useState(null);
 const history = useHistory();

 const handleLogoutClick = (e: React.FormEvent) => {
     localStorage.removeItem("user");
     history.push("/");
     window.location.reload();
 };
 

 useEffect(() => {
     const user = getCurrentUser();

     if(user) {
         setUser(user);
     }
 }, []);


    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm})
    if (isMobile)
    return (
        <Menu  right styles={menuStyle}>
        <ListContainer>
        <NavItem menu>
            <a href="/">Home</a>
        </NavItem>
        
      <NavItem menu>
          <a href="/rentals">Rentals</a>
      </NavItem>
      <NavItem menu>
          <a href="/about">About</a>
      </NavItem>
     
      {
          !user && (
              <>
                <NavItem menu>
          <a href="/contact">Register</a>
      </NavItem>
      <NavItem menu>
          <a href="/login">Login</a>
      </NavItem>
              </>
          )}
          {
              user && (
                  <li>
                      <span style={{
                          cursor: 'pointer',
                      }}
                      onClick={handleLogoutClick}
                      >
                          Logout
                      </span>
                  </li>
              )
          }
      
     
    </ListContainer>
    </Menu>
    );
    return (
    <ListContainer>
        <NavItem>
            <a href="/">Home</a>
        </NavItem>
        
      <NavItem>
          <a href="/rentals">Rentals</a>
      </NavItem>
      <NavItem>
          <a href="/about">About</a>
      </NavItem>
      
      
      {
          !user && (
              <>
                <NavItem menu>
          <a href="/contact">Register</a>
      </NavItem>
      <NavItem menu>
          <a href="/login">Login</a>
      </NavItem>
              </>
          )}
          {
              user && (
                  <li>
                      <span style={{
                          cursor: 'pointer',
                      }}
                      onClick={handleLogoutClick}
                      >
                          Logout
                      </span>
                  </li>
              )
          }
      
     
    </ListContainer>
    )
}



