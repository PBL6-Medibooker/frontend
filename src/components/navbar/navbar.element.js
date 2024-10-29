import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #00A6A9;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled.div`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 20%;
    height: 60%;

    .logo-image {
        width: 100%;
        height: 100%;
      object-fit: cover;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 120px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #00A6A9;
  }
`;

export const NavItem = styled.li`
  //height: 80px;
  //border-bottom: 2px solid transparent;
  font-size: 15px;
  display: inline-block;
  position: relative;
  
  &::after {
    content: '';
    width: 0;
    height: 2px;
    background: #fff;
    display: block;
    margin: auto;
    transition: width 0.5s;
  }

  &:hover::after{
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  //height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
 
`;

export const NavBtnLink2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
 
`;
export const GroupButtonLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavLinks2 = styled.p`
    color: #005A5C;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
        color: #fff;
        transition: all 0.3s ease;
        background-color: #00A6A9;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #fff;
            transition: all 0.3s ease;
        }
    }
`;


export const NavbarContainer2 = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const Nav2 = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
`;

export const NavItem2 = styled.li`

  font-size: 15px;
  display: inline-block;
  position: relative;
  



  .button {
    display: inline-block;
    margin: 4px 2px;
    background-color: #fff;
   padding-left: 32px;
    padding-right: 32px; 
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: black;
    text-decoration: none;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .button:hover {
    transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    background-color: #00A6A9;
    color: white;
  }

  .search-container {
    position: relative;
    display: inline-block;
    margin: 4px 2px;
    height: 40px;
    width: 40px;
    vertical-align: bottom;
  }

  .mglass {
    display: inline-block;
    pointer-events: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
  }

  .searchbutton {
    position: absolute;
    font-size: 22px;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .search:focus + .searchbutton {
    transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    background-color: #00A6A9;
    color: white;
  }

  .search {
    position: absolute;
    left: 49px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
    background-color: #00A6A9;
    outline: none;
    border: none;
    padding: 0;
    width: 0;
    height: 100%;
    z-index: 10;
    transition-duration: 0.4s;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    color: white
  }

  .search::placeholder {
    color: white; /* Change placeholder text color to white */
    opacity: 1; /* Ensures the color shows fully */
  }

  .search:focus {
    width: 201px; /* Bar width+1px */
    padding: 0 16px 0 0;
  }

  .expandright {
    left: auto;
    right: 39px; /* Button width-1px */
  }

  .expandright:focus {
    padding: 0 0 0 16px;
  }
  
  //&::after {
  //  content: '';
  //  width: 0;
  //  height: 2px;
  //  background: #fff;
  //  display: block;
  //  margin: auto;
  //  transition: width 0.5s;
  //}
  //
  //&:hover::after{
  //  width: 100%;
  //}

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
