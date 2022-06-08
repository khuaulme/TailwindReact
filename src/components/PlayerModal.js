import React from "react";

const PlayerModal = ({
  players,
  playerIndex,
  setShowPlayerModal,
  setPlayerIndex,
  addPlayerToTeam,
  position2Fill,
}) => {
  return (
    <div className="fixed inset-0 z-20 p-20 flex justify-center bg-slate-700 ">
      <div className="relative flex flex-col w-2/3 bg-gray-900 text-white border-2 border-white rounded pt-5">
        <div className="flex py-4 pl-2 pr-4">
        <div className="w-1/2">
          <img
            src={players[playerIndex].player_face_url}
            alt="player"
            className="object-contain w-full my-auto rounded"
          />
          <div className="flex flex-row justify-center p-2">
            <img
                src={players[playerIndex].nation_flag_url}
                alt="flag"
                className="object-contain w-12 my-auto rounded mr-2"
            />
            <img
                src={players[playerIndex].club_logo_url}
                alt="club"
                className="object-contain w-12 my-auto rounded-full"
            />
          </div>
          </div>
          <div className="flex flex-col ml-6 text-2xl flex-grow">
            <div> Name: {players[playerIndex].long_name}</div>
            <div> Club Jersey Number: {players[playerIndex].club_jersey_number}</div>
            <div> Club: {players[playerIndex].club_name}</div>
            <div>
              {" "}
              National Jersey Number: {players[playerIndex].nation_jersey_number}
            </div>
            <div> Nationality: {players[playerIndex].nationality_name}</div>
            <div> Overall{players[playerIndex].overall}</div>
            <div> Pace: {players[playerIndex].pace}</div>
            <div> Dribbling: {players[playerIndex].dribbling}</div>
            <div> Shooting: {players[playerIndex].shooting}</div>
            <div> Defending: {players[playerIndex].defending}</div>
            <div> Physical: {players[playerIndex].physic}</div>
            <div> Skill Moves: {players[playerIndex].skill_moves}</div>
            <div> Weak Foot:{players[playerIndex].weak_foot}</div>
            <div>DOB: {players[playerIndex].dob}</div>
            <div>WAGE_EUR: {players[playerIndex].wage_eur}</div>
            <div>AGE: {players[playerIndex].age}</div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 ml-3 mb-3"
          onClick={() => {
            setShowPlayerModal(false);
            setPlayerIndex(-100);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            viewBox="0 0 20 20"
            fill="#ff0000"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-0 right-0 mr-3 mb-3"
          onClick={() => {
            console.log("CLICK ADD PLAYER: ", players[playerIndex].short_name);
            addPlayerToTeam(players[playerIndex], position2Fill);
            setShowPlayerModal(false);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            viewBox="0 0 20 20"
            fill="#00ED64"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
