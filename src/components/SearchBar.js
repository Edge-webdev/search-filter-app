export default function SearchBar() {
  return (
    <form class="d-flex m-3" role="search">
      <div class="input-group mb-3">
        <i class="bi bi-search input-group-text border border-end-0 bg-white"></i>
        <input
          type="text"
          class="form-control border border-start-0"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
}
