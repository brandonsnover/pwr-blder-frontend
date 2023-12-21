/* eslint-disable react/prop-types */
export function ExerciseIndex(props) {
  return (
    <div>
      <h1>Exercise List</h1>
      <div>
        {props.exercises.map((exercise) => (
          <div key={exercise.id}>
            <h2>{exercise.name}</h2>
            <p>{exercise.volume}</p>
            <p>{exercise.short_description}</p>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
