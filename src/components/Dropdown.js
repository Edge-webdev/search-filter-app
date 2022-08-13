export default function Dropdown(props) {
  const dropdownItems = props.buttonName.map((item) => (
    <li key={item}>
      <button
        className="dropdown-item"
        type="button"
        value={item}
        onClick={props.handleChange}
      >
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
