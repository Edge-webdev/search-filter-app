export default function SearchBar(props) {
  return (
    <form className="d-flex m-3" role="search">
      <div className="input-group mb-3">
        <i className="bi bi-search input-group-text border border-end-0 bg-white"></i>
        <input
          type="text"
          className="form-control border border-start-0"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
}
