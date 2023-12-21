import { useEffect, useState } from "react";
import { ProgramIndex } from "./ProgramIndex";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { ProgramShow } from "./ProgramShow";
import { DayShow } from "./DayShow";

export function Content() {
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const [day, setDay] = useState({});

  const handleIndexPrograms = () => {
    axios.get("http://localhost:3000/programs.json").then((response) => {
      console.log(response.data);
      setPrograms(response.data);
    });
  };

  const handleShowProgram = (id) => {
    axios.get(`http://localhost:3000/programs/${id}.json`).then((response) => {
      console.log(response.data);
      setProgram(response.data);
    });
  };

  const handleShowDay = (id) => {
    axios.get(`http://localhost:3000/days/${id}.json`).then((response) => {
      console.log(response.data);
      setDay(response.data);
    });
  };

  const handleCreateProgram = (params) => {
    axios.post("http://localhost:3000/programs.json", params).then((response) => {
      console.log(response.data);
      setProgram(response.data);
    });
  };

  const handleCreateDay = (params) => {
    axios.post("http://localhost:3000/days.json", params).then((response) => {
      console.log(response.data);
      setDay(response.data);
    });
  };

  useEffect(handleIndexPrograms, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProgramIndex programs={programs} onShowProgram={handleShowProgram} onCreateProgram={handleCreateProgram} />
          }
        />
        <Route
          path="/program"
          element={<ProgramShow program={program} onShowDay={handleShowDay} onCreateDay={handleCreateDay} />}
        />
        <Route path="/day" element={<DayShow day={day} />} />
      </Routes>
    </div>
  );
}
