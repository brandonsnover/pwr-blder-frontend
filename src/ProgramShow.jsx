/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function ProgramShow(props) {
  const navigate = useNavigate();

  const goToDay = () => {
    navigate(`/day`);
  };

  const handleShowAndNavigate = (id) => {
    props.onShowDay(id);
    goToDay();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const program_id = props.program.id;
    if (name && program_id) {
      const params = { name, program_id };
      props.onCreateDay(params);
      event.target.reset();
      navigate("/day");
    } else {
      console.error("Unable to create day");
    }
  };

  return (
    <div>
      <h1>{props.program.name}</h1>
      <div>
        {props.program.days && props.program.days.length > 0 ? (
          props.program.days.map((day) => (
            <div key={day.id}>
              <h2>Day: {day.name}</h2>
              <button onClick={() => handleShowAndNavigate(day.id)}>Edit Day</button>
              <div>
                {day.exercises && day.exercises.length > 0 ? (
                  day.exercises.map((exercise) => (
                    <div key={exercise.id}>
                      <p>Exercise: {exercise.name}</p>
                      <p>{exercise.volume}</p>
                      <p>{exercise.short_description}</p>
                      <p>-----</p>
                    </div>
                  ))
                ) : (
                  <p>Nothing in Day</p>
                )}
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Create New Day in Program</button>
      </form>
    </div>
  );
}
