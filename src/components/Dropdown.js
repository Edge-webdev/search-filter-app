export default function Dropdown(props) {
  const items = props.buttonName;
  const dropdownItems = items.map((item) => (
    <li>
      <button class="dropdown-item" type="button">
        {item}
      </button>
    </li>
  ));
  return (
    <div class="dropdown ms-3">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.title}
      </button>
      <ul class="dropdown-menu">{dropdownItems}</ul>
    </div>
  );
}
