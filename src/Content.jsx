import { useEffect, useState } from "react";
import { ProgramIndex } from "./ProgramIndex";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { ProgramShow } from "./ProgramShow";
import { DayShow } from "./DayShow";
import { Modal } from "./Modal";
import { ExerciseIndex } from "./ExerciseIndex";
import { ExerciseAdd } from "./ExerciseAdd";

export function Content() {
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const [day, setDay] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [exercises, setExercises] = useState([]);

  const handleModalShow = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

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
    localStorage.removeItem("dayId");
    axios.get(`http://localhost:3000/days/${id}.json`).then((response) => {
      console.log(response.data);
      setDay(response.data);
      localStorage.setItem("dayId", id);
    });
  };

  const handleIndexExercises = () => {
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleCreateProgram = (params) => {
    axios.post("http://localhost:3000/programs.json", params).then((response) => {
      console.log(response.data);
      setProgram(response.data);
    });
  };

  const handleCreateDay = (params) => {
    localStorage.removeItem("dayId");
    axios.post("http://localhost:3000/days.json", params).then((response) => {
      console.log(response.data);
      setDay(response.data);
      localStorage.setItem("dayId", response.data.id);
    });
  };

  const handleCreateExerciseDay = (params) => {
    axios.post("http://localhost:3000/exercise_days.json", params).then((response) => {
      console.log(response.data);
      setIsModalVisible(false);
      window.location.reload();
    });
  };

  const handleDestoryProgram = (program) => {
    axios.delete(`http://localhost:3000/programs/${program.id}.json`).then((response) => {
      console.log(response);
      setPrograms(programs.filter((p) => p.id !== program.id));
    });
  };

  const handleDestroyDay = (dayToDelete) => {
    axios.delete(`http://localhost:3000/days/${dayToDelete.id}.json`).then((response) => {
      console.log(response);
      setProgram((prevProgram) => {
        const updatedProgram = { ...prevProgram };
        updatedProgram.days = updatedProgram.days.filter((day) => day.id !== dayToDelete.id);
        return updatedProgram;
      });
    });
  };

  useEffect(handleIndexPrograms, []);
  useEffect(handleIndexExercises, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProgramIndex
              programs={programs}
              onShowProgram={handleShowProgram}
              onCreateProgram={handleCreateProgram}
              onDestroyProgram={handleDestoryProgram}
            />
          }
        />
        <Route
          path="/program"
          element={
            <ProgramShow
              program={program}
              onShowDay={handleShowDay}
              onCreateDay={handleCreateDay}
              onDestroyDay={handleDestroyDay}
            />
          }
        />
        <Route path="/day" element={<DayShow day={day} onShowDay={handleShowDay} onShowModal={handleModalShow} />} />
        <Route path="/exercises" element={<ExerciseIndex exercises={exercises} />} />
      </Routes>

      <Modal show={isModalVisible} onClose={handleModalClose}>
        <ExerciseAdd exercises={exercises} day={day} onCreateExerciseDay={handleCreateExerciseDay} />
      </Modal>
    </div>
  );
}
