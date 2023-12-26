/* eslint-disable react/prop-types */
export function ExerciseIndex(props) {
  return (
    <div>
      <h1>Exercise List</h1>
      <div className="properties section">
        <div className="container">
          <div className="row">
            {props.exercises.map((exercise) => (
              <div className="col-lg-4 col-md-6" key={exercise.id}>
                <div className="item">
                  <a href="property-details.html">
                    <img src="assets/images/property-01.jpg" alt="" />
                  </a>
                  <span className="category">Luxury Villa</span>
                  <h6>$2.264.000</h6>
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
                    <a href="property-details.html">More info</a>
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
