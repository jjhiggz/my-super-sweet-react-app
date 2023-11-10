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
                backgroundColor: "yellowgreen",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "white",
                  margin: 0,
                }}
              >
                {character.name}
              </h3>
              <p style={{ fontSize: 20, color: "white", margin: 0 }}>
                Gender: {character.gender}
              </p>
              <p style={{ fontSize: 20, color: "white", margin: 0 }}>
                Status: {character.status}
              </p>
              <img
                src={character.image}
                alt={`image for ${character.name}`}
                style={{
                  border: "10px solid white",
                }}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};
