import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  // Accedemos al almacenamiento local para setear el valor que hubiera sido seleccionado para selectedTeam.
  // Si no hay ninguno, por defecto pondremos "TeamA"
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  // Cada vez que cambie el array de empleados guardaremos en el localStorage la lista de empleados y el selectedTeamj
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(e) {
    setTeam(e.target.value);
  }

  function handleEmployeeCardClick(e) {
    // Creo un nuevo array de empleados y recorremos el array vigente de empleados con .map
    const transformedEmployees = employees.map((employee) =>
      // Si el id del empleado en el array de empleados coincide con el id del empleado de la card seleccionada...
      // (Leemos el currentTarget (el elemento que tiene el evento attached) y lo parseamos a int porque en realidad es un string)
      employee.id === parseInt(e.currentTarget.id)
        ? // ... Y si el empleado seleccionado ya está dentro del equipo seleccionado en el dropdown
          employee.teamName === selectedTeam
          ? // Eliminamos a ese empleado de ese equipo borrando su teamName
            { ...employee, teamName: "" }
          : // O lo agregamos al equipo seleccionado en el dropdown añadiendo ese valor a su teamName
            { ...employee, teamName: selectedTeam }
        : employee
    );
    // Seteamos el nuevo estado de empleados
    setEmployees(transformedEmployees);
  }
  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        // Que nos devuelva un array con los empleados que estén en el team seleccionado y contamos su length para obtener el número
        teamMemberCount={
          employees.filter((employee) => {
            return employee.teamName === selectedTeam;
          }).length
        }
      />
      <Routes>
        <Route
          path="/team-member-allocation/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        />
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
