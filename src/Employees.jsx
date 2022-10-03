import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className="container">
      <p>TODO Añadir instrucciones aquí:</p>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => {
              return (
                <div
                  key={employee.id}
                  id={employee.id}
                  // Si la card pertenece al selectedTeam, le añadimos la clase standout para destacarla
                  className={
                    employee.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                >
                  {employee.gender === "female" ? (
                    <img src={femaleProfile} className="card-img-top" />
                  ) : (
                    <img src={maleProfile} className="card-img-top" />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation </b>
                      {employee.designation}
                    </p>
                    <p>{employee.teamName}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;