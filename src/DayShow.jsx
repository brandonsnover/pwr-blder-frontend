/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function DayShow(props) {
  const pageparams = useParams();

  useEffect(() => {
    props.onShowDay({ day_id: pageparams.id });
  }, []);

  return (
    <div>
      <div className="text-center mt-3">
        {props.day.length > 0 && props.day[0].day.name ? <h1>{props.day[0].day.name} Day</h1> : <h1>Day</h1>}
      </div>
      <h2 className="text-center">Exercises</h2>
      <div className="text-center">
        <button className="btn btn-secondary mt-3" onClick={() => props.onShowModal()}>
          Add an exercise
        </button>
      </div>
      <div className="properties section">
        <div className="container">
          <div className="row">
            {props.day && props.day.length > 0 ? (
              props.day.map((day) => (
                <div className="col-lg-6 mb-4" key={day.id}>
                  <div className="item">
                    <a href="property-details.html">
                      <img src={day.exercise.img_url} alt="" />
                    </a>
                    <span className="category">{day.exercise.tags[0].name}</span>
                    <h6>{day.exercise.tags[1].name}</h6>
                    <h2>{day.exercise.name}</h2>
                    <ul>
                      <li>
                        Recomended Volume: <span>{day.exercise.volume}</span>
                      </li>
                      <li>
                        Muscle Targeted: <span>{day.exercise.short_description}</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <button onClick={() => props.onShowExercise(day.exercise.id)} className="btn btn-secondary">
                        More info
                      </button>
                    </div>
                    <div className="main-button m-1">
                      <button className="btn btn-secondary" onClick={() => props.onDestoryExerciseDay(day.id)}>
                        Remove Exercise
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">Day currently empty</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
