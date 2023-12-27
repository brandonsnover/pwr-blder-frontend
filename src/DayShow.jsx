/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

export function DayShow(props) {
  const [dayName, setDayName] = useState("");
  const storedDayId = localStorage.getItem("dayId");

  const handleEmptyDay = (id) => {
    axios.get(`http://localhost:3000/days/${id}.json`).then((response) => {
      console.log(response.data);
      setDayName(response.data.name);
    });
  };

  useEffect(() => {
    if (storedDayId) {
      props.onShowDay({ day_id: storedDayId });
    }
  }, []);

  useEffect(() => {
    if (props.day && props.day.length === 0) {
      handleEmptyDay(storedDayId);
    }
  }, [props.day]);

  return (
    <div>
      <div className="text-center">
        {props.day.length > 0 && props.day[0].day.name ? <h1>{props.day[0].day.name} Day</h1> : <h1>{dayName} Day</h1>}
      </div>
      <h2 className="text-center">Exercises</h2>
      <div className="text-center">
        <button className="btn btn-secondary" onClick={() => props.onShowModal()}>
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
                    <span className="category">Tag Here</span>
                    <h6>something</h6>
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
                      <a href="property-details.html">More info</a>
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
              <h1>Day currently empty</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
