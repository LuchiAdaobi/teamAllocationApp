import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam}) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
            <h1>Grouped Team Members</h1>
        </div>
      </div>
    </div>
  );
};

export default GroupedTeamMembers;