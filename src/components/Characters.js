import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledCharactersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  row-gap: 5vh;
`;

const StyledCharacter = styled.div`
  width: 30%;
  padding: 1rem;
  :hover {
    border: 0.2rem solid white;
    border-radius: 10px;
  }
`;
const StyledImg = styled.img`
  width: 15vw;
`;
const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const StyledMoreButton = styled.button`
  width: 30%;
  background-color: #dd5353;
  border: none;
  border-radius: 20px;
  padding: 0.6rem;
  color: white;
  :hover {
    background-color: white;
    color: black;
    font-weight: bold;
    border: none;
  }
`;
const StyledFavButton = styled.button`
  width: 30%;
  :hover {
    background-color: black;
    color: white;
    border: 0.1rem solid white;
  }
`;
const StyledNoResult = styled.p`
  font-size: 2rem;
  margin: 0 auto;
`;
export default function Characters(props) {
  const {
    data,
    searchedCharacter,
    handleSelectedCharacter,
    handleFavouriteCharactersArray,
  } = props;

  return (
    <StyledCharactersDiv>
      {data
        .filter((item) => {
          if (item === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchedCharacter.toLowerCase())
          ) {
            return item;
          }
        })
        .map((character) => (
          <StyledCharacter id={character.id}>
            <StyledImg src={character.thumbnail}></StyledImg>
            <h2>{character.name}</h2>
            <StyledButtonsDiv>
              <StyledMoreButton
                onClick={handleSelectedCharacter}
                id={character.id}
                name={character.name}
              >
                See More
              </StyledMoreButton>
              <StyledFavButton
                onClick={handleFavouriteCharactersArray}
                id={character.id}
                name={character.name}
                nickname={character.nickname}
                description={character.description}
                thumbnail={character.thumbnail}
                movies={character.movies}
              >
                Add to Favourite
              </StyledFavButton>
            </StyledButtonsDiv>
          </StyledCharacter>
        ))}
      {data.length === 0 ||
      data.find((item) =>
        item.name.toLowerCase().includes(searchedCharacter.toLowerCase())
      ) === undefined ? (
        <StyledNoResult>No results</StyledNoResult>
      ) : null}
    </StyledCharactersDiv>
  );
}
