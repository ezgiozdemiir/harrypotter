import React from "react";
import CharacterItem from "../../components/CharacterItem";
import { ICharacterModel } from "../../libs/models/character.model";
import { useEffect, useState, useCallback } from "react";
import fetcher from "../../libs/fetcher";
import { useParams } from "react-router-dom";
import "./CharacterDetails.scss";

const CharacterDetails = () => {
  const { charName } = useParams();
  const [characters, setCharacters] = useState<ICharacterModel[]>([]);
  const fetchCharacters = useCallback(async () => {
    try {
      const response = await fetcher("characters");
      const result = await response.json();
      setCharacters(result);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  if (!characters.length) {
    return null;
  }
  return (
    <div className="character-details">
      {charName &&
        characters
          .filter(
            (char: ICharacterModel) =>
              char.name.replace(" ", "").toLowerCase() === charName
          )
          .map((character, index) => (
            <CharacterItem key={character.name + index} character={character} />
          ))}
    </div>
  );
};

export default CharacterDetails;
