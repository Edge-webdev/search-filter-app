export default function Profile(props) {
  const status = props.age % 2 === 0;
  return (
    <li id="profile-card" className="card m-3">
      <div className="card-body">
        <img src={props.profileImage} className="card-img-top mb-3" alt="" />
        <h5 className="card-title">{props.username}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          veniam reprehenderit fuga pariatur quaerat enim modi corrupti
          accusamus accusantium expedita?
        </p>
        <footer className="d-flex flex-row align-items-center">
          {/* eslint-disable-next-line */}
          <a href="#" className="btn btn-primary">
            Profile
          </a>
          <p
            className={
              status ? "mb-0 ms-3 text-success" : "mb-0 ms-3 text-danger"
            }
          >
            {status ? "Online" : "Offline"}
          </p>
        </footer>
      </div>
    </li>
  );
}
