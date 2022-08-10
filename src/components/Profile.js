export default function Profile(props) {
  return (
    <div id="profile-card" className="card m-3">
      <div className="card-body">
        <img
          src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
          className="card-img-top mb-3"
          alt=""
        />
        <h5 className="card-title">{props.userhandle}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          veniam reprehenderit fuga pariatur quaerat enim modi corrupti
          accusamus accusantium expedita?
        </p>
        {/* eslint-disable-next-line */}
        <a href="#" className="btn btn-primary">
          Profile
        </a>
      </div>
    </div>
  );
}
