/* eslint-disable react/prop-types */
export function ExerciseIndex(props) {
  return (
    <div>
      <h1 className="text-center">Exercise List</h1>
      <div className="properties section">
        <div className="container">
          <div className="row">
            {props.exercises.map((exercise) => (
              <div className="col-lg-4 col-md-6" key={exercise.id}>
                <div className="item">
                  <a href="property-details.html">
                    <img src={exercise.img_url} alt="" />
                  </a>
                  <span className="category">{exercise.tags[0].name}</span>
                  <h6>{exercise.tags[1].name}</h6>
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
