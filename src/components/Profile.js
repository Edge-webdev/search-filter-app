export default function Profile(props) {
  const status = Math.random() > 0.5;
  return (
    <div id="profile-card" className="card m-3">
      <div className="card-body">
        <img src={props.profileImage} className="card-img-top mb-3" alt="" />
        <h5 className="card-title">
          {props.userHandle} {props.lastName}
        </h5>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          veniam reprehenderit fuga pariatur quaerat enim modi corrupti
          accusamus accusantium expedita?
        </p>
        {/* eslint-disable-next-line */}
        <footer className="d-flex flex-row align-items-center">
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
    </div>
  );
}
