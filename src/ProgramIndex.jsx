/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function ProgramIndex(props) {
  const navigate = useNavigate();

  const goToProgram = () => {
    navigate(`/program`);
  };

  const handleShowAndNavigate = (id) => {
    props.onShowProgram(id);
    goToProgram();
  };

  return (
    <div>
      <h1>All Programs</h1>
      <div>
        {props.programs.map((program) => (
          <div key={program.id}>
            <h2>{program.name}</h2>
            <p>This currently is a {program.days.length} day program</p>
            <button onClick={() => handleShowAndNavigate(program.id)}>Go to Program</button>
            <div>
              {program.days && program.days.length > 0 ? (
                program.days.map((day) => (
                  <div key={day.id}>
                    <p>Day: {day.name}</p>
                  </div>
                ))
              ) : (
                <p>Nothing in program</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button>Create New Program</button>
    </div>
  );
}
