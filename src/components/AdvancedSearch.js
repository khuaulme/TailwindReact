import React, { useState } from "react";
import Calendar from "./Calender";
import CheckboxGroup from "./CheckboxGroup";

import Slider from "./Slider";

const AdvancedSearch = () => {
  const [salary, setSalary] = useState([100]);
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
      <h2 className="text-center text-xl text-white">
        Advanced Scouting - Atlas Search Soccer
      </h2>

      <div className="flex mt-10">
        <div className="flex flex-col ml-20 w-1/5 space-y-10">
          <div className="px-12">
            <Calendar dob={dob} setDob={setDob} />
          </div>
          <CheckboxGroup
            field="Select Country"
            itemsArray={["United States", "Germany", "France"]}
            setFinalList={setCountries}
          />
          <CheckboxGroup
            field="Select Club"
            itemsArray={["Paris Saint-Germain", "Bayern Munich", "Real Madrid"]}
            setFinalList={setClubs}
          />
        </div>

        <div className="flex grid grid-cols-3 gap-x-4 gap-y-8 px-10 w-3/5">
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
