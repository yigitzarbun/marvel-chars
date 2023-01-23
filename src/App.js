import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Favourites from "./components/Favourites";
import Form from "./components/Form";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // states section
  const [data, setData] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [favouriteCharacterArray, setFavouriteCharacterArray] = useState([]);

  // get data section
  useEffect(() => {
    axios
      .get("/local-json/data.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // handles section
  const handleSelectedCharacter = (event) => {
    data.map((item) => {
      if (item.name === event.target.name) {
        setSelectedCharacter(item);
      }
    });
  };

  const removeSelection = () => {
    setSelectedCharacter("");
  };

  const handleFavouriteCharactersArray = (event) => {
    let savedArr = favouriteCharacterArray;
    if (savedArr.includes(event.target.name) === false) {
      savedArr.push(event.target.name);
      setFavouriteCharacterArray([...savedArr]);
    }
  };

  // UI section
  return (
    <div>
      <Header
        setSearchedCharacter={setSearchedCharacter}
        searchedCharacter={searchedCharacter}
      />
      <Character
        selectedCharacter={selectedCharacter}
        removeSelection={removeSelection}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Characters
              data={data}
              searchedCharacter={searchedCharacter}
              handleSelectedCharacter={handleSelectedCharacter}
              handleFavouriteCharactersArray={handleFavouriteCharactersArray}
            />
          }
        />
        <Route
          path="favourites"
          element={
            <Favourites
              favouriteCharacterArray={favouriteCharacterArray}
              data={data}
            />
          }
        />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
