import React, { useState } from "react";
import Calendar from "./Calender";
import CheckboxGroup from "./CheckboxGroup";

import Slider from "./Slider";

const AdvancedSearch = () => {
  const [salary, setSalary] = useState([400000]);
  const [age, setAge] = useState([28]);
  const [overall, setOverall] = useState([60]);
  const [skillMoves, setSkillMoves] = useState([60]);
  const [defending, setDefending] = useState([60]);
  const [dribbling, setDribbling] = useState([60]);
  const [pace, setPace] = useState([60]);
  const [countries, setCountries] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [dob, setDob] = useState(new Date(1970, 12, 1));

  return (
    <div className="flex flex-col w-full bg-black">
      <h2 className="text-center text-xl text-yellow-400">Advanced Scouting</h2>

      <div className="flex mt-10 justify-evenly">
        <div className="flex ml-6 ">
          <CheckboxGroup
            field="Select Country"
            itemsArray={countryNames}
            setFinalList={setCountries}
          />
          <CheckboxGroup
            field="Select Club"
            itemsArray={clubNames}
            setFinalList={setClubs}
          />
        </div>

        <div className="flex grid grid-cols-2 gap-x-4 gap-y-8 px-10 ">
          <div className="px-12 w-full p-4 border-4 border-indigo-900 rounded-lg text-white">
            <Calendar dob={dob} setDob={setDob} />
          </div>
          <Slider field="Age" value={age} setValue={setAge} max={52} step={1} />
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
    </div>
  );
};

export default AdvancedSearch;

const clubNames = [
  "Arsenal",
  "Manchester United",
  "Wolverhampton Wanderers",
  "Burnley",
  "Paris Saint-Germain",
  "Chelsea",
  "Borussia Mönchengladbach",
  "Newcastle United",
  "RCD Mallorca",
  "Everton",
  "Real Betis Balompié",
  "ESTAC Troyes",
  "Tottenham Hotspur",
  "TSG Hoffenheim",
  "VfB Stuttgart",
  "Southampton",
  "Brentford",
  "Brighton & Hove Albion",
  "Genoa",
  "CA Osasuna",
  "FC Barcelona",
  "Crystal Palace",
  "West Ham United",
  "RC Celta de Vigo",
  "Granada CF",
  "Norwich City",
  "Sevilla FC",
  "Villarreal CF",
  "Leicester City",
  "Real Madrid CF",
];

const countryNames = [
  "England",
  "Germany",
  "Spain",
  "France",
  "Argentina",
  "Brazil",
  "Japan",
  "Netherlands",
  "United States",
  "Poland",
  "China PR",
  "Sweden",
  "Norway",
  "Republic of Ireland",
  "Portugal",
  "Saudi Arabia",
  "Mexico",
  "Romania",
  "Italy",
  "Korea Republic",
  "Colombia",
  "Belgium",
  "Austria",
  "Denmark",
  "Scotland",
  "Turkey",
  "Uruguay",
  "Australia",
  "India",
  "Venezuela",
];
