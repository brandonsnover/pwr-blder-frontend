/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
export function ExerciseShow(props) {
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{props.exercise.name}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src={props.exercise.img_url} alt="" />
              </div>
              <div className="main-content">
                {props.exercise && props.exercise.tags && props.exercise.tags.length > 0 ? (
                  <span className="category">{props.exercise.tags[0].name}</span>
                ) : (
                  <p>null</p>
                )}
                <h3>{props.exercise.short_description}</h3>
                <h4>{props.exercise.long_description}</h4>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is a compound vs. accessory exercise ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Compound exercises involve the movement of multiple joints and engage multiple muscle groups
                      simultaneously. While accessories exercises target specific muscle groups or assist in improving
                      the performance of compound exercises, they are often considered supplemental to the main compound
                      movements.{" "}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Why is this Important ?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Compound Exercises: Engage multiple muscle groups simultaneously, promoting overall muscle
                      development. Accessory Exercises: Target specific muscles that might not be fully activated during
                      compound movements, addressing muscle imbalances and ensuring comprehensive development.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Break through Plateus !
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Compound Exercises: Provide a basis for progressive overload, crucial for continued strength
                      gains. Accessory Exercises: Introduce variety to workouts, prevent plateaus, and address specific
                      weaknesses that may hinder progress.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6016/6016314.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Words
                      <br />
                      <span>Go Here</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6016/6016314.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Contract
                      <br />
                      <span>Contract Ready</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6016/6016314.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h4>
                      Payment
                      <br />
                      <span>Payment Process</span>
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
