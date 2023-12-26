/* eslint-disable react/prop-types */
export function ExerciseAdd(props) {
  const dayId = localStorage.getItem("dayId");

  return (
    <div>
      <h1>Add an Exercise</h1>
      <div className="properties section">
        <div className="container">
          <div className="row">
            {props.exercises.map((exercise) => {
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
