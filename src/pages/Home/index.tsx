import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import fetcher from "../../libs/fetcher";
import { ICharacterModel } from "../../libs/models/character.model";
import "./Home.scss";
import { houseImages } from "../../components/HouseImages";
import GroupList from "../../components/GroupList";

const Home = () => {
  const [characters, setCharacters] = useState<ICharacterModel[] | null>(null);
  const fetchGroupChar = useCallback(async () => {
    try {
      const response = await fetcher("characters");
      const result = await response.json();
      setCharacters(result);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchGroupChar();
  }, [fetchGroupChar]);

  if (!characters?.length) {
    return null;
  }

  const houses: any = characters
    ?.filter((char) => !!char.house)
    ?.reduce((house: any, item: any) => {
      house[item.house] = "";
      return house;
    }, {});
  console.log(Object.keys(houses));

  return (
    <div className="Home">
      {Object.keys(houses).map((house: any) => {
        const allCharacters = characters.filter((char) => char.house === house);
        const src = houseImages.find((img) => img.alt === house)?.src;
        return (
          <div className={house} key={house}>
            <div className="emblem">
              <img src={src} alt="emblem" />
            </div>

            <div className="CharacterList">
              <GroupList characters={allCharacters} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
