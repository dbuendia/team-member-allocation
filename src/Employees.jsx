import Teams from "./Teams";
import TeamMembers from "./TeamMembers";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className="container">
      <p>
        Se muestran resaltados los miembros del team seleccionado en el
        desplegable. Haz click en un miembro para eliminarlo de su equipo actual
        o añadirlo al team seleccionado en el desplegable.
      </p>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
        <div className="col-10">
          <div className="card-collection">
            {
              <TeamMembers
                employees={employees}
                handleEmployeeCardClick={handleEmployeeCardClick}
                selectedTeam={selectedTeam}
              />
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
