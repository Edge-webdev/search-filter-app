export default function Dropdown(props) {
  const items = props.buttonName;
  const dropdownItems = items.map((item) => (
    <li key={item}>
      <button className="dropdown-item" type="button">
        {item}
      </button>
    </li>
  ));
  return (
    <div className="dropdown ms-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.title}
      </button>
      <ul className="dropdown-menu">{dropdownItems}</ul>
    </div>
  );
}
