import { useEffect, useState } from "react";
import { ProgramIndex } from "./ProgramIndex";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { ProgramShow } from "./ProgramShow";
import { DayShow } from "./DayShow";
import { Modal } from "./Modal";
import { ExerciseIndex } from "./ExerciseIndex";
import { ExerciseAdd } from "./ExerciseAdd";
import { SignUp } from "./SignUp";
import { ExerciseShow } from "./ExerciseShow";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Content() {
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const [day, setDay] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [errors, setErrors] = useState([]);
  const [exercise, setExercise] = useState({});
  const navigate = useNavigate();

  const handleModalShow = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleIndexPrograms = () => {
    axios.get("/programs.json").then((response) => {
      console.log(response.data);
      setPrograms(response.data);
    });
  };

  const handleShowProgram = (id) => {
    axios.get(`/programs/${id}.json`).then((response) => {
      console.log(response.data);
      setProgram(response.data);
    });
  };

  const handleShowDay = (params) => {
    localStorage.removeItem("dayId");
    axios.get(`/exercise_days.json`, { params }).then((response) => {
      console.log(response.data);
      setDay(response.data);
      localStorage.setItem("dayId", params.day_id);
    });
  };

  const handleIndexExercises = () => {
    axios.get("/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleCreateProgram = (params) => {
    axios.post("/programs.json", params).then((response) => {
      console.log(response.data);
      setProgram(response.data);
    });
  };

  const handleCreateDay = (params) => {
    localStorage.removeItem("dayId");
    axios.post("/days.json", params).then((response) => {
      console.log(response.data);
      setDay(response.data);
      localStorage.setItem("dayId", response.data.id);
    });
  };

  const handleCreateExerciseDay = (params) => {
    axios.post("/exercise_days.json", params).then((response) => {
      console.log(response.data);
      setIsModalVisible(false);
      window.location.reload();
    });
  };

  const handleDestoryProgram = (program) => {
    axios.delete(`/programs/${program.id}.json`).then((response) => {
      console.log(response);
      setPrograms(programs.filter((p) => p.id !== program.id));
    });
  };

  const handleDestroyDay = (dayToDelete) => {
    axios.delete(`/days/${dayToDelete.id}.json`).then((response) => {
      console.log(response);
      setProgram((prevProgram) => {
        const updatedProgram = { ...prevProgram };
        updatedProgram.days = updatedProgram.days.filter((day) => day.id !== dayToDelete.id);
        return updatedProgram;
      });
    });
  };

  const handleDestroyExerciseDay = (id) => {
    axios.delete(`/exercise_days/${id}.json`).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  const handleLogin = (params) => {
    console.log("submitting login form");
    setErrors([]);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  const handleShowExercise = (id) => {
    axios.get(`/exercises/${id}.json`).then((response) => {
      console.log(response.data);
      setExercise(response.data);
      navigate(`/exercisedetails`);
    });
  };

  const handleSignUp = (params) => {
    axios.post("/users.json", params).then((response) => {
      console.log(response.data);
    });
  };

  let homePage;
  if (localStorage.jwt === undefined) {
    homePage = (
      <div>
        <SignUp onSignUp={handleSignUp} handleSubmit={handleLogin} errors={errors} />
      </div>
    );
  } else {
    homePage = (
      <div>
        <ProgramIndex
          programs={programs}
          onCreateProgram={handleCreateProgram}
          onDestroyProgram={handleDestoryProgram}
        />
      </div>
    );
  }

  useEffect(handleIndexPrograms, []);
  useEffect(handleIndexExercises, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={homePage} />
        <Route
          path="/program/:id"
          element={
            <ProgramShow
              program={program}
              onShowProgram={handleShowProgram}
              onShowDay={handleShowDay}
              onCreateDay={handleCreateDay}
              onDestroyDay={handleDestroyDay}
            />
          }
        />
        <Route
          path="/day/:id"
          element={
            <DayShow
              day={day}
              onShowDay={handleShowDay}
              onShowModal={handleModalShow}
              onDestoryExerciseDay={handleDestroyExerciseDay}
              onShowExercise={handleShowExercise}
            />
          }
        />
        <Route
          path="/exercises"
          element={<ExerciseIndex onShowExercise={handleShowExercise} exercises={exercises} />}
        />
        <Route path="/exercisedetails" element={<ExerciseShow exercise={exercise} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>

      <Modal show={isModalVisible} onClose={handleModalClose}>
        <ExerciseAdd exercises={exercises} day={day} onCreateExerciseDay={handleCreateExerciseDay} />
      </Modal>
    </div>
  );
}
