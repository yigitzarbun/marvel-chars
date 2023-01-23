import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header(props) {
  const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  `;
  const StyledLogo = styled.img`
    width: 15vw;
  `;
  const StyledNav = styled.nav`
    display: flex;
    column-gap: 3rem;
  `;

  const StyledNavElement = styled.p`
    color: white;
    :hover {
      color: #dd5353;
    }
  `;

  const StyledLink = styled.link`
    text-decoration: none;
  `;
  const StyledSearchBar = styled.input`
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;
    border: none;
    padding: 0.6rem;
    :hover {
      background-color: #dd5353;
      color: white;
    }
  `;
  const { searchedCharacter, setSearchedCharacter } = props;
  return (
    <StyledHeaderContainer>
      <StyledLogo
        src="https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2015.png"
        alt="logo"
      ></StyledLogo>
      <StyledNav>
        <StyledNavElement>
          <Link to="/" className="header-nav-link">
            Characters
          </Link>{" "}
        </StyledNavElement>
        <StyledNavElement>
          <Link to="favourites" className="header-nav-link">
            Favourite Characters
          </Link>
        </StyledNavElement>
        <StyledNavElement>
          <Link to="form" className="header-nav-link">
            Become a Marvel Character
          </Link>
        </StyledNavElement>
      </StyledNav>
      <StyledSearchBar
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchedCharacter(event.target.value);
        }}
        value={searchedCharacter}
        autoFocus
      ></StyledSearchBar>
    </StyledHeaderContainer>
  );
}
