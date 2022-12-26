import React from "react";
import { ICharacterModel } from "../../libs/models/character.model";
import { useState, useEffect, useCallback } from "react";
import fetcher from "../../libs/fetcher";
import CharacterList from "../../components/CharacterList";
import "./Characters.scss";
import SearchInput from "../../components/SearchInput";

const Characters = () => {
  const [characters, setCharacters] = useState<ICharacterModel[]>([]);
  const [filterChar, setFilterChar] = useState<ICharacterModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchCharacters = useCallback(async () => {
    try {
      const response = await fetcher("characters");
      const result = await response.json();
      setCharacters(result);
    } catch (err) {}
  }, []);

  const onChangeSearchInputHandler = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  useEffect(() => {
    setFilterChar(() => {
      return characters.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.actor.toLowerCase().includes(searchTerm)
      );
    });
  }, [searchTerm, characters]);

  if (!characters) {
    return null;
  }
  return (
    <>
      <div>
        <SearchInput
          value={searchTerm}
          onChange={(value) => onChangeSearchInputHandler(value)}
        />
      </div>
      <div className="characters">
        <CharacterList
          characters={filterChar.length ? filterChar : characters}
        />
      </div>
    </>
  );
};

export default Characters;
