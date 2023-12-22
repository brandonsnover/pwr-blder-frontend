/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export function DayShow(props) {
  const storedDayId = localStorage.getItem("dayId");
  useEffect(() => {
    if (storedDayId) {
      props.onShowDay({ day_id: storedDayId });
    }
  }, []);

  return (
    <div>
      <div>
        Day:{" "}
        {props.day.length > 0 && props.day[0].day.name ? <h1>{props.day[0].day.name}</h1> : <h1>name not found</h1>}
      </div>
      <h2>Exercises</h2>
      <button onClick={() => props.onShowModal()}>Add an exercise</button>
      <div>
        {props.day && props.day.length > 0 ? (
          props.day.map((day) => (
            <div key={day.id}>
              <h3>{day.exercise.name}</h3>
              <p>{day.exercise.volume}</p>
              <p>{day.exercise.short_description}</p>
              <p>{day.id}</p>
              <button onClick={() => props.onDestoryExerciseDay(day.id)}>Remove Exercise</button>
            </div>
          ))
        ) : (
          <p>Day currently empty</p>
        )}
      </div>
    </div>
  );
}
