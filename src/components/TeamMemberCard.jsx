import femaleProfile from ".././assets/female.jpg";
import maleProfile from ".././assets/male.jpg";

const TeamMemberCard = ({
  employees,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return employees.map((em) => (
    <div
      key={em.id}
      id={em.id}
      className={
        em.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      onClick={handleEmployeeCardClick}
    >
      {em.gender === "male" ? (
        <img
          src={maleProfile}
          alt="male employee profile"
          className="card-img-top"
        />
      ) : (
        <img
          src={femaleProfile}
          alt="female employee profile"
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
  ));
};

export default TeamMemberCard;
