import React, { useState } from "react";
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
const StyledButton = styled.button`
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
export default function Character(props) {
  const { selectedCharacter, removeSelection } = props;

  return (
    <StyledCharactersDiv>
      {selectedCharacter && (
        <StyledCharacter id={selectedCharacter.id}>
          <StyledImg src={selectedCharacter.thumbnail}></StyledImg>
          <h2>{selectedCharacter.name}</h2>
          <p>{selectedCharacter.nickname}</p>
          <p>{selectedCharacter.description}</p>
          <p>
            {" "}
            <h3>Movies</h3>
            {selectedCharacter.movies.map((item) => (
              <li>{item}</li>
            ))}
          </p>
          <StyledButton onClick={removeSelection}>See Less</StyledButton>
        </StyledCharacter>
      )}
    </StyledCharactersDiv>
  );
}
