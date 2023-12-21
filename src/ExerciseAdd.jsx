/* eslint-disable react/prop-types */
export function ExerciseAdd(props) {
  return (
    <div>
      <h1>Add an Exercise</h1>
      <div>
        {props.exercises.map((exercise) => {
          const params = { day_id: props.day.id, exercise_id: exercise.id };
          return (
            <div key={exercise.id}>
              <h2>{exercise.name}</h2>
              <p>{exercise.volume}</p>
              <p>{exercise.short_description}</p>
              <button onClick={() => props.onCreateExerciseDay(params)}>Add this Exercise</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
