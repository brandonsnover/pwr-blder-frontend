/* eslint-disable react/prop-types */
export function DayShow(props) {
  return (
    <div>
      <h1>Day: {props.day.name}</h1>
      <h2>Exercises</h2>
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
