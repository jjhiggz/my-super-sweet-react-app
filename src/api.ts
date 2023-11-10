import { Character } from "./types";

export const Api = {
  fetchAllCharacters: (): Promise<Character[]> =>
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => data.results),
};
