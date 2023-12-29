/* eslint-disable react/prop-types */
import { useState } from "react";

export function ExerciseAdd(props) {
  const dayId = localStorage.getItem("dayId");
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1>Add an Exercise</h1>
      <h3 className="text-center mt-2 mb-2">Search an Exercise:</h3>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <input
            list="name"
            type="text"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
            className="form-control m-3 border-secondary"
          />
        </div>
      </div>
      <datalist id="name">
        {searchFilter === "" ? (
          <option></option>
        ) : (
          props.exercises.map((exercise) => <option key={exercise.id}>{exercise.name}</option>)
        )}
      </datalist>
      <div className="properties section">
        <div className="container">
          <div className="row">
            {props.exercises
              .filter((exercise) => exercise.name.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
              .map((exercise) => {
                const params = { day_id: dayId, exercise_id: exercise.id };
                return (
                  <div className="item" key={exercise.id}>
                    <h2>{exercise.name}</h2>
                    <ul>
                      <li>
                        Recomended Volume: <span>{exercise.volume}</span>
                      </li>
                      <li>
                        Muscle Targeted: <span>{exercise.short_description}</span>
                      </li>
                      <li>
                        Type: <span>{exercise.tags && exercise.tags[0] && exercise.tags[0].name}</span>
                      </li>
                      <li>
                        Body: <span>{exercise.tags && exercise.tags[1] && exercise.tags[1].name}</span>
                      </li>
                    </ul>
                    <button className="btn btn-secondary" onClick={() => props.onCreateExerciseDay(params)}>
                      Add this Exercise
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
