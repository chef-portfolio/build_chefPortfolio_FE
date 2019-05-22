import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar(){
    return(
        <Nav>
            <div>
                <NavLink exact to='/'>
                    Home
                </NavLink>
                <NavLink to='/manage'>Manage Recipes</NavLink>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px 0 black;
  div {
    margin: 0 auto;
    width: 85%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 20px;
      text-decoration: none;
    }
    .active {
      text-decoration: underline;
    }
  }
`;
