import React from "react";
import styled from "styled-components";

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
  :hover {
    background-color: #dd5353;
    color: white;
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

export default function (props) {
  const { favouriteCharacterArray, data } = props;

  return (
    <StyledCharactersDiv>
      {favouriteCharacterArray.map((character) => {
        for (let i = 0; i < data.length; i++) {
          if (character === data[i]["name"]) {
            let character = data[i];
            return (
              <StyledCharacter>
                <StyledImg src={character.thumbnail} />
                <p>{character.name}</p>
                <p>{character.nickname}</p>
                <p>{character.description}</p>
                <ul>
                  {character.movies.map((movie) => (
                    <li>{movie}</li>
                  ))}
                </ul>
              </StyledCharacter>
            );
          }
        }
      })}
    </StyledCharactersDiv>
  );
}
