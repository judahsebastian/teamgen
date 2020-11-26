import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const GenerateTeams = () => {
 
  const { players } = useContext(GlobalContext);
  const { populateTeam1 } = useContext(GlobalContext);
  const { populateTeam2 } = useContext(GlobalContext);

  let team1 = [];
  let team2 = [];
  let randomKey = 0;

  const randomizeTeams = (e) => {
    players.forEach((player) => {
      randomKey = Math.floor(Math.random() * 10) + 1;
      if (randomKey > 5 && team2.length < 5) {
        team2.push(player);
      } else {
        if (team1.length < 5) {
          team1.push(player);
        } else {
          team2.push(player);
        }
      }
    });

    populateTeam1(team1)
    populateTeam2(team2)

    
    team1 = [];
    team2 = [];

  };

  return (
    <>
      <button className="gen-teams" onClick={randomizeTeams}>
        Generate Teams
      </button>
    </>
  );
};


