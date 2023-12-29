/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function ProgramIndex(props) {
  const navigate = useNavigate();

  const goToProgram = (id) => {
    navigate(`/program/${id}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProgram(params);
    event.target.reset();
    window.location.reload();
  };

  return (
    <div>
      <h1 className="text-center">Your Programs</h1>
      {props.programs.length > 0 ? (
        <div className="properties section">
          <div className="container">
            <div className="row">
              {props.programs.map((program) => (
                <div className="col-lg-6 mb-4" key={program.id}>
                  <div className="item">
                    <h2>{program.name}</h2>
                    <h4>This currently is a {program.days.length} day program</h4>
                    <div>
                      {program.days && program.days.length > 0 ? (
                        program.days.map((day) => (
                          <div key={day.id}>
                            <p></p>
                            <span className="category">{day.name}</span>
                            <h6>{day.exercises.length} Exercises</h6>
                          </div>
                        ))
                      ) : (
                        <h4>Nothing in program</h4>
                      )}
                    </div>
                    <div>
                      {program.tag_list && program.tag_list.length > 0 ? (
                        <h6 className="text-center">
                          This program covers the following: {program.tag_list.map((tag) => tag.name).join(", ")}
                        </h6>
                      ) : (
                        <h6>No Muscles Covered: Add some Days and/or Exercises!</h6>
                      )}
                    </div>
                    <ul></ul>
                    <div className="main-button">
                      <button onClick={() => goToProgram(program.id)} className="btn btn-secondary m-1">
                        Go to Program
                      </button>
                      <button onClick={() => props.onDestroyProgram(program)} className="btn btn-secondary m-1">
                        Delete This Program
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container mt-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="programName" className="form-label">
                  Program Name
                </label>
                <input type="text" className="form-control" id="programName" name="name" />
              </div>
              <button type="submit" className="btn btn-secondary">
                Create New Program
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center"> You have no programs lets make one!</h1>
          <div className="container mt-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="programName" className="form-label">
                  Enter New Program Name
                </label>
                <input type="text" className="form-control " id="programName" name="name" />
              </div>
              <button type="submit" className="btn btn-secondary">
                Create New Program
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
