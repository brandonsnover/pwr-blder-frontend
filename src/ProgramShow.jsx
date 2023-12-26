/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function ProgramShow(props) {
  const navigate = useNavigate();

  const goToDay = () => {
    navigate(`/day`);
  };

  const handleShowAndNavigate = (id) => {
    props.onShowDay({ day_id: id });
    goToDay();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("selectedName");
    const program_id = props.program.id;
    if (name && program_id) {
      const params = { name, program_id };
      props.onCreateDay(params);
      event.target.reset();
      navigate(`/day`);
    } else {
      console.error("Unable to create day");
      console.log(props.program_id);
    }
  };

  return (
    <div>
      <h1 className="text-center">{props.program.name}</h1>
      <div className="properties section">
        <div className="container">
          <div className="row">
            {props.program.days && props.program.days.length > 0 ? (
              props.program.days.map((day) => (
                <div className="col-lg-4 col-md-6" key={day.id}>
                  <div className="item">
                    <h2>{day.name} Day</h2>
                    <button className="btn btn-secondary m-1" onClick={() => handleShowAndNavigate(day.id)}>
                      Edit Day
                    </button>
                    <button className="btn btn-secondary m-1" onClick={() => props.onDestroyDay(day)}>
                      Delete Day
                    </button>
                    <div>
                      {day.exercises && day.exercises.length > 0 ? (
                        day.exercises.map((exercise) => (
                          <div key={exercise.id}>
                            <span className="category">{exercise.name}</span>
                            <h6>something</h6>
                            <ul>
                              <li>
                                Recomended Volume: <span>{exercise.volume}</span>
                              </li>
                              <li>
                                Muscle Targeted: <span>{exercise.short_description}</span>
                              </li>
                            </ul>
                          </div>
                        ))
                      ) : (
                        <p>Nothing in Day</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>Currently 0 days in the program.</p>
                <p>Lets add some!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="my-4">
        <div className="dropdown">
          Select Day Type:
          <select name="selectedName" className="ml-2">
            <option value="Full Body">Full Body</option>
            <option value="Upper Body">Upper Body</option>
            <option value="Lower Body">Lower Body</option>
            <option value="Push">Push</option>
            <option value="Pull">Pull</option>
            <option value="Legs">Legs</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-secondary">
            Create New Day in {props.program.name}
          </button>
        </div>
      </form>
    </div>
  );
}
