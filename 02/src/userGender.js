import data from "./users.json";

function renderUser() {
  return data.map((user) => {
    let isHe = user.gender.toLowerCase() === "male";
    return (
      <div className="box">
        <p className={isHe ? "blue" : "red"}>
          {user.first_name} {user.last_name} ({user.gender})
        </p>
        <img src={user.avatar} alt="harchi"></img>
      </div>
    );
  });
}
function UserGender() {
  return <div className="d-flex">{renderUser()}</div>;
}
export default UserGender;
