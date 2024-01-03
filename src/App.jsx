import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import NotFound from "./components/NotFound";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import Nav from "./components/Nav";
import data from "./data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || data
  );

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(e) {
    setSelectedTeam(e.target.value);
  }

  function handleEmployeeCardClick(e) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }

  return (
    <div>
      <Router>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={<GroupedTeamMembers employees ={employees} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />}
          ></Route>
          <Route
            path="*"
            element={<NotFound />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
