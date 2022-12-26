import React from "react";
import { ICharacterModel } from "../../libs/models/character.model";
import { Link } from "react-router-dom";
import CharacterItem from "../CharacterItem/index";
import "./CharacterList.scss";

type TProps = {
  characters: ICharacterModel[];
};

const CharacterList = ({ characters }: TProps) => {
  return (
    <>
      <ul>
        {characters.map((char, index) => (
          <li key={char.actor + index}>
            <Link
              to={`/characters/${char.name.replace(" ", "").toLowerCase()}`}
            >
              <CharacterItem character={char} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
