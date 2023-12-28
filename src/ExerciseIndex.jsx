import { useState } from "react";

/* eslint-disable react/prop-types */
export function ExerciseIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <h1 className="text-center mt-3">Exercise List</h1>
      <div className="properties section">
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
        <div className="container">
          <div className="row">
            {props.exercises
              .filter((exercise) => exercise.name.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
              .map((exercise) => (
                <div className="col-lg-4 col-md-6" key={exercise.id}>
                  <div className="item">
                    <a href="property-details.html">
                      <img src={exercise.img_url} alt="" />
                    </a>
                    {exercise.tags && exercise.tags.length > 0 && (
                      <span className="category">{exercise.tags[0].name}</span>
                    )}

                    {exercise.tags && exercise.tags.length > 1 && <h6>{exercise.tags[1].name}</h6>}

                    <h2>{exercise.name}</h2>
                    <ul>
                      <li>
                        Recomended Volume: <span>{exercise.volume}</span>
                      </li>
                      <li>
                        Muscle Targeted: <span>{exercise.short_description}</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <button onClick={() => props.onShowExercise(exercise.id)} className="btn btn-secondary">
                        More info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
