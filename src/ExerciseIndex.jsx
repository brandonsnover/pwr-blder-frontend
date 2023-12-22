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
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="item">
            <a href="property-details.html">
              <img src="assets/images/property-01.jpg" alt="" />
            </a>
            <span className="category">Luxury Villa</span>
            <h6>$2.264.000</h6>
            <h4>
              <a href="property-details.html">18 New Street Miami, OR 97219</a>
            </h4>
            <ul>
              <li>
                Bedrooms: <span>8</span>
              </li>
              <li>
                Bathrooms: <span>8</span>
              </li>
              <li>
                Area: <span>545m2</span>
              </li>
              <li>
                Floor: <span>3</span>
              </li>
              <li>
                Parking: <span>6 spots</span>
              </li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
