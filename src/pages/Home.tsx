import { useEffect, useState } from "react";
import { Api } from "../api";
import { Character } from "../types";

export const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    Api.fetchAllCharacters().then(setCharacters);
  }, []);
  return (
    <div>
      <h1>Home</h1>

      <section
        className="characters-section"
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "tomato",
          justifyContent: "space-between",
        }}
      >
        {characters.map((character) => {
          return (
            <div
              style={{
                backgroundColor: "khaki",
                padding: 10,
                border: "10px solid black",
              }}
            >
              <h3>{character.name}</h3>
              <img src={character.image} alt={`image for ${character.name}`} />
            </div>
          );
        })}
      </section>
    </div>
  );
};
