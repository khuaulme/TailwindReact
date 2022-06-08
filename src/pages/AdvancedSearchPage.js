import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckboxGroup from "../components/CheckboxGroup";

import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";

const AdvancedSearchPage = () => {
  let navigate = useNavigate();

  const [salary, setSalary] = useState([100]);
  const [overall, setOverall] = useState([60]);
  const [skillMoves, setSkillMoves] = useState([60]);
  const [defending, setDefending] = useState([60]);
  const [dribbling, setDribbling] = useState([60]);
  const [pace, setPace] = useState([60]);

  return (
    <div className="flex flex-col relative w-full min-h-screen bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2}
        onClick={() => navigate("/")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      {/* <div className="absolute top-0">
        <img
          src="https://images.unsplash.com/photo-1602472097151-72eeec7a3185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
          alt="ball"
          className=" w-full h-full object-cover"
        />
      </div> */}
      <h2 className="text-center text-4xl z-10 text-green-400">
        Advanced Scouting - Atlas Search Soccer
      </h2>
      <div className="flex mx-20 w-full justify-evenly mt-4">
        <SearchBar
        // searchTerm={searchTerm}
        // setSearchTerm={setSearchTerm}
        // operator={operator}
        // setOperator={setOperator}
        // setSubmitted={setSubmitted}
        // showAutocompletePlayers={showAutocompletePlayers}
        // setShowAutocompletePlayers={setShowAutocompletePlayers}
        // players={players}
        // addPlayerToTeam={addPlayerToTeam}
        // position2Fill={position2Fill}
        />
      </div>
      <CheckboxGroup
        field="Select Country"
        itemsArray={["United States", "Germany", "France"]}
      />
      <div className="space-y-4">
        <Slider
          field="Salary (euros)"
          value={salary}
          setValue={setSalary}
          max={2000000}
          step={1000}
        />
        <Slider
          field="Overall"
          value={overall}
          setValue={setOverall}
          max={100}
          step={1}
        />
        <Slider
          field="Skills"
          value={skillMoves}
          setValue={setSkillMoves}
          step={1}
          max={100}
        />
        <Slider
          field="Pace"
          value={pace}
          setValue={setPace}
          max={100}
          step={1}
        />
        <Slider
          field="Defending"
          value={defending}
          setValue={setDefending}
          max={100}
          step={1}
        />{" "}
        <Slider
          field="Dribbling"
          value={dribbling}
          setValue={setDribbling}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
};

export default AdvancedSearchPage;
