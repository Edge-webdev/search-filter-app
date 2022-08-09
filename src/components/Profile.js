export default function Profile() {
  return (
    <div id="profile-card" class="card m-3">
      <div class="card-body">
        <img
          src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
          className="card-img-top mb-3"
          alt=""
        />
        <h5 class="card-title">John Doe</h5>
        <p class="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          veniam reprehenderit fuga pariatur quaerat enim modi corrupti
          accusamus accusantium expedita?
        </p>
        {/* eslint-disable-next-line */}
        <a href="#" class="btn btn-primary">
          Profile
        </a>
      </div>
    </div>
  );
}
