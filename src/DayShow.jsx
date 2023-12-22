/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export function DayShow(props) {
  const storedDayId = localStorage.getItem("dayId");
  useEffect(() => {
    if (storedDayId) {
      props.onShowDay(storedDayId);
    }
  }, []);

  return (
    <div>
      <h1>Day: {props.day.name}</h1>
      <h2>Exercises</h2>
      <button onClick={() => props.onShowModal()}>Add an exercise</button>
      <div>
        {props.day.exercises && props.day.exercises.length > 0 ? (
          props.day.exercises.map((exercise) => (
            <div key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>{exercise.volume}</p>
              <p>{exercise.short_description}</p>
            </div>
          ))
        ) : (
          <p>Day currently empty</p>
        )}
      </div>
    </div>
  );
}
