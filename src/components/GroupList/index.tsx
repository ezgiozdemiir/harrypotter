import React from "react";
import { ICharacterModel } from "../../libs/models/character.model";
import "./GroupList.scss";
import GroupItem from "../GroupItem";
import { Link } from "react-router-dom";

type TProps = {
  characters: ICharacterModel[];
};

const GroupList = ({ characters }: TProps) => {
  const characterNames = characters.reduce(
    (char: any, item: ICharacterModel) => {
      char[item.name] = "";
      return char;
    },
    {}
  );
  return (
    <>
      {Object.keys(characterNames).map((char) => (
        <li key={char}>
          <Link to={`/characters/${char.replace(" ", "").toLowerCase()}`}>
            <GroupItem character={char} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default GroupList;
