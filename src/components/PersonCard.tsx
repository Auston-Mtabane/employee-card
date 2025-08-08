interface Props {
  employeeId: number;
  name: string;
  surname: string;
  dateOfBirth: string;
  occupation: string;
  experience: string;
}
const PersonCard = ({
  employeeId,
  name,
  surname,
  dateOfBirth,
  occupation,
  experience,
}: Props) => {
  return (
    <div className="personCard">
      <div id="profile-picture">
        <img
          src={`/assets/profile-picture-${employeeId}.jpg`}
          alt="prifilehere"
          width={200}
        />
      </div>
      <div id="left">
        <h5>{name}</h5>
        <p>{surname}</p>
        <p>{dateOfBirth}</p>
      </div>

      <div id="right">
        <h5>{occupation}</h5>
        <div >
          <p id="exp-wrapper">{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
