import React from "react";
import { ICharacterModel } from "../../libs/models/character.model";
import "./CharacterItem.scss";
import { houseImages } from "../../components/HouseImages";
import dummyPhoto from "../../assets/pictures/dummy-photo.png";
import seperator from "../../assets/pictures/seperator.png";
type TProps = {
  character: ICharacterModel;
};

const CharacterItem = ({ character }: TProps) => {
  const source =
    houseImages.find((house) => house.alt === character.house)?.src ||
    dummyPhoto;
  return (
    <div className="CharacterItem">
      <div className="picture">
        <img
          src={character.image ? character.image : source}
          alt={character.name}
        />
      </div>
      <div className="seperator">
        <img src={seperator} alt="seperator" />
      </div>

      <div className="name">
        <label>Name, Surname: </label>
        <span>{character.name ? character.name : "-"}</span>
      </div>

      <div className="species">
        <label>Species: </label>
        <span>{character.species ? character.species : "-"}</span>
      </div>

      <div className="actor">
        <label>Actor: </label>
        <span>{character.actor ? character.actor : "-"}</span>
      </div>

      <div className="gender">
        <label>Gender: </label>
        <span>{character.gender ? character.gender : "-"}</span>
      </div>

      <div className="house">
        <label>House: </label>
        <span>{character.house ? character.house : "-"}</span>
      </div>

      <div className="dateOfBirth">
        <label>Date of Birth: </label>
        <span>{character.dateOfBirth ? character.dateOfBirth : "-"}</span>
      </div>

      <div className="wizard">
        <label>Wizard or not?: </label>
        <span>{character.wizard ? "wizard" : "not a wizard"}</span>
      </div>

      <div className="alive">
        <label>Alive or not?: </label>
        <span>{character.alive ? "alive" : "dead"}</span>
      </div>

      <div className="ancestry">
        <label>Ancestry: </label>
        <span>{character.ancestry ? character.ancestry : "-"}</span>
      </div>

      <div className="eyecolor">
        <label>Eye Color: </label>
        <span>{character.eyeColour ? character.eyeColour : "-"}</span>
      </div>

      <div className="haircolor">
        <label>Hair Color: </label>
        <span>{character.hairColour ? character.hairColour : "-"}</span>
      </div>

      {/* <div className="wand">
        <label>Wand: </label>
        <span>{character.wand.length}</span>
      </div> */}

      <div className="patronus">
        <label>Patronus: </label>
        <span>{character.patronus ? character.patronus : "-"}</span>
      </div>
    </div>
  );
};

export default CharacterItem;
