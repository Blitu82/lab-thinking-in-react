function SearchBar({ onChange }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex align-items-center" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={onChange}
          />
          <div className="form-check ms-2 mb-0">
            <input className="form-check-input" type="checkbox" id="stock" />
            <label className="form-check-label" htmlFor="stock">
              Only show products in stock
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
