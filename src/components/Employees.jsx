import { useState } from "react";
import femaleProfile from ".././assets/female.jpg";
import maleProfile from ".././assets/male.jpg";

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3 ">
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
        <div className="row justify-content-center mt-3 mb-3 ">
          <div className="col-8">
            <div className="card-collection">
              {employees.map((em) => (
                <div
                key={em.id}
                  id={em.id}
                  className={
                    em.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  onClick={handleEmployeeCardClick}
                >
                  {em.gender === "male" ? (
                    <img
                      src={maleProfile}
                      alt="male employee 
                    profile"
                      className="card-img-top"
                    />
                  ) : (
                    <img
                      src={femaleProfile}
                      alt="female employee
                    profile"
                      className="card-img-top"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">Full Name: {em.fullName}</h5>
                    <p className="card-text">
                      <b>Designation: </b>
                      {em.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
