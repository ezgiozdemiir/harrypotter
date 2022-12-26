export interface ICharacterModel {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: string | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: string[];
  patronus: string;
  hogwartsStudent: boolean;
  hogwarsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}
